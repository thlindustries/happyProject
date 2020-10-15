import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import CreateOrphanage from '../pages/CreateOrphanage';
import Orphanage from '../pages/Orphanage';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/app" exact component={OrphanagesMap} />
      <Route path="/orphanages/create" exact component={CreateOrphanage} />
      <Route path="/orphanage/:id" exact component={Orphanage} />
    </Switch>
  );
};

export default routes;
