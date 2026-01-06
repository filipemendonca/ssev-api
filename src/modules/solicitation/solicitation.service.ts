import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { SolicitationRepository } from "./solicitation.repository";
import { SolicitationDto, SolicitationFilterDto } from "./dto/solicitation.dto";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { Role, SolicitationStatus } from "@prisma/client";
import { CurrentUserType } from "../../common/utils/current-user.util";
import { VariablesService } from "../variables/variables.service";
import { ExamsResultTemplateService } from "../examsResultTemplate/exams.result.template.service";
import { UserService } from "../user/user.service";
import { DocxService } from "../../common/services/docx-service";
import { MailService } from "../../common/services/mail.service";
import { SolicitationHistoryService } from "../solicitationHistory/solicitation.history.service";
import { SolicitationHistoryDto } from "../solicitationHistory/dto/solicitation.history.dto";
import { UserDto } from "../user/dto/user.dto";
import { GoogleDriveService } from "../../common/services/google-drive.service";

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
    private readonly googleDriveService: GoogleDriveService
  ) {}

  public async findAll(
    pagination: PaginationQueryDto,
    user?: CurrentUserType,
    filter?: SolicitationFilterDto
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
      where
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

  public async create(
    data: SolicitationDto,
    user: CurrentUserType
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
    isExecuteHistoryCheck = true
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

  public async finishSolicitation(
    id: string,
    data: SolicitationDto,
    user?: CurrentUserType
  ): Promise<SolicitationDto> {
    const solicitation = await this.repo.findById(id);
    const variables = await this.variableService.findAllWithoutPagination();
    const template = await this.examsResultTemplateService.findFirst();
    const solicitationUserObj = await this.userService.findOne(
      solicitation.userId
    );

    if (
      solicitation === null ||
      solicitationUserObj === null ||
      template === null ||
      variables === null
    ) {
      this.logger.warn(
        "Não foi possível finalizar a solicitação: dados incompletos."
      );
      this.logger.debug(`Solicitação: ${JSON.stringify(solicitation)}`);
      this.logger.debug(`Usuário: ${JSON.stringify(solicitationUserObj)}`);
      this.logger.debug(`Template: ${JSON.stringify(template)}`);
      this.logger.debug(`Variáveis: ${JSON.stringify(variables)}`);
      throw new BadRequestException(
        "Dados incompletos para finalizar a solicitação."
      );
    }

    const updatedSolicitation = await this.update(id, data, user);

    const buffer = await this.docxService.generateDocument(
      variables,
      template.fileData,
      solicitation
    );
    await this.sendEmailToDoctor(buffer, solicitationUserObj, solicitation);
    await this.googleDriveService.uploadDocx(
      buffer,
      `relatorio_solicitacao_${solicitation.id}.docx`,
      process.env.GOOGLE_DRIVE_FOLDER_ID
    );

    return updatedSolicitation;
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }

  public async blockUnblockSolititation(
    id: string,
    cause: Pick<SolicitationDto, "blockedCause">,
    user: CurrentUserType,
    existingData: SolicitationDto,
    lastHistory: SolicitationHistoryDto
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
    existingData: SolicitationDto
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
    // id: string,
    documentBuffer: Buffer<ArrayBufferLike>,
    user: UserDto,
    solicitation: SolicitationDto
  ): Promise<void> {
    await this.configureFinishSolicitationEmail(
      user.email,
      user.name,
      solicitation.patient,
      solicitation.tutor,
      solicitation.createdAt,
      documentBuffer
    );
  }

  public async generateDocumentBufferToDownload(
    solicitationId: string,
    templateBuffer: Buffer | Uint8Array
  ) {
    return await this.repo.transaction<Buffer>(async (tx) => {
      const variables = await this.variableService.findAllWithoutPagination();
      const solicitation = await this.repo.findById(solicitationId);

      const buffer = await this.docxService.generateDocument(
        variables,
        templateBuffer,
        solicitation
      );

      return buffer;
    });
  }

  private async configureFinishSolicitationEmail(
    email: string,
    name: string,
    patient: string,
    tutor: string,
    createdAt: Date,
    buffer: Buffer<ArrayBufferLike>
  ) {
    await this.mailService.sendMailWithAttachment({
      to: email,
      subject: "Relatório Gerado (Laudo)",
      html: `<p>Olá, <strong>${name.toUpperCase()}</strong>!</p>
      <p>Segue em anexo o resultado do laudo.</p>      
      <p>Estamos enviando em anexo o relatório referente à solicitação de exame realizada para os seguintes dados:</p>
      <p>Paciente: <strong>${patient}</strong></p>
      <p>Tutor: <strong>${tutor}</strong></p>
      <p>Data da Solicitação: <strong>${createdAt.toLocaleDateString()}</strong></p>                  
      <p>Atenciosamente,</p>`,
      attachment: {
        filename: "relatorio.docx",
        content: buffer,
        contentType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      },
    });
  }
}
