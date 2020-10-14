import { inject, injectable } from 'tsyringe';

import Orphanage from '@modules/Orphanages/infra/typeorm/entities/Orphanage';

import IOrphanageRepository from '@modules/Orphanages/repositories/OrphanageRepository';

@injectable()
class ListOrphanageService {
  constructor(
    @inject('OrphanageRepository')
    private orphanageRepository: IOrphanageRepository,
  ) { }

  public async execute(id: string): Promise<Orphanage | undefined> {
    const orphanage = await this.orphanageRepository.findById(id);

    return orphanage;
  }
}

export default ListOrphanageService;
