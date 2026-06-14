export interface Mahasiswa {
  nim: string;     // NIM wajib diisi karena jadi primary key unik mahasiswa
  nama: string;
  umur: number;
  jurusan: string;
}