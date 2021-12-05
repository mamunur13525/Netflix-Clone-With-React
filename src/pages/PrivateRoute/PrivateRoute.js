import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router';


function PrivateRoute({ children }) {
    const [ifLoggedIn] = useState(false)
    const location = useLocation();

    return ifLoggedIn === false
        ? children
        : <Navigate to="/login" replace state={{ path: location.pathname }} />;
}

export default PrivateRoute;