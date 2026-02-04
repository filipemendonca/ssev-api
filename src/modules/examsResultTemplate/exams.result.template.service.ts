import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import {
  ExamsResultTemplateDto,
  ExamsResultTemplateFilterDto,
} from "./dto/exams.result.template.dto";
import { ExamsResultTemplateRepository } from "./exams.result.template.repository";

@Injectable()
export class ExamsResultTemplateService {
  constructor(private readonly repo: ExamsResultTemplateRepository) {}

  public async findAll(
    pagination: PaginationQueryDto,
    filter?: ExamsResultTemplateFilterDto,
  ): Promise<SuccessResponse<ExamsResultTemplateDto[]>> {
    const where: any = {};

    if (filter?.name) {
      where.name = { contains: filter.name, mode: "insensitive" };
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

  public async findOne(id: string): Promise<ExamsResultTemplateDto | null> {
    return await this.repo.findById(id);
  }

  public async findFirst(): Promise<ExamsResultTemplateDto | null> {
    return await this.repo.findFirst();
  }

  public async create(
    data: ExamsResultTemplateDto,
  ): Promise<ExamsResultTemplateDto> {
    const validateInputData = await this.repo.validateIfHasName(data.name);

    if (validateInputData !== 0) {
      throw new UnprocessableEntityException(
        "Já existe um registro com o mesmo nome.",
      );
    }

    // Ensure fileData is Uint8Array<ArrayBuffer>
    let fileData: Uint8Array<ArrayBuffer> | undefined = undefined;
    if (data.fileData) {
      if (
        data.fileData instanceof Uint8Array &&
        data.fileData.buffer instanceof ArrayBuffer
      ) {
        fileData = new Uint8Array(data.fileData.buffer);
      } else if (Buffer.isBuffer(data.fileData)) {
        fileData = new Uint8Array(data.fileData.buffer as ArrayBuffer);
      }
    }

    return await this.repo.create({
      ...data,
      fileData: fileData,
    });
  }

  public async update(
    id: string,
    data: ExamsResultTemplateDto,
  ): Promise<ExamsResultTemplateDto> {
    // Ensure fileData is Uint8Array<ArrayBuffer>
    let fileData: Uint8Array<ArrayBuffer> | undefined = undefined;
    if (data.fileData) {
      if (
        data.fileData instanceof Uint8Array &&
        data.fileData.buffer instanceof ArrayBuffer
      ) {
        fileData = new Uint8Array(data.fileData.buffer);
      } else if (Buffer.isBuffer(data.fileData)) {
        fileData = new Uint8Array(data.fileData.buffer as ArrayBuffer);
      }
    }

    return await this.repo.update(id, {
      ...data,
      fileData: fileData,
    });
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }
}
