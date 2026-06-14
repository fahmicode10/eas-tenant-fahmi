import db from '../config/db';
import { Mahasiswa } from '../models/mahasiswa.model';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

interface MahasiswaRow extends RowDataPacket {
  nim: string;
  nama: string;
  jurusan: string;
  angkatan: string;
}

export const getAllMahasiswaService = async (): Promise<Mahasiswa[]> => {
  const [rows] = await db.execute<MahasiswaRow[]>(
    'SELECT nim, nama, jurusan, angkatan FROM mahasiswa'
  );

  return rows;
};

export const getMahasiswaByNimService = async (
  nim: string
): Promise<Mahasiswa | null> => {
  console.log('NIM diterima service:', nim);

  const [rows] = await db.execute<MahasiswaRow[]>(
    'SELECT nim, nama, jurusan, angkatan FROM mahasiswa WHERE nim = ? LIMIT 1',
    [nim]
  );

  console.log('Hasil query by NIM:', rows);

  if (rows.length === 0) {
    return null;
  }

  return rows[0];
};

export const createMahasiswaService = async (
  data: Mahasiswa
): Promise<Mahasiswa> => {
  const { nim, nama, jurusan, angkatan } = data;

  await db.execute<ResultSetHeader>(
    'INSERT INTO mahasiswa (nim, nama, jurusan, angkatan) VALUES (?, ?, ?, ?)',
    [nim, nama, jurusan, angkatan]
  );

  return {
    nim,
    nama,
    jurusan,
    angkatan
  };
};

export const updateMahasiswaService = async (
  nim: string,
  data: Mahasiswa
): Promise<Mahasiswa | null> => {
  const { nama, jurusan, angkatan } = data;

  const [result] = await db.execute<ResultSetHeader>(
    'UPDATE mahasiswa SET nama = ?, jurusan = ?, angkatan = ? WHERE nim = ?',
    [nama, jurusan, angkatan, nim]
  );

  if (result.affectedRows === 0) {
    return null;
  }

  return {
    nim,
    nama,
    jurusan,
    angkatan
  };
};

export const deleteMahasiswaService = async (
  nim: string
): Promise<boolean> => {
  const [result] = await db.execute<ResultSetHeader>(
    'DELETE FROM mahasiswa WHERE nim = ?',
    [nim]
  );

  return result.affectedRows > 0;
};