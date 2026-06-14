import { Router } from 'express';
import {
  getAllMahasiswa,
  getMahasiswaByNim,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa
} from '../controllers/mahasiswa.controller';
import { validateMahasiswa } from '../validators/mahasiswa.validator';

const router = Router();

router.get('/', getAllMahasiswa);
router.get('/:nim', getMahasiswaByNim);
router.post('/', validateMahasiswa, createMahasiswa);
router.put('/:nim', validateMahasiswa, updateMahasiswa);
router.delete('/:nim', deleteMahasiswa);

export default router;