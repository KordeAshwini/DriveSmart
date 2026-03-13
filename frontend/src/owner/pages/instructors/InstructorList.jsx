import React, { useState } from "react";
import OwnerLayout from "../../components/OwnerLayout";

const InstructorList = () => {

    const [instructors, setInstructors] = useState([
        { id: 1, name: "Rahul", phone: "9876543210", experience: "5 years" },
        { id: 2, name: "Amit", phone: "9876541230", experience: "3 years" }
    ]);

    const deleteInstructor = (id) => {
        setInstructors(instructors.filter(i => i.id !== id));
    };

    return (

        <OwnerLayout>

            <h2 className="text-2xl font-bold mb-6">Instructor List</h2>

            <div className="bg-white shadow rounded p-5">

                <table className="w-full text-left">

                    <thead className="border-b">

                        <tr>
                            <th className="p-2">Name</th>
                            <th className="p-2">Phone</th>
                            <th className="p-2">Experience</th>
                            <th className="p-2">Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {instructors.map(i => (

                            <tr key={i.id} className="border-b">

                                <td className="p-2">{i.name}</td>
                                <td className="p-2">{i.phone}</td>
                                <td className="p-2">{i.experience}</td>

                                <td className="p-2 space-x-2">

                                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteInstructor(i.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </OwnerLayout>

    );

};

export default InstructorList;