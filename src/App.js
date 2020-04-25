import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar  from '@material-ui/core/AppBar';
import Toolbar  from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

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
    </AppBar>
    </Container>
  );
}

export default App;
