import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navba from "./components/navbar";

import Routes from "./routes";

const App = () => {
    return (
        <BrowserRouter>
            <Navba />
            <Routes />
            <ToastContainer />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
