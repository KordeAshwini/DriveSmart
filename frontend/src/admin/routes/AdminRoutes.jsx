// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import AdminDashboard from "../pages/AdminDashboard";
// import ManageUsers from "../pages/ManageUsers";
// import SchoolsApproval from "../pages/SchoolsApproval";
// import Analytics from "../pages/Analytics";

// // import AdminProtectedRoute from "../AdminProtectedRoute";

// const AdminRoutes = () => {

//     return (

//         <Routes>

//             <Route
//                 path="dashboard"
//                 element={

//                     <AdminDashboard />

//                 }
//             />

//             <Route
//                 path="users"
//                 element={

//                     <ManageUsers />

//                 }
//             />

//             <Route
//                 path="schools"
//                 element={

//                     <SchoolsApproval />

//                 }
//             />

//             <Route
//                 path="analytics"
//                 element={

//                     <Analytics />

//                 }
//             />

//         </Routes>

//     );

// };

// export default AdminRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/AdminDashboard";
import ManageUsers from "../pages/ManageUsers";
import SchoolsApproval from "../pages/SchoolsApproval";
import Analytics from "../pages/Analytics";
import DefaultSlots from "../pages/DefaultSlots";
import CommissionSettings from "../pages/CommissionSettings";
import DeactivateSchools from "../pages/DeactivateSchools";

import AdminProtectedRoute from "../AdminProtectedRoute";

const AdminRoutes = () => {

    return (

        <Routes>

            <Route
                path="dashboard"
                element={
                    <AdminProtectedRoute>
                        <AdminDashboard />
                    </AdminProtectedRoute>
                }
            />

            <Route
                path="users"
                element={
                    <AdminProtectedRoute>
                        <ManageUsers />
                    </AdminProtectedRoute>
                }
            />

            <Route
                path="schools"
                element={
                    <AdminProtectedRoute>
                        <SchoolsApproval />
                    </AdminProtectedRoute>
                }
            />

            <Route
                path="analytics"
                element={
                    <AdminProtectedRoute>
                        <Analytics />
                    </AdminProtectedRoute>
                }
            />


            <Route
                path="default-slots"
                element={
                    <AdminProtectedRoute>
                        <DefaultSlots />
                    </AdminProtectedRoute>
                }
            />
            <Route
                path="commission"
                element={
                    <AdminProtectedRoute>
                        <CommissionSettings />
                    </AdminProtectedRoute>
                }
            />
            <Route
                path="deactivate-schools"
                element={
                    <AdminProtectedRoute>
                        <DeactivateSchools />
                    </AdminProtectedRoute>
                }
            />

        </Routes>

    );
};

export default AdminRoutes;