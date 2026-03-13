import React from "react";
import OwnerLayout from "../components/OwnerLayout";

const PendingApproval = () => {

    return (

        <OwnerLayout>

            <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-xl">

                <h2 className="text-2xl font-bold text-yellow-600 mb-4">
                    School Approval Pending
                </h2>

                <p className="text-gray-600">
                    Your school registration is under review by admin.
                </p>

                <p className="text-gray-600 mt-2">
                    Once approved, you will be able to manage instructors,
                    cars, bookings and other features.
                </p>

            </div>

        </OwnerLayout>

    );
};

export default PendingApproval;