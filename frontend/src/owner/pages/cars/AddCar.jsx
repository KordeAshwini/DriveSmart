import React, { useState } from "react";
import OwnerLayout from "../../components/OwnerLayout";

const AddCar = () => {

    const [car, setCar] = useState({
        model: "",
        number: "",
        type: ""
    });

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(car);

        alert("Car added successfully");
    };

    return (

        <OwnerLayout>

            <div className="max-w-2xl bg-white shadow-lg rounded-lg p-8">

                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Add Car
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Car Model */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Car Model
                        </label>

                        <input
                            name="model"
                            placeholder="Enter car model"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            onChange={handleChange}
                        />

                    </div>

                    {/* Car Number */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Car Number
                        </label>

                        <input
                            name="number"
                            placeholder="Enter car number"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            onChange={handleChange}
                        />

                    </div>

                    {/* Transmission Type */}

                    <div className="flex flex-col">

                        <label className="text-sm font-medium mb-1">
                            Transmission Type
                        </label>

                        <select
                            name="type"
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            onChange={handleChange}
                        >
                            <option value="">Select Type</option>
                            <option value="Manual">Manual</option>
                            <option value="Automatic">Automatic</option>
                        </select>

                    </div>

                    {/* Submit */}

                    <button
                        className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
                    >
                        Add Car
                    </button>

                </form>

            </div>

        </OwnerLayout>

    );

};

export default AddCar;