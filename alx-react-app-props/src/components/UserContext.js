// src/UserContext.js
import React, { createContext, useState } from 'react';

// Initialize the context
const UserContext = createContext();

// Optional: Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
