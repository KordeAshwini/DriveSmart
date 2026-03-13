import { Routes, Route } from "react-router-dom";

import OwnerDashboard from "../pages/OwnerDashboard";
import RegisterSchool from "../pages/RegisterSchool";
import PendingApproval from "../pages/PendingApproval";

import AddInstructor from "../pages/instructors/AddInstructor";
import AddCar from "../pages/cars/AddCar";
import AssignCar from "../pages/assign/AssignCar";

import OwnerProtectedRoute from "./OwnerProtectedRoute";

const OwnerRoutes = () => {

    return (

        <Routes>

            {/* Register school page */}
            <Route
                path="register-school"
                element={<RegisterSchool />}
            />

            {/* Pending approval page */}
            <Route
                path="pending"
                element={<PendingApproval />}
            />

            {/* Dashboard */}
            <Route
                path="dashboard"
                element={
                    <OwnerProtectedRoute>
                        <OwnerDashboard />
                    </OwnerProtectedRoute>
                }
            />

            {/* Instructor management */}
            <Route
                path="add-instructor"
                element={
                    <OwnerProtectedRoute>
                        <AddInstructor />
                    </OwnerProtectedRoute>
                }
            />

            {/* Car management */}
            <Route
                path="add-car"
                element={
                    <OwnerProtectedRoute>
                        <AddCar />
                    </OwnerProtectedRoute>
                }
            />

            {/* Assign car */}
            <Route
                path="assign-car"
                element={
                    <OwnerProtectedRoute>
                        <AssignCar />
                    </OwnerProtectedRoute>
                }
            />

        </Routes>

    );
};

export default OwnerRoutes;