// import React from "react";
// import { motion } from "framer-motion";
// import { Lock, CheckCircle2 } from "lucide-react";

// const ResetPasswordModal = ({ isOpen, onClose }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-[160] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
//             <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl text-center">
//                 <h2 className="text-3xl font-black mb-6 tracking-tight">New Password</h2>
//                 <div className="space-y-4 text-left">
//                     <div className="space-y-1">
//                         <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">New Password</label>
//                         <input type="password" placeholder="••••••••" className="input input-bordered w-full bg-slate-50 border-slate-100 rounded-xl h-12" />
//                     </div>
//                     <div className="space-y-1">
//                         <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Confirm New Password</label>
//                         <input type="password" placeholder="••••••••" className="input input-bordered w-full bg-slate-50 border-slate-100 rounded-xl h-12" />
//                     </div>
//                     <button onClick={onClose} className="btn btn-primary w-full h-12 rounded-xl font-bold border-none mt-4">
//                         Update Password
//                     </button>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default ResetPasswordModal;
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ResetPasswordModal = ({ isOpen, onClose, email }) => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleResetPassword = async () => {

        if (password !== confirmPassword) {

            alert("Passwords do not match");
            return;
        }

        try {

            setLoading(true);

            await axios.post(
                "http://localhost:8080/api/auth/reset-password",
                {
                    email: email,
                    newPassword: password
                }
            );

            alert("Password updated successfully");

            onClose();

        } catch (error) {

            alert("Error resetting password");

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="fixed inset-0 z-[160] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">

            <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl text-center"
            >

                <h2 className="text-3xl font-black mb-6 tracking-tight">
                    New Password
                </h2>

                <div className="space-y-4 text-left">

                    <div className="space-y-1">

                        <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                            New Password
                        </label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full bg-slate-50 border-slate-100 rounded-xl h-12"
                        />

                    </div>

                    <div className="space-y-1">

                        <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">
                            Confirm New Password
                        </label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="input input-bordered w-full bg-slate-50 border-slate-100 rounded-xl h-12"
                        />

                    </div>

                    <button
                        onClick={handleResetPassword}
                        disabled={loading}
                        className="btn btn-primary w-full h-12 rounded-xl font-bold border-none mt-4"
                    >

                        {loading ? "Updating..." : "Update Password"}

                    </button>

                </div>

            </motion.div>

        </div>
    );
};

export default ResetPasswordModal;