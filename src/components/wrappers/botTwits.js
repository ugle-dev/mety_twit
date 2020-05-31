import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

//Table Imports
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


function createData(name, calories) {
    return { name, calories};
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <Typography
          component="div"
          role="tabpanel"
          hidden={ value !== index }
          aria-labelledby={ `simple-tab-${index}` }
          { ...other }
        >
            {value === index && <Box p={ 3 }>{children}</Box>}
        </Typography>
    );
}


function LogTable( props ) {
    const classes = useStyles();
    const { data } = props;

    return (
        <TableContainer component={ Paper }>
            <Table className={ classes.table } aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Twits</TableCell>
                        <TableCell align="right">Detail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={ row.name }>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default function BotTwitsContainer( props) {
    const { handleTabChange, tabValue} = props;


    const rows = [
        createData('Gingerbread', 356),
    ];


    return (
        <>
            <Grid item xs={ 12 } >
                <AppBar position="static">
                    <Tabs aria-label="simple tabs example" onChange={ handleTabChange } value={ tabValue } >
                        <Tab label="Twits"   { ...a11yProps(0) }/>
                        <Tab label="Logs"  { ...a11yProps(1) }/>
                    </Tabs>
                </AppBar>
                <TabPanel value={ tabValue }  index={ 0 }>
                Twits
                </TabPanel>
                <TabPanel value={ tabValue } index={ 1 }>
                    <LogTable data={ rows }/>
                </TabPanel>
            </Grid>
        </>
    );
}
