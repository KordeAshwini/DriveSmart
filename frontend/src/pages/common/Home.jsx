import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    BookOpen,
    Calendar,
    MessageSquare,
    ShieldCheck,
    Settings,
    UserCheck,
    ChevronRight,
    LineChart,
    Car,
    Star,
    ArrowRight,
    Smartphone
} from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

// --- Responsive Feature Card ---
const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50 transition-all group"
    >
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base">{desc}</p>
    </motion.div>
);

const Home = () => {
    return (
        <div className="min-h-screen bg-[#FDFDFF] text-slate-900 overflow-x-hidden">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-32 overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.08)_0%,transparent_100%)] -z-10" />

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-sm mb-6">
                            <Star size={14} className="fill-current" />
                            <span className="text-xs font-bold uppercase tracking-wider">Most Trusted Driving Platform</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 md:mb-8">
                            Master the Road with <br />
                            <span className="text-indigo-600 italic">DriveSmart.</span>
                        </h1>

                        <p className="text-base md:text-xl text-slate-500 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            The simplest way to book driving lessons, track your progress,
                            and pass your test faster. All your driving education in one smart app.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Link to="/curriculum" className="btn btn-primary h-14 px-10 rounded-2xl text-white font-bold shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 group">
                                Start Learning Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/register" className="btn btn-ghost h-14 px-10 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 flex items-center justify-center">
                                Register Your School
                            </Link>
                        </div>
                    </motion.div>

                    {/* --- SMART FEATURE PREVIEW (Refined for User) --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative hidden md:block"
                    >
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg">Smart Matching</h4>
                                    <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Finding your perfect instructor</p>
                                </div>
                                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                                    <Smartphone size={24} />
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { label: "Instructor Quality", val: 95, color: "bg-indigo-500" },
                                    { label: "Distance from You", val: 80, color: "bg-emerald-500" },
                                    { label: "Lesson Affordability", val: 65, color: "bg-amber-500" },
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold text-slate-500">
                                            <span>{item.label}</span>
                                            <span>{item.val}% Match</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.val}%` }}
                                                transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                                                className={`h-full ${item.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* 
                            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-200 animate-pulse" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-3 w-24 bg-slate-100 rounded-full" />
                                    <div className="h-2 w-32 bg-slate-50 rounded-full" />
                                </div>
                                <button className="btn btn-sm btn-primary rounded-lg normal-case">Match Me</button>
                            </div> */}
                        </div>
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* --- SOLUTIONS SECTION --- */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built for Success on the Road</h2>
                        <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                            Stop dealing with phone calls and paper records. We’ve digitized the
                            entire driving school experience so you can focus on passing your test.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
                        <FeatureCard
                            icon={BookOpen}
                            title="Learn & Practice"
                            desc="Access traffic rules, road sign libraries, and take realistic mock tests to prepare for your theory exam."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={Calendar}
                            title="Instant Booking"
                            desc="Pick a time that fits your schedule. No back-and-forth calls needed—just tap and book."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={MessageSquare}
                            title="Direct Chat"
                            desc="Message your instructor anytime to coordinate pickups or ask questions through secure messaging."
                            delay={0.3}
                        />
                        <FeatureCard
                            icon={ShieldCheck}
                            title="Verified Safety"
                            desc="Every driving school and instructor is vetted for certifications and quality before joining."
                            delay={0.4}
                        />
                        <FeatureCard
                            icon={LineChart}
                            title="Track Progress"
                            desc="See exactly how many lessons you’ve had and which skills you still need to master before your test."
                            delay={0.5}
                        />
                        <FeatureCard
                            icon={Smartphone}
                            title="Digital Payments"
                            desc="Securely pay for lessons individually or in bulk. No more carrying cash to your driving sessions."
                            delay={0.6}
                        />
                    </div>
                </div>
            </section>

            {/* --- USER ROLE SELECTOR --- */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 overflow-hidden relative">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to take <br className="hidden md:block" /> the driver's seat?</h2>
                            <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-12">Select your role to explore a dashboard tailored specifically to your needs.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link to="/register?role=student" className="h-14 flex items-center justify-center border border-slate-700 text-white hover:bg-indigo-600 hover:border-indigo-600 rounded-2xl font-bold transition-all">Student Portal</Link>
                                <Link to="/register?role=instructor" className="h-14 flex items-center justify-center border border-slate-700 text-white hover:bg-indigo-600 hover:border-indigo-600 rounded-2xl font-bold transition-all">Instructor Portal</Link>
                                <Link to="/register?role=owner" className="h-14 flex items-center justify-center border border-slate-700 text-white hover:bg-indigo-600 hover:border-indigo-600 rounded-2xl font-bold transition-all">School Owner</Link>
                                <Link to="/admin" className="h-14 flex items-center justify-center border border-slate-700 text-white hover:bg-indigo-600 hover:border-indigo-600 rounded-2xl font-bold transition-all">Admin Panel</Link>
                            </div>
                        </div>

                        <div className="hidden lg:flex justify-center relative">
                            <div className="w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] absolute inset-0" />
                            <Car size={320} className="text-indigo-500/10 rotate-12 relative z-10" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;