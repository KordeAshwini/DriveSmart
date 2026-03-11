// import React from "react";
// import { motion } from "framer-motion";
// import { MapPin, Star, Car, ShieldCheck, Search, SlidersHorizontal } from "lucide-react";
// import Navbar from "../../components/common/Navbar";
// import Footer from "../../components/common/Footer";

// const Schools = () => {

//     const schools = [
//         { name: "Elite Driving Academy", location: "Pune West", rating: 4.9, instructors: 12, price: "$40/hr" },
//         { name: "SafeWay Driving", location: "Mumbai Central", rating: 4.7, instructors: 8, price: "$35/hr" },
//         { name: "ProDrive School", location: "Digital Colony", rating: 4.8, instructors: 15, price: "$45/hr" }
//     ];

//     return (
//         <div className="min-h-screen bg-[#FDFDFF] text-slate-900">
//             <Navbar />

//             <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50/50 to-white">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
//                         <div className="max-w-2xl">
//                             <h1 className="text-5xl font-black mb-4 tracking-tight">Partner Schools</h1>
//                             <p className="text-slate-500 text-lg">Browse vetted driving schools near you. Every school on DriveSmart is certified and monitored for quality.</p>
//                         </div>
//                         {/* Search Bar */}
//                         <div className="w-full md:w-96 relative">
//                             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
//                             <input type="text" placeholder="Search by area or school..." className="input input-bordered w-full pl-12 h-14 bg-white border-slate-100 rounded-2xl focus:outline-indigo-600 shadow-sm" />
//                         </div>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {schools.map((school, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/40 transition-all group"
//                             >
//                                 <div className="flex justify-between items-start mb-6">
//                                     <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
//                                         <Car size={28} />
//                                     </div>
//                                     <div className="flex items-center gap-1 font-bold text-amber-500">
//                                         <Star size={16} className="fill-current" /> {school.rating}
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-2">{school.name}</h3>
//                                 <div className="flex items-center gap-2 text-slate-400 text-sm mb-6 font-medium">
//                                     <MapPin size={14} /> {school.location}
//                                 </div>
//                                 <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-50 mb-6">
//                                     <div>
//                                         <p className="text-[10px] uppercase font-bold text-slate-400">Instructors</p>
//                                         <p className="font-bold text-slate-700">{school.instructors}+ Staff</p>
//                                     </div>
//                                     <div>
//                                         <p className="text-[10px] uppercase font-bold text-slate-400">Starting From</p>
//                                         <p className="font-bold text-slate-700">{school.price}</p>
//                                     </div>
//                                 </div>
//                                 {/* <button className="btn btn-primary btn-block rounded-xl normal-case font-bold border-none shadow-lg shadow-indigo-50">View School Profiles</button> */}
//                                 <Link
//                                     to={`/school/${i}`} // Navigates to /school/0, /school/1, etc.
//                                     className="btn btn-primary btn-block rounded-xl normal-case font-bold border-none shadow-lg shadow-indigo-50 flex items-center justify-center"
//                                 >
//                                     View School Profile
//                                 </Link>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     );
// };

// export default Schools;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Added Link
import { MapPin, Star, Car, Search } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Schools = () => {
    const schools = [
        { id: "elite-academy", name: "Elite Driving Academy", location: "Pune West", rating: 4.9, instructors: 12, price: "$40/hr" },
        { id: "safeway-driving", name: "SafeWay Driving", location: "Mumbai Central", rating: 4.7, instructors: 8, price: "$35/hr" },
        { id: "prodrive-school", name: "ProDrive School", location: "Digital Colony", rating: 4.8, instructors: 15, price: "$45/hr" }
    ];

    return (
        <div className="min-h-screen bg-[#FDFDFF] text-slate-900">
            <Navbar />

            <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50/50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl font-black mb-4 tracking-tight">Partner Schools</h1>
                            <p className="text-slate-500 text-lg">Browse vetted driving schools near you. Every school on DriveSmart is certified and monitored for quality.</p>
                        </div>
                        <div className="w-full md:w-96 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input type="text" placeholder="Search by area or school..." className="input input-bordered w-full pl-12 h-14 bg-white border-slate-100 rounded-2xl focus:outline-indigo-600 shadow-sm" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {schools.map((school) => (
                            <motion.div
                                key={school.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/40 transition-all group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                        <Car size={28} />
                                    </div>
                                    <div className="flex items-center gap-1 font-bold text-amber-500">
                                        <Star size={16} className="fill-current" /> {school.rating}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{school.name}</h3>
                                <div className="flex items-center gap-2 text-slate-400 text-sm mb-6 font-medium">
                                    <MapPin size={14} /> {school.location}
                                </div>
                                <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-50 mb-6">
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Instructors</p>
                                        <p className="font-bold text-slate-700">{school.instructors}+ Staff</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Starting From</p>
                                        <p className="font-bold text-slate-700">{school.price}</p>
                                    </div>
                                </div>
                                {/* DYNAMIC LINK ADDED HERE */}
                                <Link
                                    to={`/school/${school.id}`}
                                    className="btn btn-primary btn-block rounded-xl normal-case font-bold border-none shadow-lg shadow-indigo-50 flex items-center justify-center"
                                >
                                    View School Profile
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Schools;