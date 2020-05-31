import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

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

export default function SearchContainer() {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <Grid container spacing={ 3 } alignItems="flex-end">
                <Grid item xs={ 12 } sm={ 10 }>
                    <Grid container spacing={ 1 } alignItems="flex-end" >
                        <Grid item>
                            <SearchIcon />
                        </Grid>
                        <Grid item >
                            <TextField id="input-with-icon-grid" label="With a grid" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={ 12 } sm={ 2 }>
                    <Button variant="outlined" color="primary">
                    Add Bot
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
