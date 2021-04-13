import multer from 'multer';

import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    upload(req, res, async (error) => {
      if (error) {
        return res.status(401).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const foto = await Foto.create({ originalname, filename, aluno_id });

      return res.json(foto);
    });
  }
}

export default new FotoController();
