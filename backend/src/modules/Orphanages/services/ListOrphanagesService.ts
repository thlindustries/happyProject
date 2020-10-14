import { inject, injectable } from 'tsyringe';

import Orphanage from '@modules/Orphanages/infra/typeorm/entities/Orphanage';

import IOrphanageRepository from '@modules/Orphanages/repositories/OrphanageRepository';

@injectable()
class ListOrphanagesService {
  constructor(
    @inject('OrphanageRepository')
    private orphanageRepository: IOrphanageRepository,
  ) { }

  public async execute(): Promise<Orphanage[]> {
    const orphanages = await this.orphanageRepository.list();

    return orphanages;
  }
}

export default ListOrphanagesService;
