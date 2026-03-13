import React from "react";
import OwnerSidebar from "./OwnerSidebar";
import OwnerTopbar from "./OwnerTopbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OwnerLayout = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {

        const role = localStorage.getItem("role");
        const token = localStorage.getItem("token");

        // If user is not admin redirect to home
        if (!token || role !== "OWNER") {
            navigate("/");
        }

    }, [navigate]);


    return (

        <div className="flex">

            <OwnerSidebar />

            <div className="flex-1 bg-gray-100 min-h-screen">

                <OwnerTopbar />

                <div className="p-8">
                    {children}
                </div>

            </div>

        </div>

    );
};

export default OwnerLayout;