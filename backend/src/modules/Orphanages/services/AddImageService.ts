import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IOrphanageRepository from '@modules/Orphanages/repositories/OrphanageRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import Orphanage from '@modules/Orphanages/infra/typeorm/entities/Orphanage';

interface Request {
  orphanage_id: string;
  imgFileName: string;
}

@injectable()
class AddImageService {
  constructor(
    @inject('OrphanageRepository')
    private orphanageRepository: IOrphanageRepository,

    @inject('DiskStorageProvider')
    private storageProvider: IStorageProvider,
  ) { }

  public async execute({
    orphanage_id,
    imgFileName,
  }: Request): Promise<Orphanage> {
    const orphanage = await this.orphanageRepository.findById(orphanage_id);

    if (!orphanage) {
      throw new AppError('Este orfanato não está registrado', 401);
    }

    // const archiveName = await this.storageProvider.saveFile(imgFileName);

    // orphanage.img = archiveName;

    await this.orphanageRepository.save(orphanage);

    return orphanage;
  }
}

export default AddImageService;
