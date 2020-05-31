import React from 'react';

// styling
import './styles/app.css';

// containers
import Header from './containers/Header';
import Copyright from './containers/Copyright';

// router
import BrowserRouter from './Route/Router';

function App() {
  return (      
    <div className="App">
      <Header />
      <BrowserRouter />
      <Copyright />
    </div>
  );
}

export default App;
