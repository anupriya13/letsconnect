import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Button, Typography,Toolbar} from '@material-ui/core';

import useStyles from './styles';


const Navbar = () => {
    const classes = useStyles();
   

    return (
    <AppBar className={classes.appBar} position="static"color ="inherit">
        <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant = "h6" align = "center"> Posts </Typography>
                &nbsp;&nbsp; | &nbsp; &nbsp;
                <Typography>< a target="_blank" href="https://chat-room-web.netlify.app/"> Chat Room </a></Typography>
                &nbsp;&nbsp; | &nbsp; &nbsp;
                <Typography>< a target="_blank" href="https://video-connect.netlify.app/"> Video Room </a></Typography>
               
               

             
               
        </div>
        
            </AppBar>
);
};

export default Navbar;
