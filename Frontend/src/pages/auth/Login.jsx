import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
        } catch (error) {
            console.error(error);
            alert('Login failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='mt-10'>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
            <button type="submit">Log In</button>
        </form>
    );
};

export default Login;