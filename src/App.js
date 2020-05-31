import React from 'react';

// Containers
import Container from '@material-ui/core/Container';

// MateriaUI Components
import Typography from '@material-ui/core/Typography';
import AppBar  from '@material-ui/core/AppBar';
import Toolbar  from '@material-ui/core/Toolbar';

// router
import BrowserRouter from './Route/Router';
import Copyright from './containers/Copyright';

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

      <BrowserRouter />
      <Copyright />
    </Container>
  );
}

export default App;
