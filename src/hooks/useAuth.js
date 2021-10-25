import { useState, useEffect, useCallback } from 'react';

const useAuth = () => {
    const [role, setRole] = useState('USER');
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback((userId, token, role, mobile, name, email) => {
        setToken(token);
        setUserId(userId);
        setIsLoggedIn(true);
        setRole(role);
        setEmail(email);
        setMobile(mobile);
        setName(name);
        console.log(mobile, name, email);
        localStorage.setItem(
            'userData',
            JSON.stringify({ userId, token, role, mobile, name, email })
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
            const { userId, token, role, mobile, name, email } = userData;
            login(userId, token, role, mobile, name, email);
        }
    }, [login]);

    return {
        token,
        userId,
        login,
        logout,
        isLoggedIn,
        role,
        mobile,
        name,
        email,
    };
};

export default useAuth;
