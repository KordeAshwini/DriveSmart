// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//     BookOpen,
//     ShieldCheck,
//     AlertTriangle,
//     TrafficCone,
//     Info,
//     ArrowRight,
//     PlayCircle,
//     CheckCircle2
// } from "lucide-react";
// import Navbar from "../../components/common/Navbar";
// import Footer from "../../components/common/Footer";

// const Curriculum = () => {
//     const [activeTab, setActiveTab] = useState("rules");

//     const roadSigns = [
//         { id: 1, type: "Warning", title: "Sharp Turn", color: "bg-amber-100 text-amber-700", desc: "Approaching a dangerous curve." },
//         { id: 2, type: "Regulatory", title: "Stop", color: "bg-rose-100 text-rose-700", desc: "Come to a complete halt at the line." },
//         { id: 3, type: "Informative", title: "Parking", color: "bg-blue-100 text-blue-700", desc: "Designated area for vehicle storage." },
//         { id: 4, type: "Priority", title: "Yield", color: "bg-red-100 text-red-700", desc: "Give way to oncoming traffic." }
//     ];

//     const fadeIn = {
//         initial: { opacity: 0, y: 20 },
//         whileInView: { opacity: 1, y: 0 },
//         viewport: { once: true },
//         transition: { duration: 0.6 }
//     };

//     return (
//         <div className="min-h-screen bg-[#FDFDFF] text-slate-900">
//             <Navbar />

//             {/* --- HERO SECTION --- */}
//             <section className="pt-32 pb-16 bg-gradient-to-b from-indigo-50/50 to-white text-center">
//                 <div className="max-w-4xl mx-auto px-6">
//                     <motion.div {...fadeIn}>
//                         <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-900">
//                             Knowledge is <span className="text-indigo-600">Safety.</span>
//                         </h1>
//                         <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
//                             Master the road with our structured driving curriculum. From basic traffic
//                             signs to advanced defensive driving techniques, we prepare you for success.
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* --- NAVIGATION TABS --- */}
//             <div className="max-w-7xl mx-auto px-6 flex justify-center gap-4 mb-16">
//                 <button
//                     onClick={() => setActiveTab("rules")}
//                     className={`px-8 py-3 rounded-2xl font-bold transition-all ${activeTab === "rules" ? "bg-slate-900 text-white shadow-lg" : "bg-white text-slate-500 border border-slate-100 hover:bg-slate-50"}`}
//                 >
//                     Traffic Rules
//                 </button>
//                 <button
//                     onClick={() => setActiveTab("signs")}
//                     className={`px-8 py-3 rounded-2xl font-bold transition-all ${activeTab === "signs" ? "bg-slate-900 text-white shadow-lg" : "bg-white text-slate-500 border border-slate-100 hover:bg-slate-50"}`}
//                 >
//                     Road Signs
//                 </button>
//             </div>

//             {/* --- CONTENT AREA --- */}
//             <section className="pb-24 max-w-7xl mx-auto px-6">
//                 <div className="grid lg:grid-cols-12 gap-12">

//                     {/* Main Learning Modules */}
//                     <div className="lg:col-span-8 space-y-8">
//                         {activeTab === "rules" ? (
//                             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
//                                 <LearningModule
//                                     icon={<TrafficCone className="text-indigo-600" />}
//                                     title="Introduction to Driving"
//                                     time="45 mins"
//                                     topics={["Vehicle Controls", "Mirror Adjustment", "Starting & Stopping"]}
//                                 />
//                                 <LearningModule
//                                     icon={<ShieldCheck className="text-emerald-600" />}
//                                     title="Defensive Driving"
//                                     time="60 mins"
//                                     topics={["Distance Maintenance", "Hazard Perception", "Emergency Braking"]}
//                                 />
//                                 <LearningModule
//                                     icon={<AlertTriangle className="text-amber-600" />}
//                                     title="Road Maneuvers"
//                                     time="90 mins"
//                                     topics={["Parallel Parking", "U-Turns", "Reversing into a Bay"]}
//                                 />
//                             </motion.div>
//                         ) : (
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 className="grid sm:grid-cols-2 gap-6"
//                             >
//                                 {roadSigns.map((sign) => (
//                                     <div key={sign.id} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
//                                         <div className={`w-14 h-14 rounded-2xl ${sign.color} flex items-center justify-center mb-6`}>
//                                             <Info size={28} />
//                                         </div>
//                                         <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{sign.type} Sign</h4>
//                                         <h3 className="text-xl font-bold mb-3">{sign.title}</h3>
//                                         <p className="text-slate-500 text-sm leading-relaxed">{sign.desc}</p>
//                                     </div>
//                                 ))}
//                             </motion.div>
//                         )}
//                     </div>

//                     {/* Sidebar: Progress & Mock Test */}
//                     <div className="lg:col-span-4 space-y-8">
//                         <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
//                             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
//                                 <PlayCircle className="text-indigo-600" /> Lesson Content
//                             </h3>
//                             <div className="space-y-4">
//                                 <p className="text-sm text-slate-500 leading-relaxed">
//                                     Each module contains high-quality diagrams, video explainers, and interactive checklists.
//                                 </p>
//                                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
//                                     <div className="h-full bg-indigo-600 w-1/3 rounded-full" />
//                                 </div>
//                                 <p className="text-xs font-bold text-slate-400">COURSE PROGRESS: 33%</p>
//                             </div>
//                         </div>

//                         <div className="p-10 bg-indigo-600 rounded-[3rem] text-white shadow-2xl shadow-indigo-100 relative overflow-hidden group">
//                             <div className="relative z-10">
//                                 <BookOpen size={40} className="mb-6 text-indigo-200" />
//                                 <h3 className="text-2xl font-bold mb-4">Ready for the Test?</h3>
//                                 <p className="text-indigo-100 text-sm mb-8 leading-relaxed">
//                                     Put your knowledge to the test with our simulated theory exam.
//                                 </p>
//                                 {/* Link to the Mock Test page */}
//                                 <Link to="/mock-test" className="btn bg-white text-indigo-600 border-none hover:bg-slate-100 btn-block h-14 rounded-2xl font-bold normal-case flex items-center justify-center">
//                                     Start Mock Test <ArrowRight size={18} className="ml-2" />
//                                 </Link>
//                             </div>
//                             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-700" />
//                         </div>

//                         {/* <div className="p-10 bg-indigo-600 rounded-[3rem] text-white shadow-2xl shadow-indigo-100 relative overflow-hidden group">
//                             <div className="relative z-10">
//                                 <BookOpen size={40} className="mb-6 text-indigo-200" />
//                                 <h3 className="text-2xl font-bold mb-4">Ready for the Test?</h3>
//                                 <p className="text-indigo-100 text-sm mb-8 leading-relaxed">
//                                     Put your knowledge to the test with our simulated theory exam.
//                                 </p>
//                                 <button className="btn bg-white text-indigo-600 border-none hover:bg-slate-100 btn-block h-14 rounded-2xl font-bold normal-case">
//                                     Start Mock Test <ArrowRight size={18} className="ml-2" />
//                                 </button>
//                             </div>
//                             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-700" />
//                         </div> */}
//                     </div>
//                 </div>
//             </section>

//             {/* --- ROAD SIGNS VISUALIZATION --- */}


//             <Footer />
//         </div>
//     );
// };

// const LearningModule = ({ icon, title, time, topics }) => (
//     <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-8 items-start sm:items-center">
//         <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
//             {icon}
//         </div>
//         <div className="flex-grow">
//             <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
//                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{time}</span>
//             </div>
//             <div className="flex flex-wrap gap-4">
//                 {topics.map((topic, i) => (
//                     <div key={i} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
//                         <CheckCircle2 size={16} className="text-emerald-500" /> {topic}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>
// );

// export default Curriculum;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for card clicks
import {
    BookOpen,
    ShieldCheck,
    AlertTriangle,
    TrafficCone,
    Info,
    ArrowRight,
    PlayCircle,
    CheckCircle2
} from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Curriculum = () => {
    const [activeTab, setActiveTab] = useState("rules");
    const navigate = useNavigate();

    const roadSigns = [
        { id: 1, type: "Warning", title: "Sharp Turn", color: "bg-amber-100 text-amber-700", desc: "Approaching a dangerous curve ahead." },
        { id: 2, type: "Regulatory", title: "Stop", color: "bg-rose-100 text-rose-700", desc: "Come to a complete halt at the stop line." },
        { id: 3, type: "Informative", title: "Parking", color: "bg-blue-100 text-blue-700", desc: "Designated area for vehicle parking." },
        { id: 4, type: "Priority", title: "Yield", color: "bg-red-100 text-red-700", desc: "Give way to oncoming traffic at the junction." }
    ];

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-[#FDFDFF] text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-indigo-50/50 to-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div {...fadeIn}>
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                            Module 3: Learning & Training
                        </div> */}
                        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-900">
                            Knowledge is <span className="text-indigo-600">Safety.</span>
                        </h1>
                        <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
                            Master the road with our structured driving curriculum. From basic traffic
                            signs to advanced defensive driving techniques, we prepare you for success.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- NAVIGATION TABS --- */}
            <div className="max-w-7xl mx-auto px-6 flex justify-center gap-4 mb-16">
                <button
                    onClick={() => setActiveTab("rules")}
                    className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${activeTab === "rules" ? "bg-slate-900 text-white shadow-lg shadow-slate-200 scale-105" : "bg-white text-slate-500 border border-slate-100 hover:bg-slate-50"}`}
                >
                    Traffic Rules
                </button>
                <button
                    onClick={() => setActiveTab("signs")}
                    className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${activeTab === "signs" ? "bg-slate-900 text-white shadow-lg shadow-slate-200 scale-105" : "bg-white text-slate-500 border border-slate-100 hover:bg-slate-50"}`}
                >
                    Road Signs
                </button>
            </div>

            {/* --- CONTENT AREA --- */}
            <section className="pb-24 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Main Learning Modules */}
                    <div className="lg:col-span-8 space-y-8">
                        {activeTab === "rules" ? (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                <LearningModule
                                    icon={<TrafficCone className="text-indigo-600" />}
                                    title="Introduction to Driving"
                                    slug="intro"
                                    time="45 mins"
                                    topics={["Vehicle Controls", "Mirror Adjustment", "Starting & Stopping"]}
                                />
                                <LearningModule
                                    icon={<ShieldCheck className="text-emerald-600" />}
                                    title="Defensive Driving"
                                    slug="defensive"
                                    time="60 mins"
                                    topics={["Distance Maintenance", "Hazard Perception", "Emergency Braking"]}
                                />
                                <LearningModule
                                    icon={<AlertTriangle className="text-amber-600" />}
                                    title="Road Maneuvers"
                                    slug="maneuvers"
                                    time="90 mins"
                                    topics={["Parallel Parking", "U-Turns", "Reversing into a Bay"]}
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="grid sm:grid-cols-2 gap-6"
                            >
                                {roadSigns.map((sign) => (
                                    <div key={sign.id} className="group p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-500">
                                        <div className={`w-14 h-14 rounded-2xl ${sign.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <Info size={28} />
                                        </div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{sign.type} Sign</h4>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{sign.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{sign.desc}</p>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar: Progress & Mock Test */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                                <PlayCircle className="text-indigo-600" size={24} /> Lesson Content
                            </h3>
                            <div className="space-y-4">
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Each module contains high-quality diagrams, video explainers, and interactive checklists to track your success.
                                </p>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "33%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-indigo-600 rounded-full"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</p>
                                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">33% Complete</p>
                                </div>
                            </div>
                        </div>

                        {/* --- MOCK TEST CTA --- */}
                        <div className="p-10 bg-indigo-600 rounded-[3rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
                            <div className="relative z-10 text-center sm:text-left">
                                <BookOpen size={40} className="mb-6 text-indigo-200" />
                                <h3 className="text-2xl font-bold mb-4">Ready for the Test?</h3>
                                <p className="text-indigo-100 text-sm mb-8 leading-relaxed opacity-90">
                                    Put your knowledge to the test with our simulated theory exam. Pass this to build confidence for the real exam.
                                </p>
                                <Link
                                    to="/mock-test"
                                    className="btn bg-white text-indigo-600 border-none hover:bg-slate-100 btn-block h-14 rounded-2xl font-bold normal-case flex items-center justify-center gap-2 group shadow-xl"
                                >
                                    Start Mock Test
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            {/* Animated Background Decor */}
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-1000" />
                            <div className="absolute top-0 left-0 w-20 h-20 bg-white/5 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

// --- Sub-component for Learning Modules ---
const LearningModule = ({ icon, title, slug, time, topics }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/lesson/${slug}`)}
            className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-50/50 hover:border-indigo-100 transition-all duration-500 flex flex-col sm:flex-row gap-8 items-start sm:items-center cursor-pointer group"
        >
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                {React.cloneElement(icon, { size: 30, className: "group-hover:text-white transition-colors duration-500" })}
            </div>
            <div className="flex-grow">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">{title}</h3>
                    <div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{time}</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    {topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500 font-semibold bg-slate-50/50 px-2 py-1 rounded-md border border-slate-100/50">
                            <CheckCircle2 size={14} className="text-emerald-500" /> {topic}
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="text-indigo-600" size={24} />
            </div>
        </div>
    );
};

export default Curriculum;