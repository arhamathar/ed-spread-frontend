import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/auth/login";
import Signup from "./Pages/auth/signup";
import Courses from "./Pages/courses";

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
        </Switch>
    );
};

export default Routes;
