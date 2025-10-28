import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { Response } from "express";
import { FileInterceptor } from "@nestjs/platform-express/multer";
import { Role } from "@prisma/client";
import { existsSync, mkdirSync, unlinkSync } from "node:fs";
import { diskStorage } from "multer";
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
import { join } from "node:path";

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
    @Body() data: ExamsResultTemplateDto,
    @UploadedFile() file: Express.Multer.File
  ): Promise<SuccessResponse<ExamsResultTemplateDto>> {
    const newTemplate = await this.service.create({
      name: data.name,
      fileName: file.originalname,
      filePath: file.path,
    });

    if (newTemplate === null) {
      throw new NotFoundException(`Erro ao criar o template.`);
    }

    return new SuccessResponse<ExamsResultTemplateDto>(
      newTemplate,
      "Template criado com sucesso."
    );
  }

  @Get("download/:filename")
  async downloadFile(
    @Param("filename") filename: string,
    @Res() res: Response
  ) {
    try {
      const filePath = join(process.cwd(), "template", filename);

      if (!existsSync(filePath)) {
        throw new NotFoundException("Arquivo não encontrado!");
      }

      res.set({
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${filename}"`,
      });

      return res.sendFile(filePath);
    } catch (error) {
      console.error("Erro no download:", error);
      throw new BadRequestException("Erro ao baixar o arquivo.");
    }
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

    if (existingTemplate.fileName) {
      const filePath = join(
        process.cwd(),
        "template",
        existingTemplate.fileName
      );

      if (existsSync(filePath)) {
        try {
          unlinkSync(filePath);
          console.log(
            `Arquivo ${existingTemplate.fileName} removido com sucesso.`
          );
        } catch (err) {
          console.error("Erro ao remover o arquivo:", err);
        }
      } else {
        console.warn(
          `Arquivo ${existingTemplate.fileName} não encontrado no sistema.`
        );
      }
    }

    return new SuccessResponse<ExamsResultTemplateDto>(
      await this.service.delete(id)
    );
  }
}
