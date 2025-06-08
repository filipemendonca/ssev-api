import { PaginationQueryDto } from "./pagination-query.dto";

export class SuccessResponse<T> {
  success = true as const;
  data: T;
  message?: string;
  meta?: PaginationQueryDto;

  constructor(data: T, message?: string, meta?: PaginationQueryDto) {
    this.data = data;
    if (message) this.message = message;
    if (meta) this.meta = meta;
  }
}

export class ErrorResponse {
  success = false as const;
  statusCode: number;
  message: string;
  error?: string;

  constructor(statusCode: number, message: string, error?: string) {
    this.statusCode = statusCode;
    this.message = message;
    if (error) this.error = error;
  }
}
