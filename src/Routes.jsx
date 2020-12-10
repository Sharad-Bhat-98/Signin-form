import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/homepage';
import App from './App';
import SigninFrom from './components/sigininform';





const Routes = () => {
    return (

        <Router>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/signin' component={SigninFrom} />
            <Route exact path='/signup' component={App} />
        </Router>

    );
}

export default Routes;