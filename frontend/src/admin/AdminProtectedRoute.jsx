import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // If not logged in
    if (!token) {
        return <Navigate to="/" replace />;
    }

    // If not admin
    if (role !== "ADMIN") {
        return <Navigate to="/" replace />;
    }

    // Allow access
    return children;
};

export default AdminProtectedRoute;