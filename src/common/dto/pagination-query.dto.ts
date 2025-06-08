import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  limit?: number = 10;

  @IsOptional()
  @Type(() => Number)
  @Min(0)
  offset?: number = 0;

  @IsOptional()
  @Type(() => Number)
  @Min(0)
  total?: number = 0;

  @IsOptional()
  @Type(() => Boolean)
  hasNextPage?: boolean = false;
}
