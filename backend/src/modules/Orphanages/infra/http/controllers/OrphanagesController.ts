import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import RequestDTO from '@modules/Orphanages/dtos/CreateOrphanageDTO';

import orphanageView from '@modules/Orphanages/views/orphanages_view';

import CreateOrphanageService from '@modules/Orphanages/services/CreateOrphanageService';
import ListOrphanagesService from '@modules/Orphanages/services/ListOrphanagesService';
import ListOrphanageService from '@modules/Orphanages/services/ListOrphanageService';
import AddImgService from '@modules/Orphanages/services/AddImageService';

import AppError from '@shared/errors/AppError';

class OrphanagesController {
  public async test(
    req: Request,
    res: Response,
  ): Promise<Response | undefined> {
    return res.json({ teste: 'deu certo' });
  }

  public async create(
    req: Request,
    res: Response,
  ): Promise<Response | undefined> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body as RequestDTO;

    const createOrphanageService = container.resolve(CreateOrphanageService);

    // eslint-disable-next-line
    const files = req.files as Express.Multer.File[];
    const fileNames = files.map(item => {
      return { path: item.filename };
    });

    const orphanage = await createOrphanageService.execute({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images: fileNames,
    });

    return res.json(orphanage);
  }

  public async index(
    req: Request,
    res: Response,
  ): Promise<Response | undefined> {
    const listOrphanagesService = container.resolve(ListOrphanagesService);

    const orphanages = await listOrphanagesService.execute();

    if (!orphanages) {
      throw new AppError(
        'Oops, parece que ainda não existem orfanatos ou aconteceu algum bug, tente novamente!',
      );
    }

    return res.json(orphanageView.renderMany(orphanages));
  }

  public async show(
    req: Request,
    res: Response,
  ): Promise<Response | undefined> {
    const { id } = req.params;
    const listOrphanageService = container.resolve(ListOrphanageService);

    const orphanage = await listOrphanageService.execute(id);

    if (!orphanage) {
      throw new AppError(
        'Oops, parece que esse orfanato ainda não existe ou aconteceu algum bug, tente novamente!',
      );
    }

    return res.json(orphanageView.render(orphanage));
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { orphanageId } = req.body;
    const addImg = container.resolve(AddImgService);

    const orphanage = await addImg.execute({
      orphanage_id: orphanageId,
      imgFileName: req.file.filename,
    });

    return res.status(200).json(classToClass(orphanage));
  }
}

export default OrphanagesController;
