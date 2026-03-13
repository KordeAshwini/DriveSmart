import React from "react";
import AdminLayout from "../AdminLayout";

const DefaultSlots = () => {

    return (

        <AdminLayout>

            <h2 className="text-2xl font-bold mb-6">Add Default Slots</h2>

            <div className="bg-white p-6 rounded-xl shadow w-96">

                <label className="block mb-2 font-semibold">Start Time</label>
                <input type="time" className="border p-2 w-full mb-4" />

                <label className="block mb-2 font-semibold">End Time</label>
                <input type="time" className="border p-2 w-full mb-4" />

                <button className="bg-indigo-600 text-white px-4 py-2 rounded">
                    Add Slot
                </button>

            </div>

        </AdminLayout>

    );
};

export default DefaultSlots;