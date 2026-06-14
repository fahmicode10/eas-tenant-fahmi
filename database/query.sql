CREATE DATABASE IF NOT EXISTS eas_tenant;
USE eas_tenant;

CREATE TABLE tenant (
id INT AUTO_INCREMENT PRIMARY KEY,
nim VARCHAR(20) NOT NULL,
nama VARCHAR(100) NOT NULL,
jurusan VARCHAR(100) NOT NULL,
angkatan INT NOT NULL
);

INSERT INTO tenant (nim, nama, jurusan, angkatan) VALUES
('230101', 'Fahmi Azraa Azmiansyah', 'Teknik Otomasi', 2023),
('230102', 'Ahmad Syafiudin', 'Teknik Kelistrikan Kapal', 2023);