import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/auth/login";
import Signup from "./Pages/auth/signup";
import Home from "./Pages/home";

const Routes = () => {
    return (
        <Switch>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/signup'>
                <Signup />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;
