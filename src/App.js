import React from 'react'
import { ToastContainer } from 'react-toastify'
import {BrowserRouter} from 'react-router-dom'

import Routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
            <ToastContainer position='bottom-left' />
        </BrowserRouter>
    )
}

export default App
