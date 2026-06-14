import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  next(new AppError(`Rute ${req.originalUrl} tidak ditemukan`, 404));
};