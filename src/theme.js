import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1e88e5',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#43a047',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;