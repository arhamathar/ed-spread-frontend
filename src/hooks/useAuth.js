import { useState, useEffect, useCallback } from 'react';

const useAuth = () => {
    const [role, setRole] = useState('USER');
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [referralPoints, setReferralPoints] = useState(0);
    const [referralCode, setReferralCode] = useState('');

    const login = useCallback(
        (
            userId,
            token,
            role,
            mobile,
            name,
            email,
            referralPoints,
            referralCode
        ) => {
            setToken(token);
            setUserId(userId);
            setIsLoggedIn(true);
            setRole(role);
            setEmail(email);
            setMobile(mobile);
            setName(name);
            setReferralPoints(referralPoints);
            setReferralCode(referralCode);

            localStorage.setItem(
                'userData',
                JSON.stringify({
                    userId,
                    token,
                    role,
                    mobile,
                    name,
                    email,
                    referralPoints,
                    referralCode,
                    isLoggedIn
                })
            );
        },
        []
    );

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
            const {
                userId,
                token,
                role,
                mobile,
                name,
                email,
                referralPoints,
                referralCode,
            } = userData;
            login(
                userId,
                token,
                role,
                mobile,
                name,
                email,
                referralPoints,
                referralCode
            );
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
        referralPoints,
        referralCode,
    };
};

export default useAuth;
