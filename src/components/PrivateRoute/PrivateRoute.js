import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getAuth, updateProfile } from "firebase/auth";


const PrivateRoute = ({ children, ...rest }) => {
    const { currentUsers } = useAuth();
    const auth = getAuth();
    console.log(currentUsers)
    return (
        <Route
            {...rest}
            render={() => currentUsers.name
                ? children
                : <Navigate replace to="/login" />
            }
        />
    );
}


export default PrivateRoute;