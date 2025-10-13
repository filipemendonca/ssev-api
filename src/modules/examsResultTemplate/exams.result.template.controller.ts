import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { Role } from "@prisma/client";
import { Roles } from "../../common/decorators/roles.decorator";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import {
  ExamsResultTemplateDto,
  ExamsResultTemplateFilterDto,
} from "./dto/exams.result.template.dto";
import { ExamsResultTemplateService } from "./exams.result.template.service";
import { FileInterceptor } from "@nestjs/platform-express/multer";
import { diskStorage } from "multer";
import { extname } from "path";
import { mkdirSync, existsSync } from "fs";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("examsResultTemplate")
export class ExamsResultTemplateController {
  constructor(private readonly service: ExamsResultTemplateService) {}

  @Get()
  async findAll(
    @Query() query: PaginationQueryDto
  ): Promise<SuccessResponse<ExamsResultTemplateDto[]>> {
    const data = await this.service.findAll(query);

    if (data?.data?.length === 0) {
      throw new NotFoundException(`Nenhum registro encontrado.`);
    }

    return data;
  }

  @Get(":id")
  @Roles(Role.ADMINISTRADOR)
  async findOne(
    @Param("id") id: string
  ): Promise<SuccessResponse<ExamsResultTemplateDto>> {
    const template = await this.service.findOne(id);

    if (!template) {
      throw new NotFoundException(`Template não encontrado.`);
    }

    return new SuccessResponse<ExamsResultTemplateDto>(template);
  }

  @Post("/search")
  @Roles(Role.ADMINISTRADOR)
  async search(
    @Query() query: PaginationQueryDto,
    @Body() filter: ExamsResultTemplateFilterDto
  ): Promise<SuccessResponse<ExamsResultTemplateDto[]>> {
    const templates = await this.service.findAll(query, filter);

    if (!templates) {
      throw new NotFoundException(`Template não encontrado.`);
    }

    return templates;
  }

  @Post()
  @Roles(Role.ADMINISTRADOR)
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadPath = "./template";
          // cria a pasta se não existir
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath, { recursive: true });
          }
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          // gera nome único
          cb(null, `${file.originalname}`);
        },
      }),
      limits: { fileSize: 6 * 1024 * 1024 }, // 6 MB
      fileFilter: (req, file, cb) => {
        if (!file.originalname.endsWith(".docx")) {
          return cb(new Error("Apenas arquivos .docx são permitidos!"), false);
        }
        cb(null, true);
      },
    })
  )
  async create(
    @Body() data: any,
    @UploadedFile() file: Express.Multer.File
  ): Promise<SuccessResponse<ExamsResultTemplateDto>> {
    const newTemplate = await this.service.create(data);

    if (newTemplate === null) {
      throw new NotFoundException(`Erro ao criar o template.`);
    }

    return new SuccessResponse<ExamsResultTemplateDto>(
      newTemplate,
      "Template criado com sucesso."
    );
  }

  @Put(":id")
  @Roles(Role.ADMINISTRADOR)
  async update(
    @Param("id") id: string,
    @Body() data: ExamsResultTemplateDto
  ): Promise<SuccessResponse<ExamsResultTemplateDto>> {
    const existingTemplate = await this.service.findOne(id);

    if (!existingTemplate) {
      throw new NotFoundException(`Template não encontrado.`);
    }

    return new SuccessResponse<ExamsResultTemplateDto>(
      await this.service.update(id, data),
      "Template atualizado com sucesso."
    );
  }

  @Delete(":id")
  @Roles(Role.ADMINISTRADOR)
  async delete(
    @Param("id") id: string
  ): Promise<SuccessResponse<ExamsResultTemplateDto>> {
    const existingTemplate = await this.service.findOne(id);

    if (!existingTemplate) {
      throw new NotFoundException(`Template não encontrado.`);
    }

    return new SuccessResponse<ExamsResultTemplateDto>(
      await this.service.delete(id)
    );
  }
}
