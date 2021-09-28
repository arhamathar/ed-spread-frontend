import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const App = () => {
    return (
        <BrowserRouter>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} exact />
            <ToastContainer position='bottom-left' />
        </BrowserRouter>
    );
};

export default App;
