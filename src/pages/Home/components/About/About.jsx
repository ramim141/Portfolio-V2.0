import React from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from '../../../../components/ScrollIndicator';
import { FaGraduationCap, FaTrophy, FaCode, FaStar } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

// Data embedded inline
const aboutData = {
  "education": [
    {
      "degree": "B.Sc. in Computer Science & Engineering",
      "institution": "Metropolitan University",
      "year": "2022 - Present",
      "result": "CGPA: 3.85 / 4.00",
      "desc": "Currently in 4th Year, 3rd Semester. Focusing on Machine Learning and Software Engineering."
    }
  ],
  "training": [
    {
      "title": "CSE Fundamentals with Phitron",
      "institution": "Phitron",
      "year": "Mar 2023 to Sep 2024",
      "duration": "1.5 Years",
      "desc": "Comprehensive training covering C Programming, Data Structures, Algorithms, Object-Oriented Programming, Database Management System and Backend Engineering concepts. Built multiple projects and solved 500+ problems."
    },
    {
      "title": "Python Programming and Basic Data Science",
      "institution": "ICT Division, SUST",
      "year": "2024",
      "duration": "3 Months",
      "desc": "Government-sponsored training program focused on Python for Data Science, Machine Learning algorithms, data visualization, and statistical analysis. Completed capstone project on predictive modeling."
    },
    {
      "title": "Machine Learning & Artificial Intelligence",
      "institution": "Phitron Fall-2025",
      "year": "2024 - Present",
      "duration": "Ongoing",
      "desc": "Advanced ML/AI training covering deep learning, neural networks, natural language processing, and computer vision. Currently working on real-world AI projects and implementing state-of-the-art models.",
      "status": "running"
    }
  ],
  "stats": [
    { "label": "CodeChef Rating", "value": "1636", "sub": "3 Star (Max)", "color": "text-yellow-500" },
    { "label": "Codeforces Rating", "value": "1322", "sub": "Pupil (Max)", "color": "text-cyan-400" },
    { "label": "LeetCode Solved", "value": "125+", "sub": "Problems", "color": "text-orange-400" },
    { "label": "Total Solved", "value": "1000+", "sub": "Across Platforms", "color": "text-green-400" }
  ]
};

const About = () => {
    return (
        <section id="about" className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-[#020617] selection:bg-cyan-500/30">
            
            {/* Background Grid & Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="container relative z-10 px-4 mx-auto max-w-7xl sm:px-6">
                
                {/* Section Header */}
                <div className="mb-10 text-center sm:mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 sm:mb-6 rounded-full bg-slate-900/80 border border-slate-800/50 backdrop-blur-md">
                            <span className="relative flex w-2 h-2">
                                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400"></span>
                                <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-500"></span>
                            </span>
                            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-400">About Me</span>
                        </div>

                        <h2 className="px-4 mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Training</span>
                        </h2>
                    </motion.div>
                </div>
                
                {/* Education & Training Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 sm:mb-16 md:mb-20"
                >
                    

                    <div className="relative pl-6 ml-1 space-y-6 border-l-2 sm:pl-10 md:pl-12 sm:ml-2 sm:space-y-8 md:space-y-10 border-slate-700/50">
                        {aboutData.education.map((edu, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Dot on Timeline */}
                                <span className="absolute -left-[25px] sm:-left-[37px] md:-left-[45px] top-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 sm:border-3 md:border-4 border-[#020617] shadow-lg shadow-cyan-500/30"></span>
                                
                                <div className="p-4 transition-all duration-300 border shadow-xl sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border-slate-700/50 hover:border-cyan-500/40 hover:shadow-cyan-500/20 backdrop-blur-sm group">
                                    <h4 className="mb-2 text-lg font-black text-white transition-all sm:text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500">{edu.degree}</h4>
                                    <p className="mb-2 text-sm font-bold sm:mb-3 sm:text-base text-cyan-400">{edu.institution}</p>
                                    <p className="mb-3 text-xs font-medium sm:text-sm text-slate-400">{edu.year}</p>
                                    
                                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 text-xs sm:text-sm font-black text-green-400 border rounded-lg shadow-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30 shadow-green-500/10">
                                        <FaStar size={12} className="sm:w-3.5 sm:h-3.5 text-yellow-400" />
                                        {edu.result}
                                    </div>
                                    
                                    <p className="text-sm leading-relaxed sm:text-base text-slate-300">
                                        {edu.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Professional Training */}
                    <div className="relative pl-6 mt-6 ml-1 space-y-6 border-l-2 sm:pl-10 md:pl-12 sm:mt-8 md:mt-10 sm:ml-2 sm:space-y-8 md:space-y-10 border-slate-700/50">
                        {aboutData.training.map((train, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="relative"
                            >
                                {/* Dot on Timeline */}
                                <span className={`absolute -left-[25px] sm:-left-[37px] md:-left-[45px] top-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br ${train.status === 'running' ? 'from-green-500 to-emerald-600 shadow-green-500/30' : 'from-indigo-500 to-purple-600 shadow-indigo-500/30'} border-2 sm:border-3 md:border-4 border-[#020617] shadow-lg`}>
                                    {train.status === 'running' && (
                                        <span className="absolute inset-0 bg-green-400 rounded-full opacity-75 animate-ping"></span>
                                    )}
                                </span>
                                
                                <div className={`p-4 sm:p-5 md:p-6 transition-all duration-300 border shadow-xl rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border-slate-700/50 ${train.status === 'running' ? 'hover:border-green-500/40 hover:shadow-green-500/20' : 'hover:border-indigo-500/40 hover:shadow-indigo-500/20'} backdrop-blur-sm group`}>
                                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                        <div className={`p-1 sm:p-1.5 transition-colors rounded-lg ${train.status === 'running' ? 'bg-green-500/10 group-hover:bg-green-500/20' : 'bg-indigo-500/10 group-hover:bg-indigo-500/20'}`}>
                                            <HiSparkles className={`text-sm sm:text-base ${train.status === 'running' ? 'text-green-400' : 'text-indigo-400'}`} />
                                        </div>
                                        <h4 className={`text-base sm:text-lg md:text-xl font-black text-white transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${train.status === 'running' ? 'group-hover:from-green-400 group-hover:to-emerald-500' : 'group-hover:from-indigo-400 group-hover:to-purple-500'}`}>{train.title}</h4>
                                    </div>
                                    <p className={`mb-2 sm:mb-3 text-sm sm:text-base font-bold ${train.status === 'running' ? 'text-green-400' : 'text-indigo-400'}`}>{train.institution}</p>
                                    <p className="mb-3 text-xs font-medium sm:text-sm text-slate-400">{train.year}</p>
                                    
                                    <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 text-xs sm:text-sm font-black border rounded-lg shadow-lg ${train.status === 'running' ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 border-green-500/30 shadow-green-500/10' : 'bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-400 border-purple-500/30 shadow-purple-500/10'}`}>
                                        <FaStar size={12} className="sm:w-3.5 sm:h-3.5 text-yellow-400" />
                                        {train.status === 'running' ? `🔥 ${train.duration}` : `Duration: ${train.duration}`}
                                    </div>
                                    
                                    <p className="text-sm leading-relaxed sm:text-base text-slate-300">
                                        {train.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
            <ScrollIndicator label="Content & Teaching" />
        </section>
    );
};

export default About;