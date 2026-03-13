// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//     LayoutDashboard,
//     Car,
//     User,
//     Package,
//     Calendar,
//     CreditCard,
//     ChevronDown
// } from "lucide-react";

// const OwnerSidebar = () => {

//     const schoolStatus = localStorage.getItem("schoolStatus");
//     const isApproved = schoolStatus === "APPROVED";

//     const location = useLocation();

//     const [openMenu, setOpenMenu] = useState("");

//     const toggleMenu = (menu) => {
//         setOpenMenu(openMenu === menu ? "" : menu);
//     };

//     const linkClass = (path) =>
//         location.pathname === path
//             ? "text-blue-400"
//             : "text-gray-200 hover:text-white";

//     const disabledClass = "opacity-40 cursor-not-allowed";

//     return (
//         <div className="w-64 h-screen bg-gray-900 text-white p-5 overflow-y-auto">

//             <h2 className="text-2xl font-bold mb-8">DriveSmart</h2>

//             <ul className="space-y-4">

//                 {/* Register School */}

//                 <li>
//                     <Link
//                         to="/owner/register-school"
//                         className={linkClass("/owner/register-school")}
//                     >
//                         Register School
//                     </Link>
//                 </li>

//                 {/* Dashboard */}

//                 <li>
//                     <Link
//                         to="/owner/dashboard"
//                         className={`flex items-center gap-2 ${linkClass("/owner/dashboard")}`}
//                     >
//                         <LayoutDashboard size={18} />
//                         Dashboard
//                     </Link>
//                 </li>

//                 {/* Instructors */}

//                 <li className={!isApproved ? disabledClass : ""}>

//                     <button
//                         onClick={() => toggleMenu("instructors")}
//                         className="flex justify-between w-full items-center"
//                     >
//                         <span className="flex items-center gap-2">
//                             <User size={18} />
//                             Instructors
//                         </span>

//                         <ChevronDown size={16} />
//                     </button>

//                     {openMenu === "instructors" && (
//                         <ul className="ml-6 mt-2 space-y-2">

//                             {isApproved ? (
//                                 <>
//                                     <li>
//                                         <Link
//                                             to="/owner/add-instructor"
//                                             className={linkClass("/owner/add-instructor")}
//                                         >
//                                             Add Instructor
//                                         </Link>
//                                     </li>

//                                     <li>
//                                         <Link
//                                             to="/owner/instructor-list"
//                                             className={linkClass("/owner/instructor-list")}
//                                         >
//                                             Instructor List
//                                         </Link>
//                                     </li>

//                                     <li>
//                                         <Link
//                                             to="/owner/instructor-availability"
//                                             className={linkClass("/owner/instructor-availability")}
//                                         >
//                                             Instructor Availability
//                                         </Link>
//                                     </li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li>Add Instructor</li>
//                                     <li>Instructor List</li>
//                                     <li>Instructor Availability</li>
//                                 </>
//                             )}

//                         </ul>
//                     )}
//                 </li>

//                 {/* Cars */}

//                 <li className={!isApproved ? disabledClass : ""}>

//                     <button
//                         onClick={() => toggleMenu("cars")}
//                         className="flex justify-between w-full items-center"
//                     >
//                         <span className="flex items-center gap-2">
//                             <Car size={18} />
//                             Cars
//                         </span>

//                         <ChevronDown size={16} />
//                     </button>

//                     {openMenu === "cars" && (
//                         <ul className="ml-6 mt-2 space-y-2">

//                             {isApproved ? (
//                                 <>
//                                     <li>
//                                         <Link
//                                             to="/owner/add-car"
//                                             className={linkClass("/owner/add-car")}
//                                         >
//                                             Add Car
//                                         </Link>
//                                     </li>

//                                     <li>
//                                         <Link
//                                             to="/owner/car-list"
//                                             className={linkClass("/owner/car-list")}
//                                         >
//                                             Car List
//                                         </Link>
//                                     </li>

//                                     <li>
//                                         <Link
//                                             to="/owner/assign-car"
//                                             className={linkClass("/owner/assign-car")}
//                                         >
//                                             Assign Car
//                                         </Link>
//                                     </li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li>Add Car</li>
//                                     <li>Car List</li>
//                                     <li>Assign Car</li>
//                                 </>
//                             )}

//                         </ul>
//                     )}
//                 </li>

//                 {/* Packages */}

//                 <li className={!isApproved ? disabledClass : ""}>

//                     <button
//                         onClick={() => toggleMenu("packages")}
//                         className="flex justify-between w-full items-center"
//                     >
//                         <span className="flex items-center gap-2">
//                             <Package size={18} />
//                             Packages
//                         </span>

//                         <ChevronDown size={16} />
//                     </button>

//                     {openMenu === "packages" && (
//                         <ul className="ml-6 mt-2 space-y-2">

//                             {isApproved ? (
//                                 <>
//                                     <li>
//                                         <Link
//                                             to="/owner/create-package"
//                                             className={linkClass("/owner/create-package")}
//                                         >
//                                             Create Package
//                                         </Link>
//                                     </li>

//                                     <li>
//                                         <Link
//                                             to="/owner/package-list"
//                                             className={linkClass("/owner/package-list")}
//                                         >
//                                             Package List
//                                         </Link>
//                                     </li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li>Create Package</li>
//                                     <li>Package List</li>
//                                 </>
//                             )}

//                         </ul>
//                     )}
//                 </li>

//                 {/* Bookings */}

//                 <li className={!isApproved ? disabledClass : ""}>
//                     {isApproved ? (
//                         <Link
//                             to="/owner/bookings"
//                             className={`flex items-center gap-2 ${linkClass("/owner/bookings")}`}
//                         >
//                             <Calendar size={18} />
//                             Bookings
//                         </Link>
//                     ) : (
//                         <span className="flex items-center gap-2">
//                             <Calendar size={18} />
//                             Bookings
//                         </span>
//                     )}
//                 </li>

//                 {/* Payments */}

//                 <li className={!isApproved ? disabledClass : ""}>
//                     {isApproved ? (
//                         <Link
//                             to="/owner/payments"
//                             className={`flex items-center gap-2 ${linkClass("/owner/payments")}`}
//                         >
//                             <CreditCard size={18} />
//                             Payments
//                         </Link>
//                     ) : (
//                         <span className="flex items-center gap-2">
//                             <CreditCard size={18} />
//                             Payments
//                         </span>
//                     )}
//                 </li>

//             </ul>

//             {schoolStatus === "PENDING" && (
//                 <div className="mt-6 text-sm text-yellow-400">
//                     School approval pending...
//                 </div>
//             )}

//         </div>
//     );
// };

// export default OwnerSidebar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Car,
    User,
    Package,
    Menu,
    Calendar,
    CreditCard,
    ChevronDown
} from "lucide-react";

const OwnerSidebar = () => {

    const schoolStatus = localStorage.getItem("schoolStatus");
    const isApproved = schoolStatus === "APPROVED";

    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const linkClass = (path) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg transition ${location.pathname === path
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }`;

    const disabledClass = "opacity-40 cursor-not-allowed";

    return (
        <div
            className={`h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 ${collapsed ? "w-16" : "w-64"
                }`}
        >

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">

                {!collapsed && (
                    <h2 className="text-lg font-semibold tracking-wide">
                        DriveSmart
                    </h2>
                )}

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1 hover:bg-gray-700 rounded"
                >
                    <Menu size={20} />
                </button>

            </div>

            {/* Menu */}
            <ul className="flex-1 p-3 space-y-2 text-sm">

                {/* Dashboard */}
                <li title="Dashboard">
                    <Link to="/owner/dashboard" className={linkClass("/owner/dashboard")}>
                        <LayoutDashboard size={18} />
                        {!collapsed && "Dashboard"}
                    </Link>
                </li>

                {/* Register School */}
                <li title="Register School">
                    <Link
                        to="/owner/register-school"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                        <User size={18} />
                        {!collapsed && "Register School"}
                    </Link>
                </li>

                {/* Instructors */}
                <li className={!isApproved ? disabledClass : ""}>

                    <button
                        onClick={() => toggleMenu("instructors")}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-800"
                    >
                        <span className="flex items-center gap-3">
                            <User size={18} />
                            {!collapsed && "Instructors"}
                        </span>

                        {!collapsed && (
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${openMenu === "instructors" ? "rotate-180" : ""
                                    }`}
                            />
                        )}
                    </button>

                    {!collapsed && openMenu === "instructors" && (
                        <ul className="ml-7 mt-2 space-y-1 text-sm text-gray-300">

                            {isApproved ? (
                                <>
                                    <li>
                                        <Link to="/owner/add-instructor" className="block hover:text-white">
                                            Add Instructor
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/owner/instructor-list" className="block hover:text-white">
                                            Instructor List
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/owner/instructor-availability" className="block hover:text-white">
                                            Instructor Availability
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>Add Instructor</li>
                                    <li>Instructor List</li>
                                    <li>Instructor Availability</li>
                                </>
                            )}

                        </ul>
                    )}

                </li>

                {/* Cars */}
                <li className={!isApproved ? disabledClass : ""}>

                    <button
                        onClick={() => toggleMenu("cars")}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-800"
                    >
                        <span className="flex items-center gap-3">
                            <Car size={18} />
                            {!collapsed && "Cars"}
                        </span>

                        {!collapsed && (
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${openMenu === "cars" ? "rotate-180" : ""
                                    }`}
                            />
                        )}

                    </button>

                    {!collapsed && openMenu === "cars" && (
                        <ul className="ml-7 mt-2 space-y-1 text-gray-300">

                            <li>
                                <Link to="/owner/add-car" className="hover:text-white">
                                    Add Car
                                </Link>
                            </li>

                            <li>
                                <Link to="/owner/car-list" className="hover:text-white">
                                    Car List
                                </Link>
                            </li>

                            <li>
                                <Link to="/owner/assign-car" className="hover:text-white">
                                    Assign Car
                                </Link>
                            </li>

                        </ul>
                    )}

                </li>

                {/* Packages */}
                <li className={!isApproved ? disabledClass : ""}>

                    <button
                        onClick={() => toggleMenu("packages")}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-800"
                    >
                        <span className="flex items-center gap-3">
                            <Package size={18} />
                            {!collapsed && "Packages"}
                        </span>

                        {!collapsed && (
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${openMenu === "packages" ? "rotate-180" : ""
                                    }`}
                            />
                        )}

                    </button>

                    {!collapsed && openMenu === "packages" && (
                        <ul className="ml-7 mt-2 space-y-1 text-gray-300">

                            <li>
                                <Link to="/owner/create-package" className="hover:text-white">
                                    Create Package
                                </Link>
                            </li>

                            <li>
                                <Link to="/owner/package-list" className="hover:text-white">
                                    Package List
                                </Link>
                            </li>

                        </ul>
                    )}

                </li>

                {/* Bookings */}
                <li className={!isApproved ? disabledClass : ""}>
                    <Link
                        to="/owner/bookings"
                        className={linkClass("/owner/bookings")}
                    >
                        <Calendar size={18} />
                        {!collapsed && "Bookings"}
                    </Link>
                </li>

                {/* Payments */}
                <li className={!isApproved ? disabledClass : ""}>
                    <Link
                        to="/owner/payments"
                        className={linkClass("/owner/payments")}
                    >
                        <CreditCard size={18} />
                        {!collapsed && "Payments"}
                    </Link>
                </li>

            </ul>

            {/* Footer Status */}
            {schoolStatus === "PENDING" && !collapsed && (
                <div className="p-4 text-xs text-yellow-400 border-t border-gray-700">
                    School approval pending...
                </div>
            )}

        </div>
    );
};

export default OwnerSidebar;