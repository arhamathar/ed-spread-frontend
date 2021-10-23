import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/auth/login';
import Signup from './Pages/auth/signup';
import Courses from './Pages/Course/courses';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/home';
import EmailVarification from './Pages/auth/emailvarification';
import ConfirmPass from './Pages/auth/confirmpass';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/login'>
                <Login />
            </Route>
            <Route path='/signup'>
                <Signup />
            </Route>
            <Route path='/courses'>
                <Courses />
            </Route>
            <Route path='/dashboard'>
                <Dashboard />
            </Route>
            <Route exact path='/reset'>
                <EmailVarification />
            </Route>
            <Route path='/reset/:token'>
                <ConfirmPass />
            </Route>
            <Route exact path='/'>
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;
