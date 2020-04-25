import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from './helpers/history';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar  from '@material-ui/core/AppBar';
import Toolbar  from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import BotsLayout from './layouts/bots_layouts'
import BotDetailLayout from './layouts/botDetail_layouts'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function App() {
  return (
    <Container fixed>
     <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" >
          Methy Twitter Bots
        </Typography>
      </Toolbar>


      <Router history={history}>
        <Switch>
          <Route path="/" exact component={BotsLayout} />
          <Route path="/bot" component={BotDetailLayout} />
        </Switch>
      </Router>
    
    </AppBar>
    </Container>
  );
}

export default App;
