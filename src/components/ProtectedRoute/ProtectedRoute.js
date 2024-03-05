import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, ...props }) {
    return (
        props.isLoggedIn ? children : <Navigate to="/" replace />
    )
}

export default ProtectedRoute; 