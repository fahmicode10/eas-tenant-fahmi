/// <reference types="node" />

export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public errors?: unknown;

  constructor(
    message: string,
    statusCode: number = 500,
    errors: unknown = null
  ) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = true;
    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
  }
}