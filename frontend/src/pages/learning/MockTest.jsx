// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Timer, ArrowRight, CheckCircle2, AlertCircle, RotateCcw, ChevronLeft } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/common/Navbar";

// const MockTest = () => {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
//     const [isFinished, setIsFinished] = useState(false);

//     const questions = [
//         {
//             q: "What does a circular sign with a red border signify?",
//             options: ["Warning", "Mandatory Instruction", "Information", "Speed Limit Only"],
//             correct: 1
//         },
//         {
//             q: "When approaching a pedestrian crossing, you should:",
//             options: ["Speed up to pass quickly", "Honk to warn them", "Slow down and be ready to stop", "Only stop if a policeman is there"],
//             correct: 2
//         }
//     ];

//     useEffect(() => {
//         if (timeLeft > 0 && !isFinished) {
//             const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//             return () => clearTimeout(timer);
//         }
//     }, [timeLeft, isFinished]);

//     const formatTime = (seconds) => {
//         const mins = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//     };

//     const handleNext = () => {
//         if (currentQuestion < questions.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//             setSelectedOption(null);
//         } else {
//             setIsFinished(true);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-[#FDFDFF] text-slate-900">
//             <Navbar />
//             <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">

//                 {!isFinished ? (
//                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//                         {/* Header: Timer & Progress */}
//                         <div className="flex justify-between items-center mb-10">
//                             <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-2xl border border-slate-100 shadow-sm font-bold text-slate-600">
//                                 <Timer size={20} className="text-indigo-600" />
//                                 {formatTime(timeLeft)}
//                             </div>
//                             <div className="text-sm font-bold text-slate-400">
//                                 Question {currentQuestion + 1} of {questions.length}
//                             </div>
//                         </div>

//                         {/* Question Card */}
//                         <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-indigo-100/30">
//                             <h2 className="text-2xl md:text-3xl font-bold mb-10 leading-tight">
//                                 {questions[currentQuestion].q}
//                             </h2>

//                             <div className="space-y-4">
//                                 {questions[currentQuestion].options.map((option, idx) => (
//                                     <button
//                                         key={idx}
//                                         onClick={() => setSelectedOption(idx)}
//                                         className={`w-full p-6 rounded-2xl border-2 text-left font-semibold transition-all flex justify-between items-center ${selectedOption === idx
//                                             ? "border-indigo-600 bg-indigo-50 text-indigo-700"
//                                             : "border-slate-50 bg-slate-50 text-slate-600 hover:border-slate-200"
//                                             }`}
//                                     >
//                                         {option}
//                                         {selectedOption === idx && <CheckCircle2 size={20} />}
//                                     </button>
//                                 ))}
//                             </div>

//                             <button
//                                 onClick={handleNext}
//                                 disabled={selectedOption === null}
//                                 className="btn btn-primary btn-block h-16 rounded-2xl mt-12 text-lg font-bold border-none disabled:bg-slate-100"
//                             >
//                                 {currentQuestion === questions.length - 1 ? "Finish Test" : "Next Question"}
//                             </button>
//                         </div>
//                     </motion.div>
//                 ) : (
//                     <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
//                         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-8">
//                             <CheckCircle2 size={48} />
//                         </div>
//                         <h1 className="text-4xl font-black mb-4">Test Completed!</h1>
//                         <p className="text-slate-500 mb-10">You scored 100%. You're ready for the real thing!</p>

//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <button onClick={() => window.location.reload()} className="btn btn-ghost h-14 px-10 rounded-2xl font-bold bg-white border border-slate-100">
//                                 <RotateCcw size={18} className="mr-2" /> Retake Test
//                             </button>
//                             <Link to="/curriculum" className="btn btn-primary h-14 px-10 rounded-2xl font-bold border-none">
//                                 Back to Curriculum
//                             </Link>
//                         </div>
//                     </motion.div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MockTest;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Timer, ArrowRight, CheckCircle2, RotateCcw, ChevronLeft, AlertCircle } from "lucide-react";
import Navbar from "../../components/common/Navbar";

const MockTest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            q: "What does a circular sign with a red border signify?",
            options: ["Information", "Mandatory Instruction", "Warning", "Recommended Route"],
            correct: 1
        },
        {
            q: "When should you use your hazard warning lights?",
            options: ["When parked illegally", "To thank other drivers", "When broken down and causing an obstruction", "When driving in heavy rain"],
            correct: 2
        },
        {
            q: "What is the 'Two-Second Rule' used for?",
            options: ["Changing gears", "Checking mirrors", "Following distance in good conditions", "Reaction time at traffic lights"],
            correct: 2
        }
    ];

    useEffect(() => {
        if (timeLeft > 0 && !isFinished) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setIsFinished(true);
        }
    }, [timeLeft, isFinished]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const handleNext = () => {
        if (selectedOption === questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setIsFinished(true);
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFDFF] text-slate-900">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                <AnimatePresence mode="wait">
                    {!isFinished ? (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {/* Header: Timer & Stats */}
                            <div className="flex justify-between items-center mb-10">
                                <Link to="/curriculum" className="flex items-center gap-2 text-slate-400 font-bold hover:text-indigo-600 transition-colors">
                                    <ChevronLeft size={20} /> Quit Test
                                </Link>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl font-mono font-bold border border-indigo-100">
                                        <Timer size={18} /> {formatTime(timeLeft)}
                                    </div>
                                    <div className="text-sm font-bold text-slate-400">
                                        Question {currentQuestion + 1}/{questions.length}
                                    </div>
                                </div>
                            </div>

                            {/* Question Card */}
                            <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-indigo-100/30">
                                <h2 className="text-3xl font-bold mb-10 leading-tight tracking-tight">
                                    {questions[currentQuestion].q}
                                </h2>

                                <div className="space-y-4">
                                    {questions[currentQuestion].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedOption(idx)}
                                            className={`w-full p-6 rounded-2xl border-2 text-left font-bold transition-all flex justify-between items-center ${selectedOption === idx
                                                ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                                                : "border-slate-50 bg-slate-50 text-slate-600 hover:border-slate-200"
                                                }`}
                                        >
                                            {option}
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedOption === idx ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-300"}`}>
                                                {selectedOption === idx && <div className="w-2 h-2 bg-white rounded-full" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={handleNext}
                                    disabled={selectedOption === null}
                                    className="btn btn-primary btn-block h-16 rounded-2xl mt-12 text-lg font-bold border-none shadow-lg shadow-indigo-100 disabled:opacity-50"
                                >
                                    {currentQuestion === questions.length - 1 ? "Finish Test" : "Continue"} <ArrowRight size={20} className="ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                        >
                            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-8 shadow-inner">
                                <CheckCircle2 size={48} />
                            </div>
                            <h1 className="text-4xl font-black mb-4 tracking-tight">Test Completed!</h1>
                            <p className="text-slate-500 mb-10 text-lg">
                                You answered <span className="text-indigo-600 font-bold">{score} out of {questions.length}</span> questions correctly.
                            </p>

                            <div className="bg-slate-50 p-8 rounded-[2.5rem] mb-10 border border-slate-100 inline-block px-12">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Final Result</p>
                                <p className={`text-2xl font-black ${score === questions.length ? "text-emerald-600" : "text-amber-600"}`}>
                                    {score === questions.length ? "EXCELLENT" : "KEEP PRACTICING"}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button onClick={() => window.location.reload()} className="h-14 px-10 rounded-2xl bg-white border border-slate-200 font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                    <RotateCcw size={18} /> Retake Test
                                </button>
                                <Link to="/curriculum" className="h-14 px-10 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100">
                                    Return to Lessons
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MockTest;