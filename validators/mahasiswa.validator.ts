import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';

export const validateMahasiswa = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { nim, nama, jurusan, angkatan } = req.body;

  const _required = !nim || !nama || !jurusan || !angkatan;
  const _nimString = typeof nim !== 'string';
  const _namaString = typeof nama !== 'string';
  const _jurusanString = typeof jurusan !== 'string';
  const _angkatanString = typeof angkatan !== 'string';

  let messages: string[] = [];

  if (_required) {
    messages.push('Data tidak lengkap. nim, nama, jurusan, dan angkatan wajib diisi');
  }

  if (_nimString && nim) {
    messages.push('NIM harus berupa teks');
  }

  if (_namaString && nama) {
    messages.push('Nama harus berupa teks');
  }

  if (_jurusanString && jurusan) {
    messages.push('Jurusan harus berupa teks');
  }

  if (_angkatanString && angkatan) {
    messages.push('Angkatan harus berupa teks');
  }

  if (_required || _nimString || _namaString || _jurusanString || _angkatanString) {
    next(new AppError(messages[0], 400));
    return;
  }

  next();
};