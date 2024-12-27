import React, { createContext, useState } from 'react';

export const UserDataContext = createContext(); // Create the context

export const UserContext = ({ children }) => { // Correctly define the context provider component
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}  {/* No div here, just the provider wrapping children */}
        </UserDataContext.Provider>
    );
};
