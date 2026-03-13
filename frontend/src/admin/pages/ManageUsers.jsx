import React from "react";
import AdminLayout from "../AdminLayout";

const ManageUsers = () => {

    return (

        <AdminLayout>

            <h2 className="text-2xl font-bold mb-6">Manage Users</h2>

            <div className="bg-white rounded-xl shadow p-6">

                <table className="w-full text-left">

                    <thead className="border-b">

                        <tr>
                            <th className="py-2">Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b">
                            <td className="py-3">Rahul Sharma</td>
                            <td>rahul@gmail.com</td>
                            <td>USER</td>
                            <td className="text-green-600">Active</td>
                        </tr>

                        <tr className="border-b">
                            <td className="py-3">Priya Patel</td>
                            <td>priya@gmail.com</td>
                            <td>OWNER</td>
                            <td className="text-green-600">Active</td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </AdminLayout>

    );
};

export default ManageUsers;