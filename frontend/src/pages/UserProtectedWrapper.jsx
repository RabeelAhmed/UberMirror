// UserProtectedWrapper.jsx
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserProtectedWrapper = ({ children }) => {  // Destructure `children` from props

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

   useEffect(() => {
        if (!token) {
            navigate('/user-login');
        }
    }, [token, navigate]);

    return (
        <>
            {children}
        </>
    );
};
