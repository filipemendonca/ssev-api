import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Request, Response } from "express";
import { ErrorResponse } from "../dto/response.dto";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse =
      exception instanceof HttpException ? exception.getResponse() : null;

    const message =
      typeof exceptionResponse === "object" && exceptionResponse !== null
        ? ((exceptionResponse as any).message ?? "Erro inesperado")
        : exceptionResponse || "Erro inesperado";

    const error =
      typeof exception === "object" && exception instanceof Error
        ? exception.name
        : undefined;

    const errorResponse = new ErrorResponse(status, message, error);

    response.status(status).json(errorResponse);
  }
}
