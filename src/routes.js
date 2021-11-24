import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Pages/auth/login';
import Signup from './Pages/auth/signup';
import Courses from './Pages/Course/courses';
import MyCourses from './Pages/Course/MyCourses';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/home';
import EmailVarification from './Pages/auth/emailvarification';
import ConfirmPass from './Pages/auth/confirmpass';
import About from './Pages/aboutus';
import { AuthContext } from './context/authContext';

const Routes = () => {
    const auth = useContext(AuthContext);

    return (
        <Switch>
            {!auth.token && (
                <Route exact path="/login">
                    <Login />
                </Route>
            )}
            {!auth.token && (
                <Route exact path="/signup">
                    <Signup />
                </Route>
            )}
            <Route exact path="/courses">
                <Courses />
            </Route>
            {auth.token && (
                <Route exact path='/my-courses'>
                    <MyCourses />
                </Route>
            )}
            {auth.token &&
                (auth.role === 'SUPER_USER' || auth.role === 'ADMIN') && (
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                )}
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/reset">
                <EmailVarification />
            </Route>
            <Route path="/reset/:token">
                <ConfirmPass />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            {auth.token ? <Redirect to="/" /> : <Redirect to="/login" />}
        </Switch>
    );
};

export default Routes;
