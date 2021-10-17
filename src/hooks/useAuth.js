import { useState, useEffect, useCallback } from 'react';

const useAuth = () => {
    const [role, setRole] = useState('USER');
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback((userId, token, role) => {
        setToken(token);
        setUserId(userId);
        setIsLoggedIn(true);
        setRole(role);
        localStorage.setItem(
            'userData',
            JSON.stringify({ userId, token, role })
        );
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setIsLoggedIn(false);
        setRole(null);
        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && userData.token) {
            login(userData.userId, userData.token, userData.role);
        }
    }, [login]);

    return { token, userId, login, logout, isLoggedIn, role };
};

export default useAuth;
