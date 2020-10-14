import { inject, injectable } from 'tsyringe';

import Orphanage from '@modules/Orphanages/infra/typeorm/entities/Orphanage';

import AppError from '@shared/errors/AppError';

import IOrphanageRepository from '@modules/Orphanages/repositories/OrphanageRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import ICreateOrphanageDTO from '@modules/Orphanages/dtos/CreateOrphanageDTO';

@injectable()
class CreateOrphanageService {
  constructor(
    @inject('OrphanageRepository')
    private orphanageRepositgory: IOrphanageRepository,

    @inject('DiskStorageProvider')
    private storageProvider: IStorageProvider,
  ) { }

  public async execute({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
    images = [{ path: '' }],
  }: ICreateOrphanageDTO): Promise<Orphanage> {
    const checkIfOrphanageExists = await this.orphanageRepositgory.findByName(
      name,
    );

    if (checkIfOrphanageExists) {
      throw new AppError(
        'Este orfanato já está cadastrado, por favor altere as infromações',
      );
    }

    const archiveName = await this.storageProvider.saveFile(images);

    const orphanage = await this.orphanageRepositgory.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images: archiveName,
    });

    return orphanage;
  }
}

export default CreateOrphanageService;
