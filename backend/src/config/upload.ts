import multer, { StorageEngine } from 'multer';
import path from 'path';
import crypto from 'crypto';

const pastaTmp = path.resolve(__dirname, '..', '..', 'tmp');
const pastaUpload = path.resolve(pastaTmp, 'uploads');

interface IUploadConfig {
  driver: 's3' | 'disk';
  multer: {
    storage: StorageEngine;
  };
  config: {
    disk: {};
    aws: {
      bucket: string;
    };
  };
  pastaTmp: string;
  pastaUpload: string;
}

export default {
  driver: process.env.STORAGE_DRIVER,

  pastaTmp,
  pastaUpload,

  multer: {
    storage: multer.diskStorage({
      destination: pastaTmp,
      filename(req, file, cb) {
        const arquivoHash = crypto.randomBytes(12).toString('hex');
        const nomeArquivo = `${arquivoHash}-${file.originalname}`;

        return cb(null, nomeArquivo);
      },
    }),
  },
  config: {
    disk: {},
    aws: {
      bucket: 'app-gobarber-grulis',
    },
  },
} as IUploadConfig;
