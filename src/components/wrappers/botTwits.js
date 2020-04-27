import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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

export default function BotTwitsContainer( props) {
  const { handleTabChange, tabValue} = props;

  return (
    <>
        <Grid item xs={12} >
            <AppBar position="static">
                <Tabs aria-label="simple tabs example" onChange={handleTabChange} value={tabValue} >
                    <Tab label="Twits"   {...a11yProps(0)}/>
                    <Tab label="Logs"  {...a11yProps(1)}/>
                </Tabs>
            </AppBar>
            <TabPanel value={tabValue}  index={0}>
                Twits
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                Logs
            </TabPanel>
        </Grid>
    </>
  );
}
