import React, { useState } from "react";
import OwnerLayout from "../../components/OwnerLayout";

const AddInstructor = () => {

    const [instructor, setInstructor] = useState({
        name: "",
        phone: "",
        experience: ""
    });

    const handleChange = (e) => {
        setInstructor({ ...instructor, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(instructor);

        alert("Instructor added successfully");
    };

    return (

        <OwnerLayout>

            <div className="max-w-2xl bg-white shadow-lg rounded-lg p-8">

                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Add Instructor
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Instructor Name */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Instructor Name
                        </label>

                        <input
                            name="name"
                            placeholder="Enter instructor name"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />

                    </div>

                    {/* Phone */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Phone Number
                        </label>

                        <input
                            name="phone"
                            placeholder="Enter phone number"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />

                    </div>

                    {/* Experience */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Experience (Years)
                        </label>

                        <input
                            name="experience"
                            placeholder="Enter years of experience"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />

                    </div>

                    {/* Submit */}

                    <button
                        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
                    >
                        Add Instructor
                    </button>

                </form>

            </div>

        </OwnerLayout>

    );

};

export default AddInstructor;