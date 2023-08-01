import React from 'react';
import { useAuth } from '../../CustomHooks/useAuth';
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const { isLogged } = useAuth();

    let location = useLocation();

    if(!isLogged) {
        return <Navigate to="/sign-in" />
    }
 
    return children
};

export { ProtectedRoute };