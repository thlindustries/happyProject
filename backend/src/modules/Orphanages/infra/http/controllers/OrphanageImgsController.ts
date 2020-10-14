import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AddImgService from '@modules/Orphanages/services/AddImageService';

class OrphanageImgsController {
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

export default OrphanageImgsController;
