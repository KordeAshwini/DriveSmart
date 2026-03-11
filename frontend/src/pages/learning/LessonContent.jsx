import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Clock, BookOpen, CheckCircle2, Play } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const LESSON_DATA = {
    "intro": {
        title: "Introduction to Driving",
        desc: "The foundation of your driving journey. Learn how to handle the machine safely.",
        video: "https://images.unsplash.com/photo-1449960232330-79ba99d70d91?q=80&w=1000",
        content: [
            { h: "The Cockpit Drill", p: "Before starting, ensure DSSSM: Doors, Seat, Steering, Seatbelt, and Mirrors are adjusted." },
            { h: "Understanding Pedals", p: "The ABC of driving: Accelerator (Right), Brake (Middle), and Clutch (Left)." }
        ]
    },
    "defensive": {
        title: "Defensive Driving",
        desc: "Driving isn't just about you; it's about anticipating everyone else on the road.",
        video: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1000",
        content: [
            { h: "Hazard Perception", p: "Scan the road 10 seconds ahead. Look for parked cars, children, or merging traffic." },
            { h: "The 2-Second Rule", p: "Maintain a safe gap between you and the vehicle in front to allow for emergency braking." }
        ]
    },
    "maneuvers": {
        title: "Road Maneuvers",
        desc: "Mastering the art of precise vehicle control in tight spaces.",
        video: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000",
        content: [
            { h: "Parallel Parking", p: "Line up your rear axle with the car in front, turn fully towards the curb, and reverse at a 45° angle." },
            { h: "The 3-Point Turn", p: "Safe way to turn around on a narrow road using forward and reverse gears." }
        ]
    }
};

const LessonContent = () => {
    const { slug } = useParams();
    const lesson = LESSON_DATA[slug] || LESSON_DATA["intro"];

    return (
        <div className="min-h-screen bg-[#FDFDFF] text-slate-900">
            <Navbar />

            <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
                {/* Header Navigation */}
                <Link to="/curriculum" className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-indigo-600 mb-8 transition-colors">
                    <ChevronLeft size={20} /> Back to Curriculum
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">{lesson.title}</h1>
                    <div className="flex items-center gap-6 text-slate-400 mb-10">
                        <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                            <Clock size={16} className="text-indigo-600" /> 45 Mins
                        </span>
                        <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                            <BookOpen size={16} className="text-indigo-600" /> Module 3.1
                        </span>
                    </div>

                    {/* Video/Image Placeholder */}
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl mb-12 group">
                        <img src={lesson.video} className="w-full h-[400px] object-cover" alt="Lesson" />
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-all flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white scale-100 group-hover:scale-110 transition-transform">
                                <Play size={32} fill="white" />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-10">
                            {lesson.content.map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <h3 className="text-2xl font-bold">{item.h}</h3>
                                    <p className="text-slate-500 leading-relaxed text-lg">{item.p}</p>
                                </div>
                            ))}
                        </div>

                        {/* Sidebar Checklist */}
                        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 h-fit">
                            <h4 className="font-bold mb-6">Learning Goals</h4>
                            <div className="space-y-4">
                                {["Theory Understanding", "Practical Application", "Safety Compliance"].map((goal, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                                        <CheckCircle2 size={18} className="text-emerald-500" /> {goal}
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-primary btn-block mt-8 rounded-xl font-bold">Mark as Complete</button>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default LessonContent;