import express, { Application, Request, Response } from 'express';
import mahasiswaRoutes from './routes/mahasiswa.route';
import { notFoundMiddleware } from './middlewares/notFound.middleware';
import { errorMiddleware } from './middlewares/error.middleware';

const app: Application = express();

// Middleware
app.use(express.json());

// Route utama
app.get('/', (req: Request, res: Response) => {
  res.send('API Express.js + TypeScript berjalan dengan struktur terpisah');
});

// Route mahasiswa
app.use('/api/mahasiswa', mahasiswaRoutes);

// Middleware untuk menangani route yang tidak ditemukan
app.use(notFoundMiddleware);
 
// Middleware error wajib diletakkan paling akhir
app.use(errorMiddleware);

export default app;