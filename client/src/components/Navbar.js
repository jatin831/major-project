import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textAlign: 'left',
        flexGrow: 1,
    },
}));

export default function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Medicine Distribution System
                    </Typography>
                    <Button variant="contained" color="secondary" component={Link} to="/admin">
                        Admin Panel
                    </Button>
                    &nbsp;
                    &nbsp;
                    <Button variant="contained" color="secondary" component={Link} to="/home">
                        Home
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
