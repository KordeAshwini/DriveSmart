import React from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageCircle,
    Send,
    Globe
} from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Contact = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-[#FDFDFF] text-slate-900">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-indigo-50/50 to-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div {...fadeIn}>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-900">
                            How can we <span className="text-indigo-600">help?</span>
                        </h1>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Have questions about booking? Or perhaps you're a school owner looking to join?
                            Our team is here to ensure your journey with DriveSmart is seamless.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT SECTION --- */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-10"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                            <p className="text-slate-500 mb-8">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <ContactInfoCard
                                icon={<Mail className="text-indigo-600" />}
                                title="Email Us"
                                detail="support@drivesmart.com"
                            />
                            <ContactInfoCard
                                icon={<Phone className="text-emerald-600" />}
                                title="Call Us"
                                detail="+1 (555) 000-DRIVE"
                            />
                            <ContactInfoCard
                                icon={<MapPin className="text-rose-600" />}
                                title="Headquarters"
                                detail="123 Tech Avenue, Pune, MH"
                            />
                        </div>

                        {/* Social/Community Link */}
                        <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl shadow-indigo-100">
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold mb-2">Live Support</h4>
                                <p className="text-indigo-100 text-sm mb-4">Chat with our specialists for immediate assistance with bookings.</p>
                                <button className="flex items-center gap-2 font-bold text-sm bg-white text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                                    <MessageCircle size={18} /> Start Chat
                                </button>
                            </div>
                            <Globe className="absolute -right-10 -bottom-10 text-white/10" size={200} />
                        </div>
                    </motion.div>

                    {/* Right Side: The Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-indigo-100/30">
                            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-control md:col-span-1">
                                    <label className="label text-xs font-bold uppercase text-slate-400 mb-2">First Name</label>
                                    <input type="text" placeholder="John" className="input input-bordered bg-slate-50 border-slate-100 rounded-2xl h-14 focus:outline-indigo-600" />
                                </div>
                                <div className="form-control md:col-span-1">
                                    <label className="label text-xs font-bold uppercase text-slate-400 mb-2">Last Name</label>
                                    <input type="text" placeholder="Doe" className="input input-bordered bg-slate-50 border-slate-100 rounded-2xl h-14 focus:outline-indigo-600" />
                                </div>
                                <div className="form-control md:col-span-2">
                                    <label className="label text-xs font-bold uppercase text-slate-400 mb-2">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="input input-bordered bg-slate-50 border-slate-100 rounded-2xl h-14 focus:outline-indigo-600" />
                                </div>
                                <div className="form-control md:col-span-2">
                                    <label className="label text-xs font-bold uppercase text-slate-400 mb-2">What can we help with?</label>
                                    <select className="select select-bordered bg-slate-50 border-slate-100 rounded-2xl h-14 focus:outline-indigo-600 font-medium text-slate-500">
                                        <option disabled selected>Select an option</option>
                                        <option>Student Booking Help</option>
                                        <option>Instructor Registration</option>
                                        <option>School Partnership</option>
                                        <option>Technical Support</option>
                                    </select>
                                </div>
                                <div className="form-control md:col-span-2">
                                    <label className="label text-xs font-bold uppercase text-slate-400 mb-2">Message</label>
                                    <textarea className="textarea textarea-bordered bg-slate-50 border-slate-100 rounded-2xl focus:outline-indigo-600 h-40 pt-4" placeholder="How can we help you today?"></textarea>
                                </div>

                                <div className="md:col-span-2 pt-4">
                                    <button className="btn btn-primary btn-block h-16 rounded-2xl text-lg font-bold border-none shadow-lg shadow-indigo-100 normal-case group">
                                        Send Message <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- FAQ MINI SECTION --- */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Quick Answers</h2>
                    </div>
                    <div className="space-y-4">
                        <FAQItem question="How do I verify my account?" answer="Once you register, an OTP is sent to your email. Enter that code in the verification popup to activate your portal." />
                        <FAQItem question="Can I change my instructor?" answer="Yes, through the student dashboard, you can browse available instructors and use the smart matching feature to find a new one." />
                        <FAQItem question="How are payments handled?" answer="DriveSmart uses a secure settlement system. Payments are held safely and only released to the school after the lesson is marked as completed." />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const ContactInfoCard = ({ icon, title, detail }) => (
    <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{title}</h4>
            <p className="text-lg font-bold text-slate-800">{detail}</p>
        </div>
    </div>
);

const FAQItem = ({ question, answer }) => (
    <div className="collapse collapse-plus bg-white border border-slate-100 rounded-2xl">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg font-bold text-slate-700">
            {question}
        </div>
        <div className="collapse-content text-slate-500 text-sm">
            <p>{answer}</p>
        </div>
    </div>
);

export default Contact;