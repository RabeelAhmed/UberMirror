import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

export const CaptainProtectedWrapper = ({ children }) => {  // Destructure `children` from props

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true); // Separate isLoading state

   useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        } else {
            axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                if (response.status === 200) {
                    setCaptain(response.data.captain);
                    setIsLoading(false);
                }
            }).catch(err => {
                console.log(err);
                localStorage.removeItem('token')
                navigate('/captain-login');
            });
        }
    }, [token, navigate, setCaptain]);

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
