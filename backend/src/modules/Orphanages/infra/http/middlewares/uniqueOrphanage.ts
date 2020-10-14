import { Request, Response, NextFunction } from 'express';
import OrphanageRepository from '@modules/Orphanages/infra/typeorm/repositories/OrphanageRepository';

import RequestDTO from '@modules/Orphanages/dtos/CreateOrphanageDTO';

import AppError from '@shared/errors/AppError';

class uniqueOrphanage {
  public async checkIfOrphanageExists(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const { name } = req.body as RequestDTO;

    const orphanageRepository = new OrphanageRepository();

    const orphanageExists = await orphanageRepository.findByName(name);

    if (orphanageExists) {
      throw new AppError('Orfanato ja existente!', 401);
    }

    return next();
  }
}

// const uniqueOrphanage = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   const { name } = req.body;
//   console.log(req.body);
//   const orphanageRepository = new OrphanageRepository();

//   const orphanageExists = await orphanageRepository.findByName(name);

//   if (orphanageExists) {
//     throw new AppError('Orfanato ja existente!', 401);
//   }

//   return next();
// };

export default uniqueOrphanage;
