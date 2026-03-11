// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Car, Menu, X, User, LogIn, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const location = useLocation();

//     // Effect to handle scroll styling
//     useEffect(() => {
//         const handleScroll = () => setIsScrolled(window.scrollY > 20);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Close mobile menu on link click
//     const closeMenu = () => setIsOpen(false);

//     const navLinks = [
//         { name: "Home", path: "/" },
//         { name: "Curriculum", path: "/learning" }, // Referring to Module 3
//         { name: "Schools", path: "/schools" },     // Referring to Module 2
//         { name: "About", path: "/about" },
//     ];

//     return (
//         <nav
//             className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled
//                 ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
//                 : "bg-transparent py-5"
//                 }`}
//         >
//             <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

//                 {/* --- LOGO SECTION --- */}
//                 <Link
//                     to="/"
//                     className="flex items-center gap-2 group"
//                     onClick={closeMenu}
//                 >
//                     <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform duration-300">
//                         <Car size={22} strokeWidth={2.5} />
//                     </div>
//                     <span className="text-xl font-black tracking-tighter text-slate-900">
//                         DriveSmart
//                     </span>
//                 </Link>

//                 {/* --- DESKTOP NAVIGATION --- */}
//                 <div className="hidden md:flex items-center gap-8">
//                     <ul className="flex items-center gap-6">
//                         {navLinks.map((link) => (
//                             <li key={link.name}>
//                                 <Link
//                                     to={link.path}
//                                     className={`text-sm font-bold transition-colors hover:text-indigo-600 ${location.pathname === link.path ? "text-indigo-600" : "text-slate-600"
//                                         }`}
//                                 >
//                                     {link.name}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* Desktop CTA Buttons */}
//                     <div className="flex items-center gap-3 border-l border-slate-200 pl-8 ml-2">
//                         <Link
//                             to=""
//                             className="btn btn-ghost btn-sm normal-case font-bold text-slate-700 hover:bg-slate-100 rounded-lg"
//                         >
//                             Sign In
//                         </Link>

//                         <Link
//                             to="/register"
//                             className="btn btn-primary btn-sm normal-case font-bold shadow-md shadow-indigo-100 rounded-lg"
//                         >
//                             Register <ChevronDown size={14} />
//                         </Link>

//                         {/* <div className="dropdown dropdown-end">
//                             <label
//                                 tabIndex={0}
//                                 className="btn btn-primary btn-sm px-5 rounded-lg normal-case font-bold shadow-md shadow-indigo-100 flex items-center gap-2"
//                             >
//                                 Register <ChevronDown size={14} />
//                             </label>
//                             <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-white rounded-xl w-52 mt-4 border border-slate-50">
//                                 <li className="menu-title text-[10px] uppercase tracking-widest opacity-50">Join the Platform</li>
//                                 <li><Link to="/register?role=student" className="py-3 font-semibold text-sm">As a Student</Link></li>
//                                 <li><Link to="/register?role=owner" className="py-3 font-semibold text-sm">As a School Owner</Link></li>
//                             </ul>
//                         </div> */}
//                     </div>
//                 </div>

//                 {/* --- MOBILE TOGGLE --- */}
//                 <button
//                     className="md:hidden p-2 text-slate-900"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>

//             {/* --- MOBILE MENU --- */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
//                     >
//                         <div className="px-6 py-8 flex flex-col gap-6">
//                             {navLinks.map((link) => (
//                                 <Link
//                                     key={link.name}
//                                     to={link.path}
//                                     onClick={closeMenu}
//                                     className="text-xl font-bold text-slate-800"
//                                 >
//                                     {link.name}
//                                 </Link>
//                             ))}
//                             <hr className="border-slate-100" />
//                             <div className="flex flex-col gap-4">
//                                 <Link
//                                     to="/login"
//                                     onClick={closeMenu}
//                                     className="h-12 flex items-center justify-center font-bold text-slate-600"
//                                 >
//                                     Sign In
//                                 </Link>
//                                 <Link
//                                     to="/register"
//                                     onClick={closeMenu}
//                                     className="h-12 flex items-center justify-center bg-indigo-600 text-white font-bold rounded-xl"
//                                 >
//                                     Register Now
//                                 </Link>
//                             </div>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Car, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AuthContainer from "../../pages/auth/AuthContainer";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [firstName, setFirstName] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    // Check token on page load
    useEffect(() => {


        const token = localStorage.getItem("token");
        const name = localStorage.getItem("name");

        if (token) {
            setIsLoggedIn(true);

            if (name) {
                const first = name?.split(" ")[0];
                setFirstName(first);
            }
        }
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        setIsLoggedIn(false);
        setFirstName("");   // reset name
        navigate("/");
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Curriculum", path: "/curriculum" },
        { name: "Schools", path: "/schools" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                    {/* LOGO */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 group"
                        onClick={closeMenu}
                    >
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform duration-300">
                            <Car size={22} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-slate-900">
                            DriveSmart
                        </span>
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-8">

                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={`text-sm font-bold transition-colors hover:text-indigo-600 ${location.pathname === link.path
                                            ? "text-indigo-600"
                                            : "text-slate-600"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-3 border-l border-slate-200 pl-8 ml-2">

                            {isLoggedIn ? (
                                <div className="flex items-center gap-4">

                                    <span className="text-sm font-bold text-slate-700">
                                        Hi, {firstName}
                                    </span>

                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-ghost btn-sm normal-case font-bold text-red-600 hover:bg-red-50 rounded-lg"
                                    >
                                        Sign Out
                                    </button>

                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsSignInOpen(true)}
                                    className="btn btn-ghost btn-sm normal-case font-bold text-slate-700 hover:bg-slate-100 rounded-lg"
                                >
                                    Sign In
                                </button>
                            )}

                            {!isLoggedIn && (
                                <Link
                                    to="/register"
                                    className="btn btn-primary text-white btn-sm normal-case font-bold shadow-md shadow-indigo-100 rounded-lg"
                                >
                                    Register
                                </Link>
                            )}

                        </div>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="md:hidden p-2 text-slate-900"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* MOBILE MENU */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                        >
                            <div className="px-6 py-8 flex flex-col gap-6">

                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={closeMenu}
                                        className="text-xl font-bold text-slate-800"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <hr className="border-slate-100" />

                                <div className="flex flex-col gap-4">

                                    {isLoggedIn ? (
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                closeMenu();
                                            }}
                                            className="h-12 flex items-center justify-center font-bold text-red-600"
                                        >
                                            Sign Out
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => {
                                                    setIsSignInOpen(true);
                                                    closeMenu();
                                                }}
                                                className="h-12 flex items-center justify-center font-bold text-slate-600"
                                            >
                                                Sign In
                                            </button>

                                            <Link
                                                to="/register"
                                                onClick={closeMenu}
                                                className="h-12 flex items-center justify-center bg-indigo-600 text-white font-bold rounded-xl"
                                            >
                                                Register Now
                                            </Link>
                                        </>
                                    )}

                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </nav>

            {/* Auth Modals */}
            <AuthContainer
                isSignInOpen={isSignInOpen}
                setIsSignInOpen={setIsSignInOpen}
                setIsLoggedIn={setIsLoggedIn}
                setFirstName={setFirstName}
            />
        </>
    );
};

export default Navbar;