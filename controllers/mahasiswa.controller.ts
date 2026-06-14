import { Request, Response } from 'express';
import {
  getAllMahasiswaService,
  getMahasiswaByNimService,
  createMahasiswaService,
  updateMahasiswaService,
  deleteMahasiswaService
} from '../services/mahasiswa.service';
import { successResponse } from '../utils/response';
import { AppError } from '../utils/AppError';
import { asyncHandler } from '../utils/asyncHandler';

export const getAllMahasiswa = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const data = await getAllMahasiswaService();

    successResponse(
      res,
      'Data seluruh mahasiswa berhasil diambil',
      data
    );
  }
);

export const getMahasiswaByNim = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const nim = req.params.nim as string;

    if (!nim) {
      throw new AppError('NIM harus disertakan', 400);
    }

    console.log('NIM diterima controller: ', nim);

    const data = await getMahasiswaByNimService(nim);

    if (!data) {
      throw new AppError('Data mahasiswa tidak ditemukan', 404);
    }

    successResponse(
      res,
      'Data mahasiswa berhasil ditemukan',
      data
    );
  }
);

export const createMahasiswa = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const data = await createMahasiswaService(req.body);

    successResponse(
      res,
      'Data mahasiswa berhasil ditambahkan',
      data,
      201
    );
  }
);

export const updateMahasiswa = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const nim = req.params.nim as string;

    if (!nim) {
      throw new AppError('NIM harus disertakan', 400);
    }

    const data = await updateMahasiswaService(nim, req.body);

    if (!data) {
      throw new AppError(
        'Data mahasiswa yang akan diperbarui tidak ditemukan',
        404
      );
    }

    successResponse(
      res,
      'Data mahasiswa berhasil diperbarui',
      data
    );
  }
);

export const deleteMahasiswa = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const nim = req.params.nim as string;

    if (!nim) {
      throw new AppError('NIM harus disertakan', 400);
    }

    const isDeleted = await deleteMahasiswaService(nim);

    if (!isDeleted) {
      throw new AppError(
        'Data mahasiswa yang akan dihapus tidak ditemukan',
        404
      );
    }

    successResponse(
      res,
      'Data mahasiswa berhasil dihapus'
    );
  }
);