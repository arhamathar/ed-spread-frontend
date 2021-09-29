import React from 'react'
import { ToastContainer } from 'react-toastify'
import {BrowserRouter} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";

import Routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App
