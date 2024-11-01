import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function LoginPage() {
    const  { login } = useContext(AuthContext);
    const [email, setEmail] = useContext('');
    const [password, setPassword] = useContext('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Replace with your backend API endpoint
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            login(data.token)
        } else {
            alert(data.message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
               /><br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
               /><br />
               <button type="submit">Login</button>
        </form>

    )
}

export default LoginPage;