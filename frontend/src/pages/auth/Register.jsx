// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//     User,
//     Building2,
//     ChevronLeft,
//     ArrowRight,
//     ShieldCheck
// } from "lucide-react";
// import Navbar from "../../components/common/Navbar";
// import OTPModal from "./OTPModal";

// const Register = () => {
//     const [step, setStep] = useState(1); // 1: Role Selection, 2: Form
//     const [role, setRole] = useState(null);
//     const [showVerifyOTP, setShowVerifyOTP] = useState(false);
//     const [email, setEmail] = useState("");

//     const roles = [
//         {
//             id: "student",
//             title: "Student",
//             icon: <User size={40} />,
//             desc: "I want to learn driving, book professional lessons, and practice for my theory tests.",
//             color: "indigo"
//         },
//         {
//             id: "owner",
//             title: "School Owner",
//             icon: <Building2 size={40} />,
//             desc: "I want to register my driving school, manage instructors, and track business growth.",
//             color: "amber"
//         }
//     ];

//     const handleRoleSelect = (selectedRole) => {
//         setRole(selectedRole);
//         setStep(2);
//     };

//     const handleRegisterSubmit = (formData) => {
//         setEmail(formData.email);
//         // Here you would call your Spring Boot API to send the OTP
//         setShowVerifyOTP(true);
//     };

//     return (
//         <div className="min-h-screen bg-[#FDFDFF] text-slate-900">
//             <Navbar />

//             <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
//                 <div className="max-w-4xl mx-auto">

//                     {/* --- STEP INDICATOR --- */}
//                     <div className="flex items-center justify-center gap-3 mb-16">
//                         <div className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= 1 ? "bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.4)]" : "bg-slate-200"}`} />
//                         <div className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= 2 ? "bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.4)]" : "bg-slate-200"}`} />
//                     </div>

//                     <AnimatePresence mode="wait">
//                         {step === 1 ? (
//                             <motion.div
//                                 key="step1"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -20 }}
//                                 className="text-center"
//                             >
//                                 <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-slate-900">Join DriveSmart</h1>
//                                 <p className="text-slate-500 mb-12 text-lg">Choose your journey to get started</p>

//                                 {/* Centered 2-Column Grid */}
//                                 <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
//                                     {roles.map((item) => (
//                                         <button
//                                             key={item.id}
//                                             onClick={() => handleRoleSelect(item.id)}
//                                             className="group relative p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-indigo-100 hover:border-indigo-100 transition-all duration-500 text-left flex flex-col h-full overflow-hidden"
//                                         >
//                                             {/* Decorative Background Icon */}
//                                             <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
//                                                 {item.icon}
//                                             </div>

//                                             <div className={`w-16 h-16 rounded-2xl bg-${item.color}-50 text-${item.color}-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
//                                                 {item.icon}
//                                             </div>

//                                             <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
//                                             <p className="text-slate-500 leading-relaxed mb-10 flex-grow">
//                                                 {item.desc}
//                                             </p>

//                                             <div className="flex items-center gap-2 text-indigo-600 font-bold">
//                                                 Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                                             </div>
//                                         </button>
//                                     ))}
//                                 </div>
//                             </motion.div>
//                         ) : (
//                             <motion.div
//                                 key="step2"
//                                 initial={{ opacity: 0, x: 30 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 exit={{ opacity: 0, x: -30 }}
//                                 className="max-w-lg mx-auto"
//                             >
//                                 <button
//                                     onClick={() => setStep(1)}
//                                     className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold text-sm mb-8 transition-colors group"
//                                 >
//                                     <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
//                                     Back to Selection
//                                 </button>

//                                 <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-indigo-100/50">
//                                     <div className="mb-10">
//                                         <h2 className="text-3xl font-bold tracking-tight text-slate-900">Sign Up</h2>
//                                         <div className="mt-3 flex items-center gap-2">
//                                             <span className="text-[10px] bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
//                                                 {role} Portal
//                                             </span>
//                                         </div>
//                                     </div>

//                                     <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//                                         <div className="space-y-2">
//                                             <label className="text-xs font-bold uppercase text-slate-400 ml-1 tracking-wider">Full Name</label>
//                                             <input type="text" placeholder="Alex Morgan" className="input input-bordered w-full bg-slate-50 border-slate-100 rounded-2xl focus:outline-indigo-600 h-14" />
//                                         </div>

//                                         <div className="space-y-2">
//                                             <label className="text-xs font-bold uppercase text-slate-400 ml-1 tracking-wider">Email Address</label>
//                                             <input type="email" placeholder="alex@example.com" className="input input-bordered w-full bg-slate-50 border-slate-100 rounded-2xl focus:outline-indigo-600 h-14" />
//                                         </div>

//                                         <div className="space-y-2">
//                                             <label className="text-xs font-bold uppercase text-slate-400 ml-1 tracking-wider">Password</label>
//                                             <input type="password" placeholder="••••••••" className="input input-bordered w-full bg-slate-50 border-slate-100 rounded-2xl focus:outline-indigo-600 h-14" />
//                                         </div>

//                                         <div className="flex items-start gap-3 py-2">
//                                             <input type="checkbox" className="checkbox checkbox-primary checkbox-sm rounded-md mt-1" />
//                                             <span className="text-xs text-slate-500 leading-relaxed">
//                                                 I agree to the <Link to="/terms" className="text-indigo-600 font-bold hover:underline">Terms of Service</Link>
//                                             </span>
//                                         </div>

//                                         <button onClick={handleRegisterSubmit} className="btn btn-primary w-full h-14 rounded-2xl normal-case text-lg font-bold shadow-lg shadow-indigo-200 border-none hover:scale-[1.02] transition-transform">
//                                             Create My Account
//                                         </button>
//                                     </form>



//                                     <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-center gap-3">
//                                         <ShieldCheck size={18} className="text-emerald-500" />
//                                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
//                                             Protected by 256-bit JWT Encryption
//                                         </p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </div>
//             </div>
//             <OTPModal
//                 isOpen={showVerifyOTP}
//                 email={email}
//                 onClose={() => setShowVerifyOTP(false)} // This is what was missing
//                 onComplete={() => {
//                     setShowVerifyOTP(false);
//                     // Redirect to success page or login
//                     window.location.href = "/signin";
//                 }}
//             />
//         </div>
//     );
// };

// export default Register;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    User,
    Building2,
    ChevronLeft,
    ArrowRight,
    ShieldCheck
} from "lucide-react";
import Navbar from "../../components/common/Navbar";
import OTPModal from "./OTPModal";
import SignInModal from "./SignIn";
import axios from "axios";

const Register = () => {

    const [step, setStep] = useState(1);
    const [role, setRole] = useState(null);

    const [showVerifyOTP, setShowVerifyOTP] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const roles = [
        {
            id: "Learner",
            title: "Student",
            icon: <User size={40} />,
            desc: "Learn driving, book lessons and practice tests.",
            color: "indigo"
        },
        {
            id: "OWNER",
            title: "School Owner",
            icon: <Building2 size={40} />,
            desc: "Register your driving school and manage instructors.",
            color: "amber"
        }
    ];

    const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);
        setStep(2);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegisterSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:8080/api/auth/register",
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    role: role
                }
            );

            alert(res.data);

            setShowVerifyOTP(true);

        } catch (err) {

            alert("Registration Failed");

        }
    };

    return (
        <div className="min-h-screen bg-[#FDFDFF] text-slate-900">

            <Navbar />

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

                <div className="max-w-4xl mx-auto">

                    <div className="flex justify-center gap-3 mb-16">
                        <div className={`h-1.5 w-12 ${step >= 1 ? "bg-indigo-600" : "bg-slate-200"}`} />
                        <div className={`h-1.5 w-12 ${step >= 2 ? "bg-indigo-600" : "bg-slate-200"}`} />
                    </div>

                    <AnimatePresence mode="wait">

                        {step === 1 ? (

                            <motion.div
                                key="step1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center"
                            >

                                <h1 className="text-4xl font-black mb-4">
                                    Join DriveSmart
                                </h1>

                                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

                                    {roles.map((item) => (

                                        <button
                                            key={item.id}
                                            onClick={() => handleRoleSelect(item.id)}
                                            className="p-10 bg-white border rounded-3xl shadow hover:shadow-xl"
                                        >

                                            <div className="mb-6 text-indigo-600">
                                                {item.icon}
                                            </div>

                                            <h3 className="text-xl font-bold mb-3">
                                                {item.title}
                                            </h3>

                                            <p className="text-slate-500 mb-6">
                                                {item.desc}
                                            </p>

                                            <div className="flex items-center gap-2 text-indigo-600 font-bold">
                                                Get Started <ArrowRight size={18} />
                                            </div>

                                        </button>

                                    ))}

                                </div>

                            </motion.div>

                        ) : (

                            <motion.div
                                key="step2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="max-w-lg mx-auto"
                            >

                                <button
                                    onClick={() => setStep(1)}
                                    className="flex items-center gap-2 text-slate-400 mb-8"
                                >
                                    <ChevronLeft size={18} />
                                    Back
                                </button>

                                <div className="bg-white p-10 rounded-3xl shadow">

                                    <h2 className="text-2xl font-bold mb-8">
                                        Sign Up ({role})
                                    </h2>

                                    <form onSubmit={handleRegisterSubmit} className="space-y-6">

                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />

                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />

                                        <input
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="input input-bordered w-full"
                                        />

                                        <button className="btn btn-primary w-full">
                                            Create My Account
                                        </button>

                                    </form>

                                    <div className="mt-8 flex items-center justify-center gap-2">
                                        <ShieldCheck size={18} className="text-green-500" />
                                        <p className="text-xs text-slate-400">
                                            Secured with JWT
                                        </p>
                                    </div>

                                </div>

                            </motion.div>

                        )}

                    </AnimatePresence>

                </div>

            </div>

            {/* OTP MODAL */}
            <OTPModal
                isOpen={showVerifyOTP}
                email={formData.email}
                onClose={() => setShowVerifyOTP(false)}
                onVerifySuccess={() => setShowSignIn(true)}
            />

            {/* SIGN IN MODAL */}
            <SignInModal
                isOpen={showSignIn}
                onClose={() => setShowSignIn(false)}
            />

        </div>
    );
};

export default Register;