import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '2 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

export default function BotCard(props) {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Card className={ classes.root }>
      <div className={ classes.details }>
        <CardContent className={ classes.content }>
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
        </CardContent>
        <div className={ classes.controls }>
          <Button variant="contained" color="primary">
            {props.successCount}
          </Button>
          <Button variant="contained" color="secondary">
            {props.failCount}
          </Button>

          <IconButton aria-label="next">
            <Icon>edit</Icon>
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={ classes.cover }
        image={ props.mediaURL }
        title={ props.mediaTitle }
      />
    </Card>
  );
}

//props
// failCount :: total submitted twit count
// successCount :: total submitted success count

//mediaURL :: resim path bilgisi
//mediaTitle :: Resim basligi