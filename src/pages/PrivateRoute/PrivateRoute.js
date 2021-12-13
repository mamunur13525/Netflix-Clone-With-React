import { getAuth } from 'firebase/auth';
import React from 'react';
import { useLocation, Navigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';


function PrivateRoute({ children }) {
    const { currentUsers } = useAuth();
    const location = useLocation();
    const { currentUser } = getAuth();

    return (currentUser?.email || currentUsers.email)
        ? children
        : <Navigate to="/login" replace state={{ path: location.pathname }} />;
}

export default PrivateRoute;