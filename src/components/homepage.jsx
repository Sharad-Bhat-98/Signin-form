import React from 'react';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const HomePage = () => {
    return (<React.Fragment>

        <Grid container
            spacing={5}
            justify='center'
        >
            <Grid item xs={12} md={12} lg={12} sm={12}>
                <AppBar position="static" color='primary'>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" >
                            Homepage
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item xs={12} md={12} lg={12} sm={12}>

                <Link to='/signin'><Button style={{ justifyContent: 'center' }} variant="contained" color='primary'> Signup</Button></Link>

            </Grid>
        </Grid>



    </React.Fragment>);
}

export default HomePage;