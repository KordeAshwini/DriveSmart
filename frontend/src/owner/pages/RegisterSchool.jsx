import React, { useState } from "react";
import OwnerLayout from "../components/OwnerLayout";

const RegisterSchool = () => {

    const [school, setSchool] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        licenseNumber: "",
        experienceYears: "",
        totalCars: "",
        totalInstructors: ""
    });

    const handleChange = (e) => {
        setSchool({
            ...school,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        Object.keys(school).forEach((key) => {
            formData.append(key, school[key]);
        });

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                "http://localhost:8080/api/schools/register",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: formData
                }
            );

            if (!response.ok) {
                throw new Error("Request failed");
            }

            alert("School Registered Successfully");

        } catch (error) {
            console.error(error);
            alert("Registration failed");
        }
    };

    return (

        <OwnerLayout>

            <div className="bg-gray-100 min-h-screen flex justify-center p-8">

                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">

                    <h2 className="text-2xl font-bold mb-6">
                        Register Driving School
                    </h2>

                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">

                        <input name="name" placeholder="School Name" value={school.name} onChange={handleChange} className="border p-2" />

                        <input name="phone" placeholder="Phone" value={school.phone} onChange={handleChange} className="border p-2" />

                        <input name="address" placeholder="Address" value={school.address} onChange={handleChange} className="border p-2 col-span-2" />

                        <input name="city" placeholder="City" value={school.city} onChange={handleChange} className="border p-2" />

                        <input name="state" placeholder="State" value={school.state} onChange={handleChange} className="border p-2" />

                        <input name="pincode" placeholder="Pincode" value={school.pincode} onChange={handleChange} className="border p-2" />

                        <input name="licenseNumber" placeholder="License Number" value={school.licenseNumber} onChange={handleChange} className="border p-2" />

                        <input type="number" name="experienceYears" placeholder="Experience Years" value={school.experienceYears} onChange={handleChange} className="border p-2" />

                        <input type="number" name="totalCars" placeholder="Total Cars" value={school.totalCars} onChange={handleChange} className="border p-2" />

                        <input type="number" name="totalInstructors" placeholder="Total Instructors" value={school.totalInstructors} onChange={handleChange} className="border p-2" />

                        <button className="bg-blue-600 text-white p-3 col-span-2 rounded">
                            Register School
                        </button>

                    </form>

                </div>

            </div>

        </OwnerLayout>
    );
};

export default RegisterSchool;