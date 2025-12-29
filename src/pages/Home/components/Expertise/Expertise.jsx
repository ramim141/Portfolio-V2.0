import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaBrain, FaLaptopCode } from 'react-icons/fa'; // Changed icons for better fit
import { SiCodeforces, SiDjango, SiPytorch } from 'react-icons/si';
import ScrollIndicator from '../../../../components/ScrollIndicator';


// --- Key Stats for Easy Maintenance ---
const codechefMaxRating = 1636;
const codeforcesMaxRating = 1322;
const leetcodeSolved = 120;
const cpSummary = `Max Rating ${codechefMaxRating} (CodeChef) & ${codeforcesMaxRating} (Codeforces), LeetCode ${leetcodeSolved}+ problems solved`;

// Enhanced Data based on CV
const expertiseData = [
    {
        id: 1,
        title: "Backend Architecture",
        stat: "2+ Production Web Solutions",
        desc: "Designing scalable RESTful APIs with Django & Django Rest Framework. Specialized in complex database schemas (MySQL), authentication (JWT), and asynchronous tasks using Celery.",
        icon: "backend",
        skills: ["Django","Django REST", "MySQL", "Celery", "JWT"],
        color: "from-cyan-400 to-blue-600"
    },
    {
        id: 2,
        title: "Frontend Development",
        stat: "5+ Projects Deployed",
        desc: "Building responsive and dynamic UI using HTML, TailwindCSS, JS and React.js. Experienced in integrating frontend with backend services, state management, and optimizing performance for better user experience.",
        icon: "frontend",
        skills: ["React", "JavaScript", "Tailwind", "HTML5", "CSS3"],
        color: "from-green-400 to-emerald-500"
    },
    {
        id: 3,
        title: "Competitive Programming",
        stat: "1004+ Problems Solved",
        desc: `Consistent competitive programmer with ${cpSummary}. Regular participant in contests with focus on optimization and Time & Space Complexity analysis.`,
        icon: "cp",
        skills: [ "C","C++", "Algorithms", "Data Structures", "STL", "LeetCode", "Codeforces", "CodeChef"],
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 4,
        title: "Core CS Fundamentals",
        stat: "Strong Theoretical Foundation",
        desc: "In-depth understanding of Data Structures, Algorithms,Object-oriented programming, Database Management System, Operating Systems. Applied these concepts in real-world projects to enhance efficiency and performance.",
        icon: "fundamentals",
        skills: ["Data Structures", "Algorithms", "OOP",  "DBMS", "OS Concepts", "Software Design", "Machine Learning", "Computer Networks"],
        color: "from-indigo-400 to-purple-600"
    },
    {
        id: 5,
        title: "Basic Data Science & AI/ML",
        stat: "Certified by IICT, SUST",
        desc: "Transforming raw data into actionable insights using Python's data stack. Experienced in training ML models, statistical analysis, and visualization under the EDGE Project.",
        icon: "ai",
        skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
        color: "from-amber-400 to-orange-500"
    }
];

// Icon Helper
const getIcon = (iconName) => {
    const className = "w-6 h-6 text-white sm:w-7 sm:h-7 md:w-8 md:h-8";
    switch (iconName) {
        case 'backend': return <SiDjango className={className} />;
        case 'frontend': return <FaLaptopCode className={className} />;
        case 'cp': return <SiCodeforces className={className} />;
        case 'fundamentals': return <FaBrain className={className} />;
        case 'ai': return <SiPytorch className={className} />;
        default: return <FaLaptopCode className={className} />;
    }
};

const Expertise = () => {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-[#020617] selection:bg-cyan-500/30">
            
            {/* Background Grid & Ambient Light */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto sm:px-6 max-w-7xl">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center sm:mb-16 md:mb-20"
                >
                    <span className="inline-block px-3 py-1 mb-3 sm:mb-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase border rounded-full bg-slate-800/50 border-slate-700 text-cyan-400">
                        Technical Arsenal
                    </span>
                    <h2 className="px-4 mb-4 text-3xl font-extrabold tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                        Forging Code into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions</span>
                    </h2>
                    <p className="max-w-2xl px-4 mx-auto text-sm sm:text-base md:text-lg text-slate-400">
                        I bridge the gap between complex algorithms and real-world applications. Here is how I add value to engineering teams.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {expertiseData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative h-full group"
                        >
                            {/* Card Background with Glass Effect */}
                            <div className="absolute inset-0 transition-colors border bg-slate-800/30 backdrop-blur-xl rounded-xl sm:rounded-2xl border-slate-700/50 group-hover:bg-slate-800/50 group-hover:border-slate-600"></div>
                            
                            {/* Hover Gradient Glow */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500`}></div>

                            <div className="relative flex flex-col h-full p-5 sm:p-6 md:p-8">
                                {/* Icon & Badge Header */}
                                <div className="flex items-start justify-between mb-4 sm:mb-6">
                                    <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                                        {getIcon(item.icon)}
                                    </div>
                                    <span className="px-2 py-1 font-mono text-[10px] sm:text-xs font-bold border rounded text-slate-400 bg-slate-900/50 border-slate-700">
                                        {item.stat}
                                    </span>
                                </div>

                                <h3 className="mb-2 text-xl font-bold text-white transition-all sm:mb-3 sm:text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300">
                                    {item.title}
                                </h3>
                                
                                <p className="flex-grow mb-6 text-sm leading-relaxed sm:mb-8 sm:text-base text-slate-400">
                                    {item.desc}
                                </p>

                                {/* Tech Stack Footer */}
                                <div className="pt-4 border-t sm:pt-6 border-slate-700/50">
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {item.skills.map((skill, i) => (
                                            <span 
                                                key={i} 
                                                className="px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-slate-300 bg-slate-900/60 rounded border border-slate-700/50 group-hover:border-slate-600 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <ScrollIndicator label="Coding Profiles" />
        </section>
    );
};

export default Expertise;