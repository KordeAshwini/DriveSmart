import React from "react";
import { useNavigate } from "react-router-dom";

const OwnerTopbar = ({ collapsed, setCollapsed }) => {

    const ownerName = localStorage.getItem("name");
    const navigate = useNavigate();

    const handleLogout = () => {

        // remove stored login data
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("name");
        localStorage.removeItem("schoolStatus");

        // redirect to login page
        navigate("/");
    };

    return (
        <div className="flex justify-between items-center bg-white shadow px-6 py-3">

            <h1 className="text-xl font-semibold">
                Owner Dashboard
            </h1>

            <div className="flex items-center gap-3">

                <span className="text-gray-600">
                    Welcome {ownerName}
                </span>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Logout
                </button>

            </div>

        </div>
    );
};

export default OwnerTopbar;