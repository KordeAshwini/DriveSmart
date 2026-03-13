import React, { useState } from "react";
import OwnerLayout from "../../components/OwnerLayout";

const InstructorAvailability = () => {

    const [data, setData] = useState({
        instructor: "",
        status: ""
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data);

        alert("Instructor availability updated");
    };

    return (

        <OwnerLayout>

            <div className="max-w-2xl bg-white shadow-lg rounded-lg p-8">

                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Instructor Availability
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Select Instructor */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Select Instructor
                        </label>

                        <select
                            name="instructor"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            onChange={handleChange}
                        >
                            <option value="">Select Instructor</option>
                            <option value="Rahul">Rahul</option>
                            <option value="Amit">Amit</option>
                            <option value="Sneha">Sneha</option>
                        </select>

                    </div>

                    {/* Availability Status */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Availability Status
                        </label>

                        <select
                            name="status"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            onChange={handleChange}
                        >
                            <option value="">Select Status</option>
                            <option value="AVAILABLE">Available</option>
                            <option value="UNAVAILABLE">Unavailable</option>
                        </select>

                    </div>

                    {/* Submit */}

                    <button
                        className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition"
                    >
                        Update Availability
                    </button>

                </form>

            </div>

        </OwnerLayout>

    );

};

export default InstructorAvailability;