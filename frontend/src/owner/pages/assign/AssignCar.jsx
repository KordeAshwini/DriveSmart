import React, { useState } from "react";
import OwnerLayout from "../../components/OwnerLayout";

const AssignCar = () => {

    const [assignment, setAssignment] = useState({
        instructor: "",
        car: ""
    });

    const handleChange = (e) => {
        setAssignment({ ...assignment, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(assignment);

        alert("Car assigned to instructor successfully");
    };

    return (

        <OwnerLayout>

            <div className="max-w-2xl bg-white shadow-lg rounded-lg p-8">

                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Assign Car to Instructor
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Instructor */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Select Instructor
                        </label>

                        <select
                            name="instructor"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            onChange={handleChange}
                        >
                            <option value="">Select Instructor</option>
                            <option value="Rahul">Rahul</option>
                            <option value="Amit">Amit</option>
                            <option value="Sneha">Sneha</option>
                        </select>

                    </div>

                    {/* Car */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Select Car
                        </label>

                        <select
                            name="car"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            onChange={handleChange}
                        >
                            <option value="">Select Car</option>
                            <option value="Swift MH12AB1234">
                                Swift MH12AB1234
                            </option>
                            <option value="i20 MH14XY5678">
                                i20 MH14XY5678
                            </option>
                        </select>

                    </div>

                    {/* Submit */}

                    <button
                        className="bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition"
                    >
                        Assign Car
                    </button>

                </form>

            </div>

        </OwnerLayout>

    );

};

export default AssignCar;