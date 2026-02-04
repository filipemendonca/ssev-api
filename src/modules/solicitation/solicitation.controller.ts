import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpException,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UseGuards,
} from "@nestjs/common";
import { Response } from "express";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { CurrentUserType } from "../../common/utils/current-user.util";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { ExamsResultTemplateService } from "../examsResultTemplate/exams.result.template.service";
import { SolicitationHistoryService } from "../solicitationHistory/solicitation.history.service";
import { SolicitationDto, SolicitationFilterDto } from "./dto/solicitation.dto";
import { SolicitationService } from "./solicitation.service";
import { validateEditSolicitation } from "./util/solicitation-configure-edit";
import { SolicitationStatus } from "../../../prisma/generated";

@UseGuards(JwtAuthGuard)
@Controller("solicitation")
export class SolicitationController {
  constructor(
    private readonly service: SolicitationService,
    private readonly solicitationHistoryService: SolicitationHistoryService,
    private readonly examsResultTemplateService: ExamsResultTemplateService,
  ) {}

  @Get()
  async findAll(
    @Query() query: PaginationQueryDto,
    @CurrentUser() user: CurrentUserType,
  ): Promise<SuccessResponse<SolicitationDto[]>> {
    const response = await this.service.findAll(query, user);

    if (response?.data?.length === 0) {
      throw new NotFoundException(`Nenhum registro encontrado.`);
    }

    return response;
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string,
    @CurrentUser() user: CurrentUserType,
    @Query() mode: { isViewMode: string },
  ): Promise<SuccessResponse<SolicitationDto>> {
    const solicitation = await this.service.findOne(id);

    if (!solicitation) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    const { status } = solicitation;

    if (mode.isViewMode === "true") {
      return new SuccessResponse<SolicitationDto>(solicitation);
    } else {
      const { canEdit } = validateEditSolicitation(user.role, status);

      if (!canEdit) throw new ForbiddenException(`Ação não permitida.`);

      return new SuccessResponse<SolicitationDto>(solicitation);
    }
  }

  @Post("/search")
  async search(
    @Query() query: PaginationQueryDto,
    @Body() filter: SolicitationFilterDto,
  ): Promise<SuccessResponse<SolicitationDto[]>> {
    const solicitations = await this.service.findAll(query, null, filter);

    if (!solicitations) {
      throw new NotFoundException(`Amostra não encontrada.`);
    }

    return solicitations;
  }

  @Post()
  async create(
    @Body() data: SolicitationDto,
    @CurrentUser() user: CurrentUserType,
  ): Promise<SuccessResponse<SolicitationDto>> {
    try {
      const newSolicitation = await this.service.create(data, user);

      if (newSolicitation === null) {
        throw new NotFoundException(`Erro ao criar a solicitação.`);
      }

      return new SuccessResponse<SolicitationDto>(
        newSolicitation,
        "Solicitação criada com sucesso.",
      );
    } catch (error) {
      console.error("Error creating solicitation:", error);
      throw new HttpException("Erro ao criar a solicitação.", error.status);
    }
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() data: SolicitationDto,
    @CurrentUser() user: CurrentUserType,
  ): Promise<SuccessResponse<SolicitationDto>> {
    try {
      return new SuccessResponse<SolicitationDto>(
        await this.service.update(id, data, user),
        "Solicitação atualizada com sucesso.",
      );
    } catch (error) {
      console.error("Error updating solicitation:", error);
      throw new HttpException("Erro ao atualizar a solicitação.", error.status);
    }
  }

  @Patch("finish/:id")
  async finishSolicitation(
    @Param("id") id: string,
    @Body() data: SolicitationDto,
    @CurrentUser() user: CurrentUserType,
  ): Promise<SuccessResponse<SolicitationDto>> {
    try {
      data.status = SolicitationStatus.FINALIZADO;
      data.finishedAt = new Date();

      return new SuccessResponse<SolicitationDto>(
        await this.service.finishSolicitation(id, data, user),
        "Solicitação finalizada com sucesso.",
      );
    } catch (error) {
      console.error("Error to try finish solicitation:", error);
      throw new HttpException("Erro ao finalizar a solicitação.", error.status);
    }
  }

  @Patch("blockUnblockSolicitation/:id")
  async blockUnblockSolicitation(
    @Param("id") id: string,
    @Body() cause: Pick<SolicitationDto, "blockedCause">,
    @CurrentUser() user: CurrentUserType,
  ): Promise<SuccessResponse<SolicitationDto>> {
    let existingData = await this.service.findOne(id);

    const lastHistory =
      await this.solicitationHistoryService.findLastSolicitationHistoryToUnblockSolicitation(
        id,
      );

    if (!existingData && !lastHistory) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    return new SuccessResponse<SolicitationDto>(
      await this.service.blockUnblockSolititation(
        id,
        cause,
        user,
        existingData,
        lastHistory,
      ),
      "Solicitação bloqueada com sucesso.",
    );
  }

  @Patch("cancelSolicitation/:id")
  async cancelSolicitation(
    @Param("id") id: string,
    @Body() cause: Pick<SolicitationDto, "canceledCause">,
    @CurrentUser() user: CurrentUserType,
  ): Promise<SuccessResponse<SolicitationDto>> {
    let existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    return new SuccessResponse<SolicitationDto>(
      await this.service.cancelSolititation(id, cause, user, existingData),
      "Solicitação cancelada com sucesso.",
    );
  }

  @Delete(":id")
  async delete(
    @Param("id") id: string,
  ): Promise<SuccessResponse<SolicitationDto>> {
    const existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    existingData.isDeleted = true;

    return new SuccessResponse<SolicitationDto>(
      await this.service.update(id, existingData, null, true),
    );
  }

  @Get("document/download/:solicitationId")
  async generate(
    @Res() res: Response,
    @Param("solicitationId") solicitationId: string,
  ) {
    const template = await this.examsResultTemplateService.findFirst();

    if (template === null) {
      throw new NotFoundException(
        `Template de resultado de exames não encontrado.`,
      );
    }

    const buffer = await this.service.generateDocumentBufferToDownload(
      solicitationId,
      template.fileData,
    );

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${template.fileName}"`,
    );
    res.setHeader("Content-Length", buffer.length);

    res.end(buffer);
    return;
  }

  @Post("document/send-report/:solicitationId")
  async sendReport(@Param("solicitationId") solicitationId: string) {
    try {
      const emailSented = await this.service.sendEmailManually(solicitationId);
      if (emailSented === null) {
        throw new HttpException("Erro ao enviar o e-mail.", 500);
      }
      return new SuccessResponse<SolicitationDto>(
        { emailSented } as any,
        "E-mail enviado com sucesso.",
      );
    } catch (error) {
      console.error("Error sending report email:", error);
      throw new HttpException("Erro ao enviar o e-mail.", error.status);
    }
  }
}
