import { Router } from 'express';

import orphanageRoutes from '@modules/Orphanages/infra/http/routes/orphanages.routes';

const routes = Router();

routes.use('/orphanages', orphanageRoutes);

export default routes;
