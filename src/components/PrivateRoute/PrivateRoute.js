import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { currentUsers } = useAuth();
    return (
        <Route
            {...rest}
            render={() => currentUsers.email
                ? children
                : <Navigate replace to="/login" />
            }
        />
    );
}

export default PrivateRoute;