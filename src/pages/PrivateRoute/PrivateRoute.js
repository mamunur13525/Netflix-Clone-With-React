import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router';
import Login from '../Login/Login';
import Other from '../Other/Other';

function PrivateRoute({ children }) {
    const [ifLoggedIn, setIfLoggedIn] = useState(false)
    const location = useLocation();
    
    return ifLoggedIn === false
        ? children
        : <Navigate to="/login" replace   state={{ path: location.pathname }} />;
}

export default PrivateRoute;