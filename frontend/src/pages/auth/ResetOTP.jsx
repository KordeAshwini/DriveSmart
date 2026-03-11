import React, { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, X, Loader2 } from "lucide-react";
import axios from "axios";

const ResetOTP = ({ isOpen, onClose, email, onVerified }) => {

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleChange = (value, index) => {

        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleVerify = async () => {

        const otpValue = otp.join("");

        if (otpValue.length !== 6) {
            alert("Enter complete OTP");
            return;
        }

        try {

            setLoading(true);

            await axios.post(
                "http://localhost:8080/api/auth/verify-reset-otp",
                {
                    email: email,
                    otp: otpValue
                }
            );

            alert("OTP Verified");

            onClose();

            onVerified();

        } catch (err) {

            alert("Invalid or expired OTP");

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

                <h2 className="text-2xl font-black mb-2">Enter OTP</h2>

                <p className="text-slate-500 text-xs mb-8">
                    Enter the OTP sent to <b>{email}</b>
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
                    onClick={handleVerify}
                    disabled={loading}
                    className="btn btn-primary w-full h-12 rounded-xl"
                >
                    {loading ? <Loader2 className="animate-spin" /> : "Verify OTP"}
                </button>

            </motion.div>

        </div>
    );
};

export default ResetOTP;