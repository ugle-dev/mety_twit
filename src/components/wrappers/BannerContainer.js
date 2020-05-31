import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const BannerContainer = () => {
  const CLASSES = useStyles();
  return (
    <div className={ CLASSES.root }>
      <Grid container spacing={ 3 } alignItems="flex-end">
        <SearchBar />
        <Grid item xs={ 12 } sm={ 2 }>
          <Button variant="outlined" color="primary">
            Add Bot
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default BannerContainer;
