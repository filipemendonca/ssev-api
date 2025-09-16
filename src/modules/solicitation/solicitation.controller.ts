import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { SolicitationStatus } from "@prisma/client";
import { CurrentUser } from "src/common/decorators/current-user.decorator";
import { CurrentUserType } from "src/common/utils/current-user.util";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { SolicitationDto } from "./dto/solicitation.dto";
import { SolicitationService } from "./solicitation.service";
import { validateEditSolicitation } from "./util/solicitation-configure-edit";
import { SolicitationHistoryService } from "../solicitationHistory/solicitation.history.service";

@UseGuards(JwtAuthGuard)
@Controller("solicitation")
export class SolicitationController {
  constructor(
    private readonly service: SolicitationService,
    private readonly solicitationHistoryService: SolicitationHistoryService
  ) {}

  @Get()
  async findAll(
    @Query() query: PaginationQueryDto,
    @CurrentUser() user: CurrentUserType
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
    @Query() mode: { isViewMode: string }
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

  @Post()
  async create(
    @Body() data: SolicitationDto,
    @CurrentUser() user: CurrentUserType
  ): Promise<SuccessResponse<SolicitationDto>> {
    try {
      const newSolicitation = await this.service.create(data);

      if (newSolicitation === null) {
        throw new NotFoundException(`Erro ao criar a solicitação.`);
      }

      await this.solicitationHistoryService.create({
        id: undefined,
        solicitationId: newSolicitation.id,
        newStatus: newSolicitation.status,
        changedAt: new Date(),
        changedById: user.id,
        previousStatus: null,
        blockedCause: newSolicitation.blockedCause || null,
      });

      return new SuccessResponse<SolicitationDto>(
        newSolicitation,
        "Solicitação criada com sucesso."
      );
    } catch (error) {
      console.error("Error creating solicitation:", error);
    }
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() data: SolicitationDto,
    @CurrentUser() user: CurrentUserType
  ): Promise<SuccessResponse<SolicitationDto>> {
    const existingData = await this.service.findOne(id);
    const lastHistory =
      await this.solicitationHistoryService.findLastBySolicitationId(id);

    if (!existingData && !lastHistory) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    if (lastHistory.newStatus !== data.status) {
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

    return new SuccessResponse<SolicitationDto>(
      await this.service.update(id, data),
      "Solicitação atualizada com sucesso."
    );
  }

  @Patch("blockUnblockSolicitation/:id")
  async blockUnblockSolicitation(
    @Param("id") id: string,
    @Body() cause: Pick<SolicitationDto, "blockedCause">,
    @CurrentUser() user: CurrentUserType
  ): Promise<SuccessResponse<SolicitationDto>> {
    let existingData = await this.service.findOne(id);

    const lastHistory =
      await this.solicitationHistoryService.findLastSolicitationHistoryToUnblockSolicitation(
        id
      );

    if (!existingData && !lastHistory) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

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

    return new SuccessResponse<SolicitationDto>(
      await this.service.update(id, existingData),
      "Solicitação atualizada com sucesso."
    );
  }

  @Patch("cancelSolicitation/:id")
  async cancelSolicitation(
    @Param("id") id: string,
    @Body() cause: Pick<SolicitationDto, "canceledCause">,
    @CurrentUser() user: CurrentUserType
  ): Promise<SuccessResponse<SolicitationDto>> {
    let existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

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

    return new SuccessResponse<SolicitationDto>(
      await this.service.update(id, existingData),
      "Solicitação atualizada com sucesso."
    );
  }

  @Delete(":id")
  async delete(
    @Param("id") id: string
  ): Promise<SuccessResponse<SolicitationDto>> {
    const existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    return new SuccessResponse<SolicitationDto>(await this.service.delete(id));
  }
}
