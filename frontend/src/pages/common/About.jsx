import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Add this line
import {
    Heart,
    ShieldCheck,
    Zap,
    Star,
    Users,
    MapPin,
    Clock,
    Award
} from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50/50 to-white relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.div {...fadeIn}>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1] text-slate-900">
                            We’re on a mission to <br />
                            <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">save your time.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                            DriveSmart was born from a simple idea: booking a driving lesson should be as easy as ordering a coffee. No more phone tag, no more paperwork.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- OUR STORY / VALUES --- */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div {...fadeIn} className="relative">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                            {/* An image of a happy student learning to drive with an instructor */}
                            <img
                                src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800"
                                alt="Happy driving student"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-full -z-10" />
                    </motion.div>

                    <motion.div {...fadeIn}>
                        <h2 className="text-4xl font-bold mb-8 tracking-tight">Why we built DriveSmart</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Focused on Students</h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        Learning to drive is stressful enough. We built a platform that handles the scheduling and payments so you can focus on the road.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                    <Star size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Empowering Instructors</h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        We give local instructors the digital tools they need to grow their business and spend less time on administration.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Quality & Safety First</h4>
                                    <p className="text-slate-500 leading-relaxed">
                                        Every school on our platform is verified. We ensure transparency in ratings so you can choose the best teacher with confidence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- HOW WE HELP SECTION --- */}
            <section className="py-24 bg-slate-50 rounded-[4rem] mx-4 md:mx-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-16">The DriveSmart Promise</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <PromiseCard icon={<Clock size={28} />} title="Instant Booking" desc="Book your lessons in 30 seconds, 24/7." />
                        <PromiseCard icon={<MapPin size={28} />} title="Local Schools" desc="The best instructors right in your neighborhood." />
                        <PromiseCard icon={<Zap size={28} />} title="Fast Progress" desc="Track your skills and know exactly when you're ready." />
                        <PromiseCard icon={<Award size={28} />} title="Pass Rates" desc="94% of our learners pass on their first attempt." />
                    </div>
                </div>
            </section>

            {/* --- TEAM / COMMUNITY SECTION --- */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <Users size={48} className="mx-auto mb-8 text-indigo-200" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">A growing community</h2>
                        <p className="text-indigo-100 text-lg mb-12">
                            Join over 12,000 students and 300+ driving schools who have ditched the paper logbooks for a smarter way to drive.
                        </p>
                        <Link to="/register" className="btn bg-white text-indigo-600 border-none hover:bg-slate-100 px-12 rounded-2xl font-bold h-14 normal-case">
                            Get Started Today
                        </Link>
                    </div>
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                </div>
            </section>

            <Footer />
        </div>
    );
};

const PromiseCard = ({ icon, title, desc }) => (
    <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
        <div className="text-indigo-600 mb-4 flex justify-center">{icon}</div>
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default About;