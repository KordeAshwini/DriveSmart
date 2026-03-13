import React from "react";
import AdminLayout from "../AdminLayout";

const SchoolsApproval = () => {

    return (

        <AdminLayout>

            <h2 className="text-2xl font-bold mb-6">
                Driving School Approvals
            </h2>

            <div className="bg-white rounded-xl shadow p-6">

                <table className="w-full text-left">

                    <thead className="border-b">

                        <tr>
                            <th className="py-2">School Name</th>
                            <th>Owner</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b">

                            <td className="py-3">SafeDrive Academy</td>
                            <td>Amit Sharma</td>
                            <td>Pune</td>

                            <td className="flex gap-2">

                                <button className="bg-green-500 text-white px-3 py-1 rounded">
                                    Approve
                                </button>

                                <button className="bg-red-500 text-white px-3 py-1 rounded">
                                    Reject
                                </button>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </AdminLayout>

    );
};

export default SchoolsApproval;