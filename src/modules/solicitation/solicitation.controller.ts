import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { CurrentUser } from "src/common/decorators/current-user.decorator";
import { CurrentUserType } from "src/common/utils/current-user.util";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { SolicitationDto } from "./dto/solicitation.dto";
import { SolicitationService } from "./solicitation.service";
import { SolicitationStatus } from "@prisma/client";

@UseGuards(JwtAuthGuard)
@Controller("solicitation")
export class SolicitationController {
  constructor(private readonly service: SolicitationService) {}

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
    @Param("id") id: string
  ): Promise<SuccessResponse<SolicitationDto>> {
    const solcitaition = await this.service.findOne(id);

    if (!solcitaition) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    return new SuccessResponse<SolicitationDto>(solcitaition);
  }

  @Post()
  async create(
    @Body() data: SolicitationDto
  ): Promise<SuccessResponse<SolicitationDto>> {
    try {
      const newSolicitation = await this.service.create(data);

      if (newSolicitation === null) {
        throw new NotFoundException(`Erro ao criar a solicitação.`);
      }

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
    @Body() data: SolicitationDto
  ): Promise<SuccessResponse<SolicitationDto>> {
    const existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    return new SuccessResponse<SolicitationDto>(
      await this.service.update(id, data),
      "Solicitação atualizada com sucesso."
    );
  }

  @Patch("blockUnblockSolicitation/:id")
  async blockUnblockSolicitation(
    @Param("id") id: string,
    @Body() cause: Pick<SolicitationDto, "blockedCause">
  ): Promise<SuccessResponse<SolicitationDto>> {
    let existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    if (existingData.status === SolicitationStatus.BLOQUEADO) {
      existingData.status = SolicitationStatus.EM_ANALISE;
      existingData.blockedCause = null;
      existingData.blockedAt = null;
    } else {
      existingData.status = SolicitationStatus.BLOQUEADO;
      existingData.blockedCause = cause.blockedCause;
      existingData.blockedAt = new Date();
    }

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
