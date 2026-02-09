import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { Role, SolicitationStatus } from "../../../prisma/generated";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { DocxService } from "../../common/services/docx-service";
import { GoogleDriveService } from "../../common/services/google-drive.service";
import { MailService } from "../../common/services/mail.service";
import { CurrentUserType } from "../../common/utils/current-user.util";
import { examReportEmailTemplate } from "../../common/utils/docx-template";
import { ExamsService } from "../exams/exams.service";
import { ExamsResultTemplateDto } from "../examsResultTemplate/dto/exams.result.template.dto";
import { ExamsResultTemplateService } from "../examsResultTemplate/exams.result.template.service";
import { InfectiousAgentsService } from "../infectious-agents/infectious-agents.service";
import { SampleService } from "../sample/sample.service";
import { SolicitationHistoryDto } from "../solicitationHistory/dto/solicitation.history.dto";
import { SolicitationHistoryService } from "../solicitationHistory/solicitation.history.service";
import { UserViewDto } from "../user/dto/user.dto";
import { UserService } from "../user/user.service";
import { formatHumanList, joinNonEmpty } from "../variables/util/util";
import { VariablesService } from "../variables/variables.service";
import {
  SolicitationDto,
  SolicitationFilterDto,
  SolicitationMetricsQueryDto,
} from "./dto/solicitation.dto";
import { SolicitationRepository } from "./solicitation.repository";

const examResultTypeTranslations: Record<string, string> = {
  PCR_QUALITATIVO: "PCR qualitativo",
  PCR_QUANTITATIVO: "PCR quantitativo",
};

const solicitationColectTypeConclusionTranslations: Record<string, string> = {
  NAO_INFORMADO: "Não informado",
  TESTE1: "Teste 1",
  TESTE2: "Teste 2",
};

const solicitationSampleQualityTranslations: Record<string, string> = {
  SATISFATORIA: "Satisfatória",
  INSATISFATORIA: "Insatisfatória",
};

@Injectable()
export class SolicitationService {
  private readonly logger = new Logger(SolicitationService.name);

  constructor(
    private readonly repo: SolicitationRepository,
    private readonly variableService: VariablesService,
    private readonly examsResultTemplateService: ExamsResultTemplateService,
    private readonly solicitationHistoryService: SolicitationHistoryService,
    private readonly userService: UserService,
    private readonly docxService: DocxService,
    private readonly mailService: MailService,
    private readonly examsService: ExamsService,
    private readonly infectiousAgentsService: InfectiousAgentsService,
    private readonly sampleService: SampleService,
    private readonly googleDriveService: GoogleDriveService,
  ) {}

  public async findAll(
    pagination: PaginationQueryDto,
    user?: CurrentUserType,
    filter?: SolicitationFilterDto,
  ): Promise<SuccessResponse<SolicitationDto[]>> {
    const where: any = {};

    where.isDeleted = false;

    if (user?.role === Role.VETERINARIO && user?.id) {
      where.userId = user.id;
    }

    if (filter?.tutor) {
      where.tutor = { contains: filter.tutor, mode: "insensitive" };
    }

    if (filter?.patient) {
      where.patient = { contains: filter.patient, mode: "insensitive" };
    }

    if (filter?.status) {
      where.status = filter.status;
    }

    if (filter?.rangeDate) {
      where.createdAt = {
        gte: filter.rangeDate.range.from,
        lte: filter.rangeDate.range.to,
      };
    }

    const { items, total, hasNextPage, totalPages } = await this.repo.findAll(
      pagination,
      where,
    );

    return new SuccessResponse(items, null, {
      total,
      limit: pagination.limit,
      currentPage: pagination.currentPage,
      totalPages,
      hasNextPage,
    });
  }

  public async findOne(id: string): Promise<SolicitationDto | null> {
    return await this.repo.findById(id);
  }

  public async getStatusMetrics(query: SolicitationMetricsQueryDto) {
    const { where, range } = this.buildDateRangeWhere(query);
    const solicitations = await this.repo.findMany({
      where,
      select: { status: true },
    });

    const statusCounts = new Map<string, number>();
    for (const status of Object.values(SolicitationStatus)) {
      statusCounts.set(status, 0);
    }

    for (const solicitation of solicitations || []) {
      if (!solicitation?.status) continue;
      statusCounts.set(
        solicitation.status,
        (statusCounts.get(solicitation.status) ?? 0) + 1,
      );
    }

    return {
      range,
      total: solicitations?.length ?? 0,
      items: Array.from(statusCounts.entries()).map(([status, count]) => ({
        status,
        count,
      })),
    };
  }

  public async getExamsInfectiousMetrics(query: SolicitationMetricsQueryDto) {
    const { where, range } = this.buildDateRangeWhere(query);
    const solicitations = await this.repo.findMany({
      where,
      select: { status: true, exams: true, infectiousAgents: true },
    });

    const examIds = new Set<string>();
    const infectiousIds = new Set<string>();

    for (const solicitation of solicitations || []) {
      for (const examId of solicitation.exams || []) {
        if (examId) examIds.add(examId);
      }
      for (const infectiousId of solicitation.infectiousAgents || []) {
        if (infectiousId) infectiousIds.add(infectiousId);
      }
    }

    const [exams, infectiousAgents] = await Promise.all([
      examIds.size > 0
        ? this.examsService.findAllWithoutPagination(Array.from(examIds))
        : Promise.resolve([]),
      infectiousIds.size > 0
        ? this.infectiousAgentsService.findAllWithoutPagination(
            Array.from(infectiousIds),
          )
        : Promise.resolve([]),
    ]);

    const examNameById = new Map(
      exams.map((exam) => [exam.id, exam.name ?? exam.id]),
    );
    const infectiousNameById = new Map(
      infectiousAgents.map((ia) => [ia.id, ia.name ?? ia.id]),
    );

    const examCounts = new Map<string, { open: number; closed: number }>();
    const infectiousCounts = new Map<
      string,
      { open: number; closed: number }
    >();

    for (const solicitation of solicitations || []) {
      const isClosed = solicitation.status === SolicitationStatus.FINALIZADO;

      for (const examId of solicitation.exams || []) {
        const name = examNameById.get(examId) ?? examId;
        const current = examCounts.get(name) ?? { open: 0, closed: 0 };
        if (isClosed) {
          current.closed += 1;
        } else {
          current.open += 1;
        }
        examCounts.set(name, current);
      }

      for (const infectiousId of solicitation.infectiousAgents || []) {
        const name = infectiousNameById.get(infectiousId) ?? infectiousId;
        const current = infectiousCounts.get(name) ?? { open: 0, closed: 0 };
        if (isClosed) {
          current.closed += 1;
        } else {
          current.open += 1;
        }
        infectiousCounts.set(name, current);
      }
    }

    const toPercentage = (count: number, total: number) =>
      total === 0 ? 0 : Number(((count / total) * 100).toFixed(2));

    const mapCounts = (map: Map<string, { open: number; closed: number }>) =>
      Array.from(map.entries()).map(([name, counts]) => {
        const total = counts.open + counts.closed;
        return {
          name,
          openCount: counts.open,
          closedCount: counts.closed,
          openPercent: toPercentage(counts.open, total),
          closedPercent: toPercentage(counts.closed, total),
          total,
        };
      });

    return {
      range,
      exams: mapCounts(examCounts),
      infectiousAgents: mapCounts(infectiousCounts),
    };
  }

  public async create(
    data: SolicitationDto,
    user: CurrentUserType,
  ): Promise<SolicitationDto> {
    return await this.repo.transaction<SolicitationDto>(async (tx) => {
      const solicitation = await this.repo.create(data);

      await this.solicitationHistoryService.create({
        id: undefined,
        solicitationId: solicitation.id,
        newStatus: solicitation.status,
        changedAt: new Date(),
        changedById: user.id,
        previousStatus: null,
        blockedCause: solicitation.blockedCause || null,
      });

      return solicitation;
    });
  }

  public async update(
    id: string,
    data: SolicitationDto,
    user?: CurrentUserType,
    isExecuteHistoryCheck = true,
  ): Promise<SolicitationDto> {
    return await this.repo.transaction<SolicitationDto>(async (tx) => {
      const updatedSolicitation = await this.repo.update(id, data);

      const lastHistory =
        await this.solicitationHistoryService.findLastBySolicitationId(id);

      if (
        isExecuteHistoryCheck &&
        data.status !== undefined &&
        lastHistory.newStatus !== data.status
      ) {
        await this.solicitationHistoryService.create({
          id: undefined,
          solicitationId: id,
          newStatus: data.status,
          changedAt: new Date(),
          changedById: user.id,
          previousStatus: lastHistory.newStatus,
          blockedCause: data.blockedCause || null,
        });
      }
      return updatedSolicitation;
    });
  }

  public async getAndConfigureDocumentFromSolicitation(id: string): Promise<{
    solicitation: SolicitationDto;
    variables: Record<string, string>;
    template: ExamsResultTemplateDto;
    solicitationUserObj: UserViewDto;
  } | null> {
    const solicitation = await this.repo.findById(id);
    const variables = await this.variableService.findAllWithoutPagination();
    const template = await this.examsResultTemplateService.findFirst();
    const solicitationUserObj = await this.userService.findOne(
      solicitation.userId,
    );

    if (
      solicitation === null ||
      solicitationUserObj === null ||
      template === null ||
      variables === null
    ) {
      this.logger.warn(
        "Não foi possível finalizar a solicitação: dados incompletos.",
      );
      this.logger.debug(`Solicitação: ${JSON.stringify(solicitation)}`);
      this.logger.debug(`Usuário: ${JSON.stringify(solicitationUserObj)}`);
      this.logger.debug(`Template: ${JSON.stringify(template)}`);
      this.logger.debug(`Variáveis: ${JSON.stringify(variables)}`);
      throw new BadRequestException(
        "Dados incompletos para finalizar a solicitação.",
      );
    }

    return { solicitation, variables, template, solicitationUserObj };
  }

  public async finishSolicitation(
    id: string,
    data: SolicitationDto,
    user?: CurrentUserType,
  ): Promise<SolicitationDto> {
    const { solicitation, solicitationUserObj, template } =
      await this.getAndConfigureDocumentFromSolicitation(id);

    const buffer = await this.generateDocumentBufferToDownload(
      solicitation.id,
      template.fileData,
    );

    await this.sendEmailToDoctor(buffer, solicitationUserObj, solicitation);

    await this.googleDriveService.uploadDocx(
      buffer,
      `relatorio_solicitacao_${solicitation.id}.pdf`,
      process.env.GOOGLE_DRIVE_FOLDER_ID,
    );

    return await this.repo.transaction<SolicitationDto>(async (tx) => {
      return await this.update(id, data, user);
    });
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }

  public async blockUnblockSolititation(
    id: string,
    cause: Pick<SolicitationDto, "blockedCause">,
    user: CurrentUserType,
    existingData: SolicitationDto,
    lastHistory: SolicitationHistoryDto,
  ): Promise<SolicitationDto> {
    return await this.repo.transaction<SolicitationDto>(async (tx) => {
      if (existingData.status !== SolicitationStatus.BLOQUEADO) {
        await this.solicitationHistoryService.create({
          id: undefined,
          solicitationId: id,
          newStatus: SolicitationStatus.BLOQUEADO,
          changedAt: new Date(),
          changedById: user.id,
          previousStatus: existingData.status,
          blockedCause: cause.blockedCause || null,
        });

        existingData.status = SolicitationStatus.BLOQUEADO;
        existingData.blockedCause = cause.blockedCause;
        existingData.blockedAt = new Date();
      } else {
        await this.solicitationHistoryService.create({
          id: undefined,
          solicitationId: id,
          newStatus: lastHistory.newStatus, //Ultimo status anterior ao bloqueio
          changedAt: new Date(),
          changedById: user.id,
          previousStatus: existingData.status,
          blockedCause: null,
        });

        existingData.status = lastHistory.newStatus;
        existingData.blockedCause = null;
        existingData.blockedAt = null;
      }

      return await this.update(id, existingData, null, false);
    });
  }

  public async cancelSolititation(
    id: string,
    cause: Pick<SolicitationDto, "canceledCause">,
    user: CurrentUserType,
    existingData: SolicitationDto,
  ): Promise<SolicitationDto> {
    return await this.repo.transaction<SolicitationDto>(async (tx) => {
      await this.solicitationHistoryService.create({
        id: undefined,
        solicitationId: id,
        newStatus: SolicitationStatus.CANCELADO, //Ultimo status anterior ao bloqueio
        changedAt: new Date(),
        changedById: user.id,
        previousStatus: existingData.status,
        blockedCause: null,
      });

      existingData.status = SolicitationStatus.CANCELADO;
      existingData.canceledCause = cause.canceledCause;
      existingData.canceledAt = new Date();

      return await this.update(id, existingData, null, false);
    });
  }

  public async sendEmailToDoctor(
    documentBuffer: Buffer,
    user: UserViewDto,
    solicitation: SolicitationDto,
  ): Promise<void> {
    await this.configureFinishSolicitationEmail(
      user.email,
      user.name,
      solicitation.patient,
      solicitation.tutor,
      solicitation.createdAt,
      documentBuffer,
    );
  }

  public async generateDocumentBufferToDownload(
    solicitationId: string,
    templateBuffer: Buffer | Uint8Array,
  ) {
    const variables = await this.variableService.findAllWithoutPagination();
    const solicitation = await this.repo.findById(solicitationId);

    const variablesMapped = await this.mapSolicitationVariables(
      solicitation,
      variables,
    );

    const buffer = await this.docxService.generateDocument(
      variablesMapped,
      templateBuffer,
      solicitation,
    );

    const pdfBuffer = await this.docxService.convertDocxToPdf(buffer);

    return pdfBuffer;
  }

  public async sendEmailManually(solicitationId: string): Promise<void> {
    try {
      const { solicitation, solicitationUserObj, template } =
        await this.getAndConfigureDocumentFromSolicitation(solicitationId);

      const buffer = await this.generateDocumentBufferToDownload(
        solicitationId,
        template.fileData,
      );

      await this.sendEmailToDoctor(buffer, solicitationUserObj, solicitation);
    } catch (error) {
      console.error("Error sending email manually:", error);
      throw new BadRequestException("Erro ao enviar o e-mail.");
    }
  }

  private async configureFinishSolicitationEmail(
    email: string,
    name: string,
    patient: string,
    tutor: string,
    createdAt: Date,
    buffer: Buffer,
    isPDFFile: boolean = true,
  ) {
    await this.mailService.sendMailWithAttachment({
      to: email,
      subject: "Relatório Gerado (Laudo)",
      html: examReportEmailTemplate({
        recipientName: name,
        patientName: patient,
        tutorName: tutor,
        requestDate: createdAt.toLocaleDateString("pt-BR"),
        systemName: "SSEV - Sistema de Solicitação de Exames Veterinários",
      }),
      attachment: {
        filename: isPDFFile ? "relatorio.pdf" : "relatorio.docx",
        content: buffer,
        contentType: isPDFFile
          ? "application/pdf"
          : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      },
    });
  }

  private async mapSolicitationVariables(
    solicitation: SolicitationDto,
    variables: Record<string, string>,
  ): Promise<Record<string, string>> {
    const data: Record<string, string> = {};

    const [exams, infectiousAgents, samples] = await Promise.all([
      solicitation.exams && solicitation.exams.length > 0
        ? this.examsService.findAllWithoutPagination(solicitation.exams)
        : Promise.resolve([]),

      solicitation.infectiousAgents && solicitation.infectiousAgents.length > 0
        ? this.infectiousAgentsService.findAllWithoutPagination(
            solicitation.infectiousAgents,
          )
        : Promise.resolve([]),

      solicitation.samples && solicitation.samples.length > 0
        ? this.sampleService.findAllWithoutPagination(solicitation.samples)
        : Promise.resolve([]),
    ]);

    const examsText = [
      ...exams.map((e) => e.name.toLowerCase()),
      ...infectiousAgents.map((ia) => ia.name),
    ];

    const examsTextFormatted = formatHumanList(examsText);
    const combinedExams = joinNonEmpty(examsTextFormatted);

    solicitation.exams = [
      `${examResultTypeTranslations[solicitation.examResultType]}${combinedExams === "" ? "" : " para " + combinedExams}.`,
    ];

    const sampleText = formatHumanList(samples.map((s) => s.name));
    const combinedSamples = joinNonEmpty(sampleText.toLowerCase());

    solicitation.samples = [
      combinedSamples === ""
        ? ""
        : `Amostra de ${combinedSamples} armazenada em tubo de EDTA.`,
    ];

    for (const [key, variableName] of Object.entries(variables)) {
      const val = solicitation[key as keyof SolicitationDto];

      let formattedValue: string;
      if (Array.isArray(val)) {
        formattedValue = val.join(", ");
      } else if (val instanceof Date) {
        formattedValue = val.toLocaleDateString("pt-BR");
      } else {
        formattedValue = String(val ?? "");
      }

      data[variableName] = formattedValue;
    }

    return data;
  }

  private buildDateRangeWhere(query: SolicitationMetricsQueryDto) {
    const range = this.parseDateRange(query);
    const where: any = { isDeleted: false };

    if (range.from || range.to) {
      where.createdAt = {};
      if (range.from) where.createdAt.gte = range.from;
      if (range.to) where.createdAt.lte = range.to;
    }

    return {
      where,
      range: {
        from: range.from ? range.from.toISOString() : null,
        to: range.to ? range.to.toISOString() : null,
      },
    };
  }

  private parseDateRange(query: SolicitationMetricsQueryDto) {
    const from = query?.from ? new Date(query.from) : null;
    const to = query?.to ? new Date(query.to) : null;

    if (from && Number.isNaN(from.getTime())) {
      throw new BadRequestException("Data inicial inválida.");
    }

    if (to && Number.isNaN(to.getTime())) {
      throw new BadRequestException("Data final inválida.");
    }

    return { from: from ?? undefined, to: to ?? undefined };
  }
}
