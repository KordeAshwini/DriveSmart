import React from "react";
import OwnerLayout from "../components/OwnerLayout";
import StatsCard from "../components/StatsCard";
import BookingTable from "../components/BookingTable";

const OwnerDashboard = () => {

    return (

        <OwnerLayout>

            {/* Stats */}

            <div className="grid grid-cols-4 gap-6 mb-8">

                <StatsCard
                    title="Total Instructors"
                    value="12"
                    color="bg-blue-500"
                />

                <StatsCard
                    title="Total Cars"
                    value="8"
                    color="bg-green-500"
                />

                <StatsCard
                    title="Active Bookings"
                    value="25"
                    color="bg-purple-500"
                />

                <StatsCard
                    title="Revenue"
                    value="₹45,000"
                    color="bg-orange-500"
                />

            </div>

            {/* Charts Section */}

            <div className="grid grid-cols-2 gap-6 mb-8">

                <div className="bg-white p-5 rounded shadow">

                    <h3 className="font-semibold mb-4">
                        Monthly Bookings
                    </h3>

                    <div className="h-40 flex items-center justify-center text-gray-400">
                        Chart Area
                    </div>

                </div>

                <div className="bg-white p-5 rounded shadow">

                    <h3 className="font-semibold mb-4">
                        Revenue Overview
                    </h3>

                    <div className="h-40 flex items-center justify-center text-gray-400">
                        Chart Area
                    </div>

                </div>

            </div>

            {/* Booking Table */}

            <BookingTable />

        </OwnerLayout>

    );
};

export default OwnerDashboard;