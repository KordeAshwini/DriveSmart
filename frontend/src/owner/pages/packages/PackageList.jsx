import React, { useState } from "react";
import OwnerLayout from "../../components/OwnerLayout";

const PackageList = () => {

    const [packages, setPackages] = useState([
        { id: 1, name: "Beginner", sessions: 10, price: 3000 },
        { id: 2, name: "Advanced", sessions: 20, price: 5000 }
    ]);

    const deletePackage = (id) => {
        setPackages(packages.filter(p => p.id !== id));
    };

    return (

        <OwnerLayout>

            <h2 className="text-2xl font-bold mb-6">Learning Packages</h2>

            <div className="bg-white shadow rounded p-5">

                <table className="w-full text-left">

                    <thead className="border-b">

                        <tr>
                            <th className="p-2">Package Name</th>
                            <th className="p-2">Sessions</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {packages.map(p => (

                            <tr key={p.id} className="border-b">

                                <td className="p-2">{p.name}</td>
                                <td className="p-2">{p.sessions}</td>
                                <td className="p-2">₹{p.price}</td>

                                <td className="p-2 space-x-2">

                                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deletePackage(p.id)}
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

export default PackageList;