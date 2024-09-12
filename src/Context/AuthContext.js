
import React, { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        role: "",
        name: "",
        email: "",
        phoneNumber: "",
    });

  

    

    return (
        <AuthContext.Provider value={{ isLoading,token, user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};