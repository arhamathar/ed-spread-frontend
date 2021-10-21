import { createContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
    userId: null,
    token: null,
    role: 'USER',
    name: '',
    mobile: '',
    email: '',
    login: () => {},
    logout: () => {},
});
