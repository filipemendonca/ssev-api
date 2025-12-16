import { Injectable, Logger } from "@nestjs/common";
import { SolicitationRepository } from "./solicitation.repository";
import { SolicitationDto, SolicitationFilterDto } from "./dto/solicitation.dto";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { Role } from "@prisma/client";
import { CurrentUserType } from "../../common/utils/current-user.util";
import { VariablesService } from "../variables/variables.service";
import { ExamsResultTemplateService } from "../examsResultTemplate/exams.result.template.service";
import { UserService } from "../user/user.service";
import { DocxService } from "../../common/services/docx-service";
import { MailService } from "../../common/services/mail.service";

@Injectable()
export class SolicitationService {
  private readonly logger = new Logger(SolicitationService.name);

  constructor(
    private readonly repo: SolicitationRepository,
    private readonly variableService: VariablesService,
    private readonly examsResultTemplateService: ExamsResultTemplateService,
    private readonly userService: UserService,
    private readonly docxService: DocxService,
    private readonly mailService: MailService
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

  public async create(data: SolicitationDto): Promise<SolicitationDto> {
    return this.repo.create(data);
  }

  public async update(
    id: string,
    data: SolicitationDto
  ): Promise<SolicitationDto> {
    return await this.repo.update(id, data);
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }

  public async sendEmailToDoctor(id: string) {
    try {
      const solicitation = await this.repo.findById(id);
      const variables = await this.variableService.findAllWithoutPagination();
      const template = await this.examsResultTemplateService.findFirst();
      const user = await this.userService.findOne(solicitation.userId);

      const buffer = await this.docxService.generateDocument(
        variables,
        template.fileName,
        solicitation
      );

      await this.configureFinishSolicitationEmail(
        user.email,
        user.name,
        solicitation.patient,
        solicitation.tutor,
        solicitation.createdAt,
        buffer
      );
    } catch (error) {
      this.logger.error("Erro ao enviar o e-mail.", error);
      throw error;
    }
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
