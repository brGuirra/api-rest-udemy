import multer from 'multer';

import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    upload(req, res, (error) => {
      if (error) {
        return res.status(401).json({
          errors: [error.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new FotoController();
