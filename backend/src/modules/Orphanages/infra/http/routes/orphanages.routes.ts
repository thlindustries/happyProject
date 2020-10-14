import { Router } from 'express';
import { celebrate, Segments, mu, Joi } from 'celebrate';
import multer from 'multer';

import OrphanageController from '@modules/Orphanages/infra/http/controllers/OrphanagesController';
import uploadConfig from '@config/upload';

import UniqueOrphanage from '@modules/Orphanages/infra/http/middlewares/uniqueOrphanage';

const orphanageRoutes = Router();
const uniqueOrphanage = new UniqueOrphanage();
const orphanageController = new OrphanageController();
const upload = multer(uploadConfig.multer);

orphanageRoutes.get('/', orphanageController.index);
orphanageRoutes.get('/:id', orphanageController.show);
orphanageRoutes.post(
  '/',
  upload.array('img'),
  uniqueOrphanage.checkIfOrphanageExists,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      about: Joi.string().required().max(300),
      instructions: Joi.string().required(),
      opening_hours: Joi.string().required(),
      open_on_weekends: Joi.boolean().required(),
      images: Joi.array().ordered(
        Joi.object().keys({ path: Joi.string().required() }),
      ),
    },
  }),
  orphanageController.create,
);

export default orphanageRoutes;
