import React from "react";
import AdminLayout from "../AdminLayout";

const AdminDashboard = () => {

    return (

        <AdminLayout>

            <div className="grid grid-cols-4 gap-6">

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-slate-500 text-sm">Total Users</h3>
                    <p className="text-3xl font-bold mt-2">120</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-slate-500 text-sm">Driving Schools</h3>
                    <p className="text-3xl font-bold mt-2">35</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-slate-500 text-sm">Bookings</h3>
                    <p className="text-3xl font-bold mt-2">210</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-slate-500 text-sm">Revenue</h3>
                    <p className="text-3xl font-bold mt-2">₹45,000</p>
                </div>

            </div>

        </AdminLayout>

    );
};

export default AdminDashboard;