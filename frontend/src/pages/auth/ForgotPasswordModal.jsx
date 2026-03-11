// import React from "react";
// import { motion } from "framer-motion";
// import { Mail, ChevronRight, X } from "lucide-react";

// const ForgotPasswordModal = ({ isOpen, onClose, onSendOTP }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative">
//                 <h2 className="text-3xl font-black mb-2 tracking-tight">Lost Access?</h2>
//                 <p className="text-slate-500 text-sm mb-8">No worries. Enter your email and we'll send a code to reset your password.</p>
//                 <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900">
//                     <X size={20} />
//                 </button>

//                 <div className="space-y-4">
//                     <div className="space-y-1">
//                         <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Your Email</label>
//                         <input type="email" placeholder="email@example.com" className="input input-bordered w-full bg-slate-50 border-slate-100 rounded-xl h-12" />
//                     </div>
//                     <button onClick={onSendOTP} className="btn btn-primary w-full h-12 rounded-xl font-bold border-none">
//                         Send Reset Code <ChevronRight size={18} />
//                     </button>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default ForgotPasswordModal;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ChevronRight, X } from "lucide-react";
import axios from "axios";

const ForgotPasswordModal = ({ isOpen, onClose, onSendOTP }) => {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSendOtp = async () => {

        if (!email) {
            alert("Please enter email");
            return;
        }

        try {

            setLoading(true);

            await axios.post(
                "http://localhost:8080/api/auth/forgot-password",
                {
                    email: email
                }
            );

            alert("OTP sent to your email");

            onSendOTP(email);

        } catch (error) {

            alert("User not found");

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative"
            >

                <h2 className="text-3xl font-black mb-2 tracking-tight">
                    Lost Access?
                </h2>

                <p className="text-slate-500 text-sm mb-8">
                    No worries. Enter your email and we'll send a code to reset your password.
                </p>

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"
                >
                    <X size={20} />
                </button>

                <div className="space-y-4">

                    <div className="space-y-1">

                        <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                            Your Email
                        </label>

                        <input
                            type="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full bg-slate-50 border-slate-100 rounded-xl h-12"
                        />

                    </div>

                    <button
                        onClick={handleSendOtp}
                        disabled={loading}
                        className="btn btn-primary w-full h-12 rounded-xl font-bold border-none"
                    >

                        {loading ? "Sending..." : "Send Reset Code"}

                        <ChevronRight size={18} />

                    </button>

                </div>

            </motion.div>

        </div>
    );
};

export default ForgotPasswordModal;