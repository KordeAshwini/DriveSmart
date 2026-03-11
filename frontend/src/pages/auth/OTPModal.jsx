// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Smartphone, X, Loader2 } from "lucide-react";

// const OTPModal = ({ isOpen, onClose, email, title, description, onVerify }) => {
//     const [loading, setLoading] = useState(false);

//     const handleVerifyClick = () => {
//         setLoading(true);
//         // Simulate API call to Spring Boot
//         setTimeout(() => {
//             setLoading(false);
//             onVerify();
//         }, 1500);
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="bg-white w-full max-w-sm rounded-[2.5rem] p-10 shadow-2xl relative text-center"
//             >
//                 <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900">
//                     <X size={20} />
//                 </button>

//                 <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-6">
//                     <Smartphone size={28} />
//                 </div>

//                 <h2 className="text-2xl font-black mb-2 tracking-tight">{title}</h2>
//                 <p className="text-slate-500 text-xs mb-8 leading-relaxed">
//                     {description} <br />
//                     <span className="font-bold text-slate-800">{email}</span>
//                 </p>

//                 <div className="flex justify-center gap-2 mb-8">
//                     {[1, 2, 3, 4, 5, 6].map((i) => (
//                         <input
//                             key={i}
//                             type="text"
//                             maxLength="1"
//                             className="w-10 h-12 text-center text-lg font-bold bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-600 outline-none transition-all"
//                         />
//                     ))}
//                 </div>

//                 <button
//                     onClick={handleVerifyClick}
//                     disabled={loading}
//                     className="btn btn-primary w-full h-12 rounded-xl font-bold border-none shadow-lg shadow-indigo-100"
//                 >
//                     {loading ? <Loader2 className="animate-spin" /> : "Verify Code"}
//                 </button>
//             </motion.div>
//         </div>
//     );
// };

// export default OTPModal;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, X, Loader2 } from "lucide-react";
import axios from "axios";

const OTPModal = ({ isOpen, onClose, email, onVerifySuccess }) => {

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);

    const handleChange = (value, index) => {

        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleVerifyClick = async () => {

        const finalOtp = otp.join("");

        if (finalOtp.length !== 6) {
            alert("Enter complete OTP");
            return;
        }

        try {

            setLoading(true);

            const res = await axios.post(
                "http://localhost:8080/api/auth/verify-email",
                {
                    email: email,
                    otp: finalOtp
                }
            );

            alert(res.data);

            onClose();

            onVerifySuccess();

        } catch (err) {

            alert("Invalid OTP");

        } finally {

            setLoading(false);

        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white w-full max-w-sm rounded-[2.5rem] p-10 shadow-2xl relative text-center"
            >

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"
                >
                    <X size={20} />
                </button>

                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-6">
                    <Smartphone size={28} />
                </div>

                <h2 className="text-2xl font-black mb-2">
                    Verify OTP
                </h2>

                <p className="text-slate-500 text-xs mb-8">
                    Enter the code sent to <br />
                    <span className="font-bold text-slate-800">{email}</span>
                </p>

                <div className="flex justify-center gap-2 mb-8">

                    {otp.map((digit, index) => (

                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            className="w-10 h-12 text-center text-lg font-bold bg-slate-50 border rounded-xl"
                        />

                    ))}

                </div>

                <button
                    onClick={handleVerifyClick}
                    disabled={loading}
                    className="btn btn-primary w-full h-12 rounded-xl"
                >
                    {loading ? <Loader2 className="animate-spin" /> : "Verify Code"}
                </button>

            </motion.div>

        </div>
    );
};

export default OTPModal;