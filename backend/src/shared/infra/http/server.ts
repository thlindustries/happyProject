import 'reflect-metadata';
import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

import routes from './routes';
import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
const port = 3333;

app.use(cors());
app.use('/files', express.static(uploadConfig.pastaUpload));
app.use(express.json());
app.use(routes);

app.use(errors());

app.use((erro: Error, req: Request, res: Response, _: NextFunction) => {
  if (erro instanceof AppError) {
    return res.status(erro.statusCode).json({
      status: 'error',
      mensagem: erro.mensagem,
    });
  }
  console.log(erro);

  return res.status(500).json({
    status: 'error',
    mensagem: 'Internal Server Error',
  });
});

app.get('/', (req, res) => {
  return res.json({ message: 'Fuck You' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
