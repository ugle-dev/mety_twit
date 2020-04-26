import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField , Button} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
}

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BotContainer() {
  const classes = useStyles();

  const states = {
      value: 0
  }

  const handleChange = (event, newValue) => {
    states.value = newValue;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField
                    id="standard-error-helper-text"
                    label="Name"
                    defaultValue="Hello World"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
            <Grid item xs={6}>
                    <Button variant="outlined" size="large" color="primary">
                        Primary 3
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" size="large" color="secondary">
                        Secondary 3
                    </Button>
                </Grid>
            </Grid>
            
          </Paper>
        </Grid>
        <Grid item xs={12} >
            <AppBar position="static">
                <Tabs aria-label="simple tabs example" onChange={handleChange} value={states.value} >
                    <Tab label="Twits"   {...a11yProps(0)}/>
                    <Tab label="Logs"  {...a11yProps(1)}/>
                </Tabs>
            </AppBar>
            <TabPanel value={states.value}  index={0}>
                Twits
            </TabPanel>
            <TabPanel value={states.value} index={1}>
                Logs
            </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
