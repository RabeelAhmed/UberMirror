import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

export const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext); // Destructure user and setUser
    const [isLoading, setIsLoading] = useState(true); // Local state for loading

    useEffect(() => {
        if (!token) {
            navigate('/user-login');
        } else {
            axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                if (response.status === 200) {
                    setUser(response.data.user); // Update context with user data
                    setIsLoading(false); // Set loading to false once data is fetched
                }
            }).catch(err => {
                console.log(err);
                navigate('/user-login'); // Redirect if there's an error or the user isn't authenticated
            });
        }
    }, [token, navigate, setUser]);

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <>
            {children}
        </>
    );
};
