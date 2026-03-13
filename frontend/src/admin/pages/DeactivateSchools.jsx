import React from "react";
import AdminLayout from "../AdminLayout";

const DeactivateSchools = () => {

    return (

        <AdminLayout>

            <h2 className="text-2xl font-bold mb-6">
                Deactivate Driving Schools
            </h2>

            <div className="bg-white p-6 rounded-xl shadow">

                <table className="w-full">

                    <thead className="border-b">

                        <tr>
                            <th>School</th>
                            <th>Owner</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b">

                            <td>SafeDrive Academy</td>
                            <td>Amit Sharma</td>
                            <td className="text-green-600">Active</td>

                            <td>
                                <button className="bg-red-500 text-white px-3 py-1 rounded">
                                    Deactivate
                                </button>
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </AdminLayout>

    );
};

export default DeactivateSchools;