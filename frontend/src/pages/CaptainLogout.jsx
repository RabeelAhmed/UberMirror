import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const CaptainLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/captain-login');
                }
            }).catch((error) => {
                if (error.response && error.response.status === 401) {
                    console.error("Logout failed: Unauthorized");
                    navigate('/captain-login');  // Redirect to login if unauthorized
                } else {
                    console.error("Logout failed:", error);
                }
            });
        } else {
            navigate('/captain-login'); // Redirect if no token is found
        }
    }, [token, navigate]);

    return <div>CaptainLogout</div>;
};
