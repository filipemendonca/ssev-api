export class SuccessResponse<T> {
  success = true as const;
  data: T;
  message?: string;

  constructor(data: T, message?: string) {
    this.data = data;
    if (message) this.message = message;
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
