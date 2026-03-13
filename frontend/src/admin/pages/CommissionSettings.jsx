import React from "react";
import AdminLayout from "../AdminLayout";

const CommissionSettings = () => {

    return (

        <AdminLayout>

            <h2 className="text-2xl font-bold mb-6">Commission Percentage</h2>

            <div className="bg-white p-6 rounded-xl shadow w-96">

                <label className="block mb-2 font-semibold">
                    Commission %
                </label>

                <input
                    type="number"
                    placeholder="Enter commission"
                    className="border p-2 w-full mb-4"
                />

                <button className="bg-indigo-600 text-white px-4 py-2 rounded">
                    Save
                </button>

            </div>

        </AdminLayout>

    );
};

export default CommissionSettings;