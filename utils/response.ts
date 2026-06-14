import { Response } from 'express';

export const successResponse = <T>(
  res: Response,
  message: string,
  data: T | null = null,
  statusCode: number = 200
): Response => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode: number = 500,
  errors: unknown = null,
  stack: string | null = null
): Response => {
  const response: {
    success: boolean;
    message: string;
    errors?: unknown;
    stack?: string;
  } = {
    success: false,
    message
  };

  if (errors) {
    response.errors = errors;
  }

  if (stack) {
    response.stack = stack;
  }

  return res.status(statusCode).json(response);
};