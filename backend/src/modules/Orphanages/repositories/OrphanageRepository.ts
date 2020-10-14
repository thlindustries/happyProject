import Orphanage from '@modules/Orphanages/infra/typeorm/entities/Orphanage';
import ICreateOrphanageDTO from '@modules/Orphanages/dtos/CreateOrphanageDTO';

export default interface OrphanageRepository {
  create(data: ICreateOrphanageDTO): Promise<Orphanage>;
  findByName(name: string): Promise<Orphanage | undefined>;
  findById(id: string): Promise<Orphanage | undefined>;
  list(): Promise<Orphanage[]>;
  save(orphanage: Orphanage): Promise<Orphanage>;
  test(): Promise<void>;
}
