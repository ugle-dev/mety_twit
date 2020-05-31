import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

// containers
import BotsLayout from '../layouts/bots_layouts';
import BotsDetailLayout from '../layouts/botDetail_layouts';

// helper -> browser history
import History from '../helpers/History';

const BrowserRouter = ({props}) => (
  <Router history={ History }>
    <Switch>
      <Route path="/" exact component={ BotsLayout } />
      <Route path="/bot" component={ BotsDetailLayout } />
    </Switch>
  </Router>
);

export default BrowserRouter;