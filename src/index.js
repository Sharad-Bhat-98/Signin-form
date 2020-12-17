import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SigninFrom from './components/sigininform';
import SignupForm from './components/signupform';
import HomePage from './components/homepage';
import Routes from './Routes';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



