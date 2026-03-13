import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AdminSidebar from "./components/AdminSidebar";
import AdminTopbar from "./components/AdminTopbar";

const AdminLayout = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {

        const role = localStorage.getItem("role");
        const token = localStorage.getItem("token");

        // If user is not admin redirect to home
        if (!token || role !== "ADMIN") {
            navigate("/");
        }

    }, [navigate]);

    return (

        <div className="flex">

            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <div className="flex-1 bg-slate-100 min-h-screen">

                {/* Topbar */}
                <AdminTopbar />

                {/* Page Content */}
                <div className="p-6">
                    {children}
                </div>

            </div>

        </div>

    );
};

export default AdminLayout;