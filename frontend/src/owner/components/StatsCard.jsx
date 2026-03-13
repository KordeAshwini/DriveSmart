import React from "react";

const StatsCard = ({ title, value, color }) => {
    return (

        <div className={`p-5 rounded shadow text-white ${color}`}>

            <h3 className="text-sm">{title}</h3>

            <p className="text-2xl font-bold mt-2">
                {value}
            </p>

        </div>

    );
};

export default StatsCard;