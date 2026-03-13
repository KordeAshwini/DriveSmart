import React, { useState } from "react";
import OwnerLayout from "../../components/OwnerLayout";

const CarList = () => {

    const [cars, setCars] = useState([
        { id: 1, model: "Swift", number: "MH12AB1234", type: "Manual" },
        { id: 2, model: "i20", number: "MH14XY5678", type: "Automatic" }
    ]);

    const deleteCar = (id) => {
        setCars(cars.filter(c => c.id !== id));
    };

    return (

        <OwnerLayout>

            <h2 className="text-2xl font-bold mb-6">Car List</h2>

            <div className="bg-white shadow rounded p-5">

                <table className="w-full text-left">

                    <thead className="border-b">

                        <tr>
                            <th className="p-2">Model</th>
                            <th className="p-2">Car Number</th>
                            <th className="p-2">Type</th>
                            <th className="p-2">Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {cars.map(c => (

                            <tr key={c.id} className="border-b">

                                <td className="p-2">{c.model}</td>
                                <td className="p-2">{c.number}</td>
                                <td className="p-2">{c.type}</td>

                                <td className="p-2 space-x-2">

                                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteCar(c.id)}
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

export default CarList;