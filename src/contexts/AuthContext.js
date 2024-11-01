import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [auth, setAuth] = useState({ token: null, loading: true });

    useEffect(() => {
        const token = localStorage.getItem('token');
        setAuth({ token, loading: false });
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setAuth({ token, loading: false });
    };

    const logout = () => {
        localStorage.removeItem('token')
        setAuth({ token: null, loading: false });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {!auth.loading && children}
        </AuthContext.Provider> 
    );
}

export default AuthProvider;