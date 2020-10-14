import { container } from 'tsyringe';

import '@shared/container/providers';

import IOrphanageRepository from '@modules/Orphanages/repositories/OrphanageRepository';
import OrphanageRepository from '@modules/Orphanages/infra/typeorm/repositories/OrphanageRepository';

container.registerSingleton<IOrphanageRepository>(
  'OrphanageRepository',
  OrphanageRepository,
);
