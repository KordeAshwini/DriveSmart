import React from "react";
import OwnerLayout from "../components/OwnerLayout";

const ViewBookings = () => {

    const bookings = [
        { student: "Rahul", instructor: "Amit", date: "12 Mar" },
        { student: "Sneha", instructor: "Raj", date: "14 Mar" }
    ];

    return (
        <OwnerLayout>

            <div className="p-6">

                <h2 className="text-xl font-bold mb-4">
                    Bookings
                </h2>

                <table className="w-full border">

                    <thead>
                        <tr className="bg-gray-200">
                            <th>Student</th>
                            <th>Instructor</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>

                        {bookings.map((b, i) => (
                            <tr key={i}>
                                <td>{b.student}</td>
                                <td>{b.instructor}</td>
                                <td>{b.date}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
        </OwnerLayout>

    );

};

export default ViewBookings;