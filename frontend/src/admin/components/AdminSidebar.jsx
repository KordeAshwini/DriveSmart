// import React from "react";
// import { Link } from "react-router-dom";
// import {
//     LayoutDashboard,
//     Users,
//     School,
//     BarChart3,
//     LogOut
// } from "lucide-react";

// const AdminSidebar = () => {

//     const logout = () => {
//         localStorage.clear();
//         window.location.href = "/";
//     };

//     return (

//         <div className="w-64 h-screen bg-slate-900 text-white flex flex-col">

//             <div className="p-6 text-xl font-bold border-b border-slate-700">
//                 DriveSmart
//             </div>

//             <nav className="flex-1 p-4 space-y-3">

//                 <Link
//                     to="/admin/dashboard"
//                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
//                 >
//                     <LayoutDashboard size={18} />
//                     Dashboard
//                 </Link>

//                 <Link
//                     to="/admin/schools"
//                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
//                 >
//                     <School size={18} />
//                     Driving Schools
//                 </Link>

//                 <Link
//                     to="/admin/users"
//                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
//                 >
//                     <Users size={18} />
//                     Users
//                 </Link>

//                 <Link
//                     to="/admin/analytics"
//                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
//                 >
//                     <BarChart3 size={18} />
//                     Analytics
//                 </Link>

//                 <Link
//                     to="/"
//                     className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
//                 >
//                     {/* <Home size={18} /> */}
//                     Go to Home
//                 </Link>

//             </nav>

//             <button
//                 onClick={logout}
//                 className="m-4 flex items-center gap-3 p-3 bg-red-500 rounded-lg"
//             >
//                 <LogOut size={18} />
//                 Logout
//             </button>

//         </div>

//     );
// };

// export default AdminSidebar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    School,
    BarChart3,
    Settings,
    Home,
    Menu,
    LogOut
} from "lucide-react";

const AdminSidebar = () => {

    const [collapsed, setCollapsed] = useState(false);

    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (

        <div className={`h-screen bg-slate-900 text-white transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>

            <div className="flex items-center justify-between p-4 border-b border-slate-700">

                {!collapsed && <h2 className="font-bold text-lg">DriveSmart</h2>}

                <button onClick={() => setCollapsed(!collapsed)}>
                    <Menu size={20} />
                </button>

            </div>

            <nav className="p-3 space-y-3">

                <Link to="/admin/dashboard" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded">
                    <LayoutDashboard size={18} />
                    {!collapsed && "Dashboard"}
                </Link>

                <Link to="/admin/schools" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded">
                    <School size={18} />
                    {!collapsed && "Approve Schools"}
                </Link>

                <Link to="/admin/deactivate-schools" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded">
                    <School size={18} />
                    {!collapsed && "Deactivate Schools"}
                </Link>

                <Link to="/admin/users" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded">
                    <Users size={18} />
                    {!collapsed && "Users"}
                </Link>

                <Link to="/admin/default-slots" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded">
                    <Settings size={18} />
                    {!collapsed && "Default Slots"}
                </Link>

                <Link to="/admin/commission" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded">
                    <Settings size={18} />
                    {!collapsed && "Commission"}
                </Link>

                <Link to="/admin/analytics" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded">
                    <BarChart3 size={18} />
                    {!collapsed && "Analytics"}
                </Link>

                <Link to="/" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded">
                    <Home size={18} />
                    {!collapsed && "Go Home"}
                </Link>

            </nav>

            <button
                onClick={logout}
                className="absolute bottom-4 left-4 flex items-center gap-2 bg-red-500 px-3 py-2 rounded"
            >
                <LogOut size={18} />
                {!collapsed && "Logout"}
            </button>

        </div>
    );
};

export default AdminSidebar;