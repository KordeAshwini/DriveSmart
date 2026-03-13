import React from "react";

const AdminTopbar = () => {

    const name = localStorage.getItem("name");

    return (

        <div className="h-16 bg-white shadow flex items-center justify-between px-6">

            <h2 className="text-lg font-bold">
                Admin Dashboard
            </h2>

            <div className="text-sm text-slate-600">
                Welcome, {name}
            </div>

        </div>

    );
};

export default AdminTopbar;