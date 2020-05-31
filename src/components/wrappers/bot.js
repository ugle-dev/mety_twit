import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField , Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  input: {
    display: 'none',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '100%',
    color: theme.palette.text.secondary,
  },
}));

export default function BotContainer( props) {
  const classes = useStyles();
  const { successCount, failCount, botName} = props;

  return (
    <>
      <Grid item xs={ 12 } sm={ 6 }>
        <Paper className={ classes.paper }>

          <input accept="image/*" className={ classes.input } id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span" size="large">
              <PhotoCamera />
            </IconButton>
          </label>
              

        </Paper>
      </Grid>
      <Grid item xs={ 12 } sm={ 6 }>
        <Paper className={ classes.paper }>
          <Grid container spacing={ 3 }>
            <Grid item xs={ 4 }>
              <TextField
                id="standard-error-helper-text"
                label="Name"
                defaultValue="Hello World"
                value = { botName }
              />
            </Grid>
          </Grid>
          <Grid container spacing={ 3 }>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="outlined" size="large" color="primary">
                    Success {successCount}
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="outlined" size="large" color="secondary">
                      Fail {failCount}
              </Button>
            </Grid>
          </Grid>
            
        </Paper>
      </Grid>
    </>
  );
}
