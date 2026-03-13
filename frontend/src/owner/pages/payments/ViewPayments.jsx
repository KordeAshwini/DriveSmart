import React from "react";
import OwnerLayout from "../components/OwnerLayout";
const ViewPayments = () => {

    const payments = [
        { student: "Rahul", amount: "2000" },
        { student: "Sneha", amount: "3500" }
    ];

    return (
        <OwnerLayout>

            <div className="p-6">

                <h2 className="text-xl font-bold mb-4">
                    Payment Transactions
                </h2>

                <table className="w-full border">

                    <thead>
                        <tr className="bg-gray-200">
                            <th>Student</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>

                        {payments.map((p, i) => (
                            <tr key={i}>
                                <td>{p.student}</td>
                                <td>{p.amount}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
        </OwnerLayout>

    );

};

export default ViewPayments;