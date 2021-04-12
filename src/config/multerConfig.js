import multer from 'multer';
import { extname, resolve } from 'path';

// Gera um número aleatório para previnir
// nomes de arquivos repetidos
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
