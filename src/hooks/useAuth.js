import { useState, useEffect, useCallback } from "react";

const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const login = useCallback((userId, token) => {
        setToken(token);
        setUserId(userId);
        localStorage.setItem("userData", JSON.stringify({ userId, token }));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem("userData");
    }, []);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData && userData.token) {
            login(userData.userId, userData.token);
        }
    }, [login]);

    return { token, userId, login, logout };
};

export default useAuth;
