import React from "react";

const BookingTable = () => {

    const bookings = [
        { id: 1, student: "Rahul", instructor: "Amit", date: "12 Mar" },
        { id: 2, student: "Sneha", instructor: "Raj", date: "13 Mar" },
        { id: 3, student: "Karan", instructor: "Vijay", date: "14 Mar" },
    ];

    return (
        <div className="bg-white shadow rounded p-5">

            <h2 className="text-lg font-semibold mb-4">
                Recent Bookings
            </h2>

            <table className="w-full text-left">

                <thead>

                    <tr className="border-b">

                        <th className="p-2">Student</th>
                        <th className="p-2">Instructor</th>
                        <th className="p-2">Date</th>

                    </tr>

                </thead>

                <tbody>

                    {bookings.map((b) => (
                        <tr key={b.id} className="border-b">

                            <td className="p-2">{b.student}</td>
                            <td className="p-2">{b.instructor}</td>
                            <td className="p-2">{b.date}</td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default BookingTable;