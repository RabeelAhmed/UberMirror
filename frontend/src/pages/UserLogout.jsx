import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/user-login');
                }
            }).catch((error) => {
                if (error.response && error.response.status === 401) {
                    console.error("Logout failed: Unauthorized");
                    navigate('/user-login');  // Redirect to login if unauthorized
                } else {
                    console.error("Logout failed:", error);
                }
            });
        } else {
            navigate('/user-login'); // Redirect if no token is found
        }
    }, [token, navigate]);

    return <div>UserLogout</div>;
};
