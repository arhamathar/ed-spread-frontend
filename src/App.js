import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Routes from './routes';
import useAuth from './hooks/useAuth';
import { AuthContext } from './context/authContext';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const { token, login, logout, userId, isLoggedIn, role } = useAuth();

    return (
        <AuthContext.Provider
            value={{ token, userId, login, logout, isLoggedIn, role }}
        >
            <BrowserRouter>
                <Navbar />
                <Routes />
                <ToastContainer />
                <Footer />
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;
