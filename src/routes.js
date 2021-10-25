import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/auth/login';
import Signup from './Pages/auth/signup';
import Courses from './Pages/Course/courses';
import Dashboard from './Pages/Dashboard';
import About from './Pages/aboutus';
import Home from './Pages/home';

const Routes = () => {
    return (
        <Switch>
            <Route path='/login'>
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
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;
