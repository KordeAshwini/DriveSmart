import { Navigate } from "react-router-dom";

const OwnerProtectedRoute = ({ children }) => {

    const token = localStorage.getItem("token");
    const schoolStatus = localStorage.getItem("schoolStatus");

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (schoolStatus === "NOT_REGISTERED") {
        return <Navigate to="/owner/register-school" />;
    }

    if (schoolStatus === "PENDING") {
        return <Navigate to="/owner/pending" />;
    }

    return children;
};

export default OwnerProtectedRoute;