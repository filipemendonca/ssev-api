import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  limit?: number = 10;

  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  currentPage?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  totalPages?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @Min(0)
  total?: number = 0;

  @IsOptional()
  @Type(() => Boolean)
  hasNextPage?: boolean = false;

  @IsOptional()
  @Type(() => String)
  name?: string = "";
}
