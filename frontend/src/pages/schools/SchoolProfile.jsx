// import React from "react";
// import { motion } from "framer-motion";
// import {
//     MapPin,
//     Star,
//     Users,
//     Calendar,
//     ShieldCheck,
//     Clock,
//     Car,
//     ArrowRight,
//     CheckCircle2,
//     MessageCircle
// } from "lucide-react";
// import Navbar from "../../components/common/Navbar";
// import Footer from "../../components/common/Footer";

// const SchoolProfile = () => {
//     // This data would normally come from your Spring Boot API via the 'id' parameter
//     const { id } = useParams(); // This grabs the '0', '1', or 'id' from the URL
//     const schoolDetails = {
//         name: "Elite Driving Academy",
//         location: "Pune West, Maharashtra",
//         rating: 4.9,
//         reviews: 128,
//         bio: "Elite Driving Academy has been the leading choice for over 10 years. We specialize in defensive driving and automatic transmission mastery with a 98% first-time pass rate.",
//         instructors: [
//             { name: "Sandeep Kumar", exp: "12 Years", rating: 4.9, type: "Manual/Auto" },
//             { name: "Priya Sharma", exp: "8 Years", rating: 4.8, type: "Automatic" },
//             { name: "Rahul Varma", exp: "15 Years", rating: 5.0, type: "Heavy Vehicles" }
//         ],
//         features: ["Certified Instructors", "Dual-Control Cars", "Pick-up Service", "Mock Test Facility"]
//     };

//     return (
//         <div className="min-h-screen bg-[#FDFDFF] text-slate-900">
//             <Navbar />

//             {/* --- HERO / BANNER SECTION --- */}
//             <section className="pt-32 pb-12 bg-white border-b border-slate-100">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="flex flex-col lg:flex-row gap-12 items-start">
//                         {/* School Image / Branding */}
//                         <motion.div
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             className="w-full lg:w-1/3 aspect-video lg:aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative group"
//                         >
//                             <img
//                                 src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
//                                 alt="Driving School"
//                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                             />
//                             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl flex items-center gap-2 shadow-sm font-bold">
//                                 <ShieldCheck className="text-indigo-600" size={18} /> Verified
//                             </div>
//                         </motion.div>

//                         {/* Basic Info */}
//                         <div className="flex-grow">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 className="space-y-6"
//                             >
//                                 <div className="flex flex-wrap items-center gap-4">
//                                     <h1 className="text-4xl md:text-5xl font-black tracking-tight">{schoolDetails.name}</h1>
//                                     <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full font-bold text-sm">
//                                         <Star size={16} className="fill-current" /> {schoolDetails.rating} ({schoolDetails.reviews} Reviews)
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center gap-2 text-slate-500 font-medium">
//                                     <MapPin size={18} className="text-indigo-600" /> {schoolDetails.location}
//                                 </div>
//                                 <p className="text-lg text-slate-500 leading-relaxed max-w-3xl italic">
//                                     "{schoolDetails.bio}"
//                                 </p>
//                                 <div className="flex flex-wrap gap-4 pt-4">
//                                     <button className="btn btn-primary px-8 rounded-2xl font-bold h-14 normal-case shadow-xl shadow-indigo-100 border-none">Book a Trial Lesson</button>
//                                     <button className="btn bg-white hover:bg-slate-50 border-slate-200 px-8 rounded-2xl font-bold h-14 normal-case text-slate-700">
//                                         <MessageCircle size={20} className="mr-2 text-indigo-600" /> Chat with Admin
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* --- CORE CONTENT --- */}
//             <section className="py-20 max-w-7xl mx-auto px-6">
//                 <div className="grid lg:grid-cols-12 gap-12">

//                     {/* Left Column: Instructors & Features */}
//                     <div className="lg:col-span-8 space-y-12">

//                         {/* Instructor List (Module 8 Integration) */}
//                         <div>
//                             <div className="flex justify-between items-center mb-8">
//                                 <h2 className="text-3xl font-bold tracking-tight">Meet the Team</h2>
//                                 <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest cursor-pointer hover:underline">View All 12+</p>
//                             </div>
//                             <div className="grid sm:grid-cols-2 gap-6">
//                                 {schoolDetails.instructors.map((ins, i) => (
//                                     <div key={i} className="p-6 bg-white border border-slate-100 rounded-[2.5rem] flex items-center gap-6 hover:shadow-xl transition-all group">
//                                         <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
//                                             <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600">
//                                                 <Users size={24} />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <h4 className="font-bold text-lg">{ins.name}</h4>
//                                             <p className="text-xs text-slate-400 font-bold uppercase mb-2">{ins.type} Specialist</p>
//                                             <div className="flex items-center gap-3">
//                                                 <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-md font-bold">{ins.exp}</span>
//                                                 <span className="text-xs flex items-center gap-1 font-bold text-amber-500"><Star size={12} className="fill-current" />{ins.rating}</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Key Features */}
//                         <div>
//                             <h2 className="text-3xl font-bold tracking-tight mb-8">What we offer</h2>
//                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//                                 {schoolDetails.features.map((feat, i) => (
//                                     <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-center flex flex-col items-center gap-3">
//                                         <CheckCircle2 className="text-indigo-600" size={24} />
//                                         <p className="text-xs font-bold text-slate-700 leading-tight">{feat}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column: Pricing & Quick Stats */}
//                     <div className="lg:col-span-4 space-y-8">
//                         <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
//                             <div className="relative z-10">
//                                 <h3 className="text-sm font-black text-indigo-400 uppercase tracking-[0.2em] mb-6">Price Packages</h3>
//                                 <div className="space-y-6">
//                                     <PriceRow title="Single Lesson (1hr)" price="$40" />
//                                     <PriceRow title="Intro Package (5hrs)" price="$180" />
//                                     <PriceRow title="Pro License Prep" price="$450" highlight />
//                                 </div>
//                                 <button className="btn btn-primary btn-block h-14 rounded-2xl mt-10 font-bold border-none shadow-lg shadow-indigo-900/40">Secure Your Slot</button>
//                                 <p className="text-center text-[10px] text-slate-400 mt-4">100% Refundable within 24 hours</p>
//                             </div>
//                             {/* Abstract Decor */}
//                             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
//                         </div>

//                         <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] space-y-6 shadow-sm">
//                             <h4 className="font-bold flex items-center gap-2"><Clock className="text-indigo-600" size={18} /> Working Hours</h4>
//                             <ul className="space-y-3 text-sm">
//                                 <li className="flex justify-between font-medium"><span>Mon - Fri</span> <span className="text-slate-500">08:00 - 20:00</span></li>
//                                 <li className="flex justify-between font-medium"><span>Saturday</span> <span className="text-slate-500">09:00 - 17:00</span></li>
//                                 <li className="flex justify-between font-medium text-rose-500 font-bold"><span>Sunday</span> <span>Closed</span></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// };

// const PriceRow = ({ title, price, highlight }) => (
//     <div className={`flex justify-between items-center p-4 rounded-2xl ${highlight ? 'bg-white/10 border border-white/20' : ''}`}>
//         <span className="font-bold text-sm">{title}</span>
//         <span className={`text-xl font-black ${highlight ? 'text-indigo-400' : ''}`}>{price}</span>
//     </div>
// );

// export default SchoolProfile;

import React from "react";
import { useParams, Link } from "react-router-dom"; // Added useParams and Link
import { motion } from "framer-motion";
import {
    MapPin, Star, Users, ShieldCheck,
    Clock, MessageCircle, CheckCircle2
} from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const SchoolProfile = () => {
    const { id } = useParams(); // Gets 'elite-academy' etc. from URL

    // This data would be fetched from Spring Boot using the 'id'
    const schoolDetails = {
        name: id?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Elite Driving Academy",
        location: "Pune West, Maharashtra",
        rating: 4.9,
        reviews: 128,
        bio: "We provide professional driving education with a focus on safety and confidence. Our certified instructors use dual-control vehicles to ensure a stress-free learning environment.",
        instructors: [
            { name: "Sandeep Kumar", exp: "12 Years", rating: 4.9, type: "Manual/Auto" },
            { name: "Priya Sharma", exp: "8 Years", rating: 4.8, type: "Automatic" },
            { name: "Rahul Varma", exp: "15 Years", rating: 5.0, type: "Heavy Vehicles" }
        ],
        features: ["Certified Instructors", "Dual-Control Cars", "Pick-up Service", "Mock Test Facility"]
    };

    return (
        <div className="min-h-screen bg-[#FDFDFF] text-slate-900">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-12 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="w-full lg:w-1/3 aspect-video lg:aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
                                alt="Driving School"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl flex items-center gap-2 shadow-sm font-bold">
                                <ShieldCheck className="text-indigo-600" size={18} /> Verified
                            </div>
                        </motion.div>

                        <div className="flex-grow">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                <div className="flex flex-wrap items-center gap-4">
                                    <h1 className="text-4xl md:text-5xl font-black tracking-tight">{schoolDetails.name}</h1>
                                    <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full font-bold text-sm">
                                        <Star size={16} className="fill-current" /> {schoolDetails.rating}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 font-medium font-bold">
                                    <MapPin size={18} className="text-indigo-600" /> {schoolDetails.location}
                                </div>
                                <p className="text-lg text-slate-500 leading-relaxed max-w-3xl italic">"{schoolDetails.bio}"</p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button className="btn btn-primary px-10 rounded-2xl font-bold h-14 normal-case border-none shadow-xl shadow-indigo-100">Book Lesson</button>
                                    <button className="btn bg-white hover:bg-slate-50 border-slate-200 px-8 rounded-2xl font-bold h-14 normal-case text-slate-700">
                                        <MessageCircle size={20} className="mr-2 text-indigo-600" /> Chat
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DETAILS SECTION --- */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-8">Instructors</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {schoolDetails.instructors.map((ins, i) => (
                                    <div key={i} className="p-6 bg-white border border-slate-100 rounded-[2.5rem] flex items-center gap-6 hover:shadow-xl transition-all group">
                                        <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                            <Users size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{ins.name}</h4>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold">{ins.exp}</span>
                                                <span className="text-[10px] flex items-center gap-1 font-bold text-amber-500"><Star size={10} className="fill-current" />{ins.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-8">School Features</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {schoolDetails.features.map((feat, i) => (
                                    <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-center flex flex-col items-center gap-3">
                                        <CheckCircle2 className="text-indigo-600" size={24} />
                                        <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{feat}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl">
                            <h3 className="font-bold text-indigo-400 mb-6 uppercase tracking-widest text-xs">Pricing Packages</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between font-bold"><span>Basic (1hr)</span> <span>$40</span></div>
                                <div className="flex justify-between font-bold"><span>Standard (5hrs)</span> <span>$180</span></div>
                                <div className="flex justify-between font-bold text-indigo-400"><span>Full Course</span> <span>$450</span></div>
                            </div>
                            <button className="btn btn-primary btn-block mt-8 rounded-xl font-bold border-none">Reserve Package</button>
                        </div>
                        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                            <h4 className="font-bold mb-4 flex items-center gap-2"><Clock size={18} className="text-indigo-600" /> Hours</h4>
                            <p className="text-sm text-slate-500">Mon - Fri: 08:00 - 20:00</p>
                            <p className="text-sm text-slate-500 mt-2 font-bold text-rose-500">Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SchoolProfile;
