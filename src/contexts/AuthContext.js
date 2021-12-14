import React, { createContext, useContext, useState } from 'react';
import { firebaseConfig } from '../Config/firebase';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

initializeApp(firebaseConfig);
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const auth = getAuth()
    const [currentUsers, setCurrentUsers] = useState({})
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const value = {
        currentUsers,
        signUp,
        setCurrentUsers
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

