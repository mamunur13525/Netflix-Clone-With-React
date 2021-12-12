import React from 'react';
import { useLocation, Navigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';


function PrivateRoute({ children }) {
    const { currentUsers } = useAuth();
    const location = useLocation();

    return currentUsers.email
        ? children
        : <Navigate to="/login" replace state={{ path: location.pathname }} />;
}

export default PrivateRoute;