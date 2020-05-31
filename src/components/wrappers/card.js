import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BotCard from '../card';

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

export default function CardsContainer() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <Grid container spacing={ 3 }>
        <Grid item xs={ 12 } sm={ 6 }>
          <BotCard 
            name = 'Bot 1'
            successCount = '12'
            failCount = '5'
            mediaURL = 'https://res.cloudinary.com/practicaldev/image/fetch/s--q8mBCQBW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1ykamh5rf8ukqajqqpaq.png'
          />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <BotCard 
            name = 'Bot 2'
            successCount = '12'
            failCount = '5'
            mediaURL = 'https://res.cloudinary.com/practicaldev/image/fetch/s--q8mBCQBW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1ykamh5rf8ukqajqqpaq.png'
          />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <BotCard 
            name = 'Bot 3'
            successCount = '12'
            failCount = '5'
            mediaURL = 'https://res.cloudinary.com/practicaldev/image/fetch/s--q8mBCQBW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1ykamh5rf8ukqajqqpaq.png'
          />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <BotCard 
            name = 'Bot 4'
            successCount = '12'
            failCount = '5'
            mediaURL = 'https://res.cloudinary.com/practicaldev/image/fetch/s--q8mBCQBW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1ykamh5rf8ukqajqqpaq.png'
          />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <BotCard 
            name = 'Bot 5'
            successCount = '12'
            failCount = '5'
            mediaURL = 'https://res.cloudinary.com/practicaldev/image/fetch/s--q8mBCQBW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1ykamh5rf8ukqajqqpaq.png'
          />
        </Grid>
      </Grid>
    </div>
  );
}
