// import React from "react";
// import { motion } from "framer-motion";
// import { X, Mail, Lock, ArrowRight } from "lucide-react";

// const SignIn = ({ isOpen, onClose, onSwitchToForgot }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-slate-100"
//             >
//                 <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"><X size={24} /></button>

//                 <h2 className="text-3xl font-black tracking-tight mb-2">Welcome Back</h2>
//                 <p className="text-slate-500 text-sm mb-8">Access your DriveSmart portal</p>

//                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//                     <div className="space-y-1">
//                         <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Email Address</label>
//                         <div className="relative">
//                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//                             <input type="email" placeholder="john@example.com" className="input input-bordered w-full pl-12 bg-slate-50 border-slate-100 rounded-xl focus:outline-indigo-600 h-12" />
//                         </div>
//                     </div>

//                     <div className="space-y-1">
//                         <div className="flex justify-between items-center">
//                             <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Password</label>
//                             <button onClick={onSwitchToForgot} className="text-[10px] font-bold text-indigo-600 hover:underline">Forgot?</button>
//                         </div>
//                         <div className="relative">
//                             <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//                             <input type="password" placeholder="••••••••" className="input input-bordered w-full pl-12 bg-slate-50 border-slate-100 rounded-xl focus:outline-indigo-600 h-12" />
//                         </div>
//                     </div>

//                     <button className="btn btn-primary w-full h-12 rounded-xl normal-case font-bold shadow-lg shadow-indigo-100 border-none mt-4">
//                         Sign In <ArrowRight size={18} className="ml-2" />
//                     </button>
//                 </form>
//             </motion.div>
//         </div>
//     );
// };

// export default SignIn;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { X, Mail, Lock, ArrowRight } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SignIn = ({ isOpen, onClose, onSwitchToForgot }) => {

//     const navigate = useNavigate();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);

//     if (!isOpen) return null;

//     const handleLogin = async (e) => {

//         e.preventDefault();

//         try {

//             setLoading(true);

//             const res = await axios.post(
//                 "http://localhost:8080/api/auth/login",
//                 {
//                     email: email,
//                     password: password
//                 }
//             );

//             const token = res.data.token;

//             // store JWT token
//             localStorage.setItem("token", token);

//             alert("Login Successful");

//             onClose();

//             // redirect to home page
//             navigate("/");

//         } catch (err) {

//             alert("Invalid email or password");

//         } finally {

//             setLoading(false);

//         }
//     };

//     return (
//         <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">

//             <motion.div
//                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-slate-100"
//             >

//                 <button
//                     onClick={onClose}
//                     className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"
//                 >
//                     <X size={24} />
//                 </button>

//                 <h2 className="text-3xl font-black tracking-tight mb-2">
//                     Welcome Back
//                 </h2>

//                 <p className="text-slate-500 text-sm mb-8">
//                     Access your DriveSmart portal
//                 </p>

//                 <form className="space-y-4" onSubmit={handleLogin}>

//                     {/* EMAIL */}
//                     <div className="space-y-1">

//                         <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
//                             Email Address
//                         </label>

//                         <div className="relative">

//                             <Mail
//                                 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                                 size={18}
//                             />

//                             <input
//                                 type="email"
//                                 placeholder="john@example.com"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="input input-bordered w-full pl-12 bg-slate-50 border-slate-100 rounded-xl focus:outline-indigo-600 h-12"
//                             />

//                         </div>

//                     </div>

//                     {/* PASSWORD */}
//                     <div className="space-y-1">

//                         <div className="flex justify-between items-center">

//                             <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
//                                 Password
//                             </label>

//                             <button
//                                 type="button"
//                                 onClick={onSwitchToForgot}
//                                 className="text-[10px] font-bold text-indigo-600 hover:underline"
//                             >
//                                 Forgot?
//                             </button>

//                         </div>

//                         <div className="relative">

//                             <Lock
//                                 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                                 size={18}
//                             />

//                             <input
//                                 type="password"
//                                 placeholder="••••••••"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="input input-bordered w-full pl-12 bg-slate-50 border-slate-100 rounded-xl focus:outline-indigo-600 h-12"
//                             />

//                         </div>

//                     </div>

//                     {/* LOGIN BUTTON */}
//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="btn btn-primary w-full h-12 rounded-xl normal-case font-bold shadow-lg shadow-indigo-100 border-none mt-4"
//                     >
//                         {loading ? "Signing In..." : "Sign In"}
//                         <ArrowRight size={18} className="ml-2" />
//                     </button>

//                 </form>

//             </motion.div>

//         </div>
//     );
// };

// export default SignIn;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Mail, Lock, ArrowRight } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = ({ isOpen, onClose, onSwitchToForgot, setIsLoggedIn, setFirstName }) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const res = await axios.post(
                "http://localhost:8080/api/auth/login",
                {
                    email: email,
                    password: password
                }
            );
            if (!res.data.token) {
                throw new Error("Invalid login");
            }

            // store token and name
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.name);


            // Update navbar login state
            if (setIsLoggedIn) {
                setIsLoggedIn(true);
            }
            if (setFirstName) {
                const first = res.data.name.split(" ")[0];
                setFirstName(first);
            }

            alert("Login Successful");

            // Clear fields
            setEmail("");
            setPassword("");

            // Close modal
            onClose();

            // Redirect to home
            navigate("/");

        } catch (err) {

            alert("Invalid email or password");

        } finally {

            setLoading(false);

        }

        // const handleLogin = async (e) => {

        //     e.preventDefault();

        //     try {

        //         setLoading(true);

        //         const res = await axios.post(
        //             "http://localhost:8080/api/auth/login",
        //             { email, password }
        //         );

        //         if (!res.data.token) {
        //             throw new Error("Invalid login");
        //         }

        //         // store token and name
        //         localStorage.setItem("token", res.data.token);
        //         localStorage.setItem("name", res.data.name);

        //         // update navbar state
        //         setIsLoggedIn(true);

        //         const first = res.data.name.split(" ")[0];
        //         setFirstName(first);

        //         alert("Login Successful");

        //         onClose();
        //         navigate("/");

        //     } catch (err) {

        //         alert("Invalid email or password");

        //     } finally {

        //         setLoading(false);

        //     }
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 border border-slate-100"
            >

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"
                >
                    <X size={24} />
                </button>

                <h2 className="text-3xl font-black tracking-tight mb-2">
                    Welcome Back
                </h2>

                <p className="text-slate-500 text-sm mb-8">
                    Access your DriveSmart portal
                </p>

                <form className="space-y-4" onSubmit={handleLogin}>

                    {/* EMAIL */}
                    <div className="space-y-1">

                        <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                            Email Address
                        </label>

                        <div className="relative">

                            <Mail
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                size={18}
                            />

                            <input
                                type="email"
                                placeholder="john@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered w-full pl-12 bg-slate-50 border-slate-100 rounded-xl focus:outline-indigo-600 h-12"
                            />

                        </div>

                    </div>

                    {/* PASSWORD */}
                    <div className="space-y-1">

                        <div className="flex justify-between items-center">

                            <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                                Password
                            </label>

                            <button
                                type="button"
                                onClick={onSwitchToForgot}
                                className="text-[10px] font-bold text-indigo-600 hover:underline"
                            >
                                Forgot?
                            </button>

                        </div>

                        <div className="relative">

                            <Lock
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                size={18}
                            />

                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input input-bordered w-full pl-12 bg-slate-50 border-slate-100 rounded-xl focus:outline-indigo-600 h-12"
                            />

                        </div>

                    </div>

                    {/* LOGIN BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary w-full h-12 rounded-xl normal-case font-bold shadow-lg shadow-indigo-100 border-none mt-4"
                    >
                        {loading ? "Signing In..." : "Sign In"}
                        <ArrowRight size={18} className="ml-2" />
                    </button>

                </form>

            </motion.div>

        </div>
    );
};

export default SignIn;