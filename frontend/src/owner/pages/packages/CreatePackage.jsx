import React, { useState } from "react";
import OwnerLayout from "../../components/OwnerLayout";

const CreatePackage = () => {

    const [pkg, setPkg] = useState({
        name: "",
        sessions: "",
        price: ""
    });

    const handleChange = (e) => {
        setPkg({ ...pkg, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(pkg);

        alert("Learning package created successfully");
    };

    return (

        <OwnerLayout>

            <div className="max-w-2xl bg-white shadow-lg rounded-lg p-8">

                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Create Learning Package
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Package Name */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Package Name
                        </label>

                        <input
                            name="name"
                            placeholder="Enter package name"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />

                    </div>

                    {/* Session Count */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Number of Sessions
                        </label>

                        <input
                            name="sessions"
                            type="number"
                            placeholder="Enter session count"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />

                    </div>

                    {/* Price */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Package Price
                        </label>

                        <input
                            name="price"
                            type="number"
                            placeholder="Enter package price"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />

                    </div>

                    {/* Submit */}

                    <button
                        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
                    >
                        Create Package
                    </button>

                </form>

            </div>

        </OwnerLayout>

    );

};

export default CreatePackage;