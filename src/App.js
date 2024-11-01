import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import WatchLaterPage from './pages/WatchLaterPage';


function App() {
    const { auth } = useContext(AuthContext);

    return (
        <Routes>
            <Route 
                path="/login"
                element={!auth.token ? <LoginPage /> : <Navigate to="/" />}
            />
            <Route
                path="/"
                element={auth.token ? <MainPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/watch-later"
                element={auth.token ? <WatchLaterPage /> : <Navigate to="/login" />}

            />
        </Routes>
    );
}

export default App;