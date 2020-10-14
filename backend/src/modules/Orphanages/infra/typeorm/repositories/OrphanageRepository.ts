import { Repository, getRepository } from 'typeorm';

import IOrphanageRepository from '@modules/Orphanages/repositories/OrphanageRepository';
import ICreateOrphanageDTO from '@modules/Orphanages/dtos/CreateOrphanageDTO';
import Orphanage from '@modules/Orphanages/infra/typeorm/entities/Orphanage';

class OrphanageRepository implements IOrphanageRepository {
  private ormRepo: Repository<Orphanage>;

  constructor() {
    this.ormRepo = getRepository(Orphanage);
  }

  public async create(data: ICreateOrphanageDTO): Promise<Orphanage> {
    const orphanage = this.ormRepo.create(data);

    await this.ormRepo.save(orphanage);

    return orphanage;
  }

  public async findByName(name: string): Promise<Orphanage | undefined> {
    const orphanage = await this.ormRepo.findOne({
      where: {
        name,
      },
    });

    return orphanage;
  }

  public async findById(id: string): Promise<Orphanage | undefined> {
    const orphanage = await this.ormRepo.findOne({
      where: {
        id,
      },
      relations: ['images'],
    });

    return orphanage;
  }

  public async list(): Promise<Orphanage[]> {
    const orphanages = await this.ormRepo.find({ relations: ['images'] });

    return orphanages;
  }

  public async save(orphanage: Orphanage): Promise<Orphanage> {
    return this.ormRepo.save(orphanage);
  }

  public async test(): Promise<void> {
    console.log('oi');
  }
}

export default OrphanageRepository;
