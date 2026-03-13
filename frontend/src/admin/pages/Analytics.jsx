import React from "react";
import AdminLayout from "../AdminLayout";

const Analytics = () => {

    return (

        <AdminLayout>

            <h2 className="text-2xl font-bold mb-6">
                Platform Analytics
            </h2>

            <div className="grid grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-xl shadow">

                    <h3 className="text-slate-500 text-sm">
                        Total Users
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        120
                    </p>

                </div>

                <div className="bg-white p-6 rounded-xl shadow">

                    <h3 className="text-slate-500 text-sm">
                        Total Schools
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        35
                    </p>

                </div>

                <div className="bg-white p-6 rounded-xl shadow">

                    <h3 className="text-slate-500 text-sm">
                        Total Bookings
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        210
                    </p>

                </div>

            </div>

        </AdminLayout>

    );
};

export default Analytics;