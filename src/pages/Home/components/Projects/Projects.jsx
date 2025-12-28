import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaTimes, FaYoutube, FaInfoCircle, FaLightbulb, FaRocket, FaCheckCircle, FaCode, FaCog, FaDatabase, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { BiTimeFive, BiCodeBlock } from 'react-icons/bi';
import { HiSparkles } from 'react-icons/hi';
import ScrollIndicator from '../../../../components/ScrollIndicator';
import Kishorkontho_project_thum from '../../../../assets/images/project/kishorkonto.png';

// Project Data
const projectData = [


    {
        "id": 1,
        "title": "Kishorekonto Medhabritti Result System - Sylhet West",
        "category": "Educational / Result Management",
        "description": "A dedicated web portal for managing and publishing results of the Kishorekonto Medhabritti exam. Students can easily check their results using their roll number.",
        "fullDescription": "The Kishorekonto Medhabritti Result Management System is built to streamline the result publishing process for the Sylhet West Zone. It replaces manual result checking with a digital solution. Students can input their roll numbers to instantly view their marks and merit status. The platform ensures data accuracy and provides an administrative panel for organizers to upload and manage student data efficiently.",
        "features": [
            "Student result search by Roll Number",
            "Merit list and mark sheet generation",
            "Responsive design for mobile and desktop access",
            "Fast and secure data retrieval",
            "Merit list generation",
            "Organization all information panel",
            "Library sorting and filtering",
            "FAQ section for student queries",
            "Contact form for support",
            "Downloadable PDF mark sheets and Print option",
            "Notice board for announcements",
            "Past year result archive",
        ],
        "challenges": "Handling large datasets of student results efficiently, ensuring 100% accuracy in result display, and optimizing search performance to handle traffic during result publication.",
        "tech": ["React.js", "Tailwind", "DRF", "MySQL", "Vercel"],
        "techStack": {
            "frontend": ["React.js", "Tailwind", "Vite/React-App"],
            "backend": ["DRF", "API", "MySQL", "ORM"],
            "tools": ["Git", "VS Code", "Vercel"]
        },
        "duration": "3 months",
        "team": "Individual Project",
        "learnings": [
            "Mastered CRUD operations for managing student records",
            "Learned to handle data filtering and searching algorithms",
            "Improved UI/UX for educational platforms",
            "Implemented efficient state management for large datasets",
            "Gained experience in optimizing API calls for better performance",
            "Enhanced skills in creating responsive data tables and result displays",
            "Experience in deploying React apps on Vercel"
        ],
        "futureFeatures": [
            "Admin dashboard for data management",
            "Overall statistic and analytics of results"
        ],
        "youtubeVideo": "",
        "links": {
            "github": "https://github.com/ramim141/kishorkhonto-medabritti-result-management-system",
            "live": "https://kksylwest.vercel.app/"
        },
        "image": Kishorkontho_project_thum,
        "featured": true
    }, 

    {
        "id": 2,
        "title": "Foodzy - Organic Store",
        "category": "E-commerce",
        "description": "Functional e-commerce site with shopping cart management,Payment system, User management, product filtering, customer reviews and order placement and invoice generate logic using Django MVT architecture.",
        "fullDescription": "Foodzy is a full-featured e-commerce platform specializing in organic food products. Built using Django's MVT (Model-View-Template) architecture, the platform provides a complete online shopping experience. Users can browse products by category, add items to their cart, manage quantities, and place orders. The admin panel allows store managers to manage inventory, track orders, and update product information. The application demonstrates strong understanding of Django ORM, session management, and database-driven web applications.",
        "features": [
            "User authentication and profile management",
            "User email verification and password reset",
            "Payment gateway integration (Stripe/SSLCommerz)",
            "Order invoice generation in PDF format",
            "Product catalog with categories and filters",
            "Shopping cart with session management",
            "Order placement and tracking system",
            "Admin panel for inventory management",
            "Product reviews and ratings",
            "Discount coupons and promotional offers",
            "Product search and filtering",
            "Responsive design with Tailwind",
            "SQLite database with Django ORM"
        ],
        "challenges": "Implementing secure session-based cart management, handling inventory updates in real-time, and creating an intuitive admin interface.",
        "tech": ["Django MVT", "Tailwind", "SQLite", "ORM"],
        "techStack": {
            "frontend": ["Django Templates", "Tailwind", "JavaScript"],
            "backend": ["Django MVT", "SQLite", "Django ORM"],
            "tools": ["Git", "Django Admin"]
        },
        "duration": "1.5 months",
        "team": "Solo Project",
        "learnings": [
            "Mastered Django MVT architecture",
            "Celery and Redis for asynchronous tasks",
            "AJAX for dynamic content updates",
            "Implemented payment gateway integration",
            "Generated invoice PDFs dynamically",
            "Implemented session-based authentication",
            "Built complex ORM queries for e-commerce logic",
            "Created responsive UI with Tailwind CSS"
        ],
        "futureFeatures": [
            "Advanced product recommendation system",
            "Dealer management and multi-vendor support",
            "Loyalty program and discount coupons",
            "Enhanced analytics dashboard for sales tracking",
            "External admin pannel for order management",
        ],
        "youtubeVideo": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "links": {
            "github": "https://github.com/ramim141",
            "live": "https://foodzy-organic.vercel.app"
        },
        "image": "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2000&auto=format&fit=crop",
        "featured": false
    },
    
    {
        "id": 3,
        "title": "Note Bank Platform",
        "category": "Full Stack (Academic Project)",
        "description": "A study resource sharing platform allowing users to upload, rate, and search notes. Implements complex file handling and user authentication.",
        "fullDescription": "Note Bank is a collaborative platform where students can share, discover, and rate study materials. Users can upload notes in various formats (PDF, DOCX, images), categorize them by subject and semester, and search through a comprehensive database of shared resources. The platform includes user authentication with JWT tokens, a rating and review system, and advanced search functionality. Built with a modern tech stack, it demonstrates proficiency in file handling, database relationships, and RESTful API design.",
        "features": [
            "User registration and login system",
            "Email verification and password reset",
            "Secure file upload and storage system",
            "Realtime notifications for uploads and reviews",
            "JWT-based authentication and authorization",
            "Advanced search with filters (subject, semester, rating)",
            "Rating and review system for notes",
            "User profile and contribution tracking",
            "Django SQLite database with optimized queries",
            "Responsive design for seamless mobile experience"
        ],
        "challenges": "Handling large file uploads efficiently, implementing secure file access control, and designing complex database relationships for categorization.",
        "tech": ["Django REST", "React.js", "PostgreSQL", "JWT"],
        "techStack": {
            "frontend": ["React.js", "Axios", "React Router", "Tailwind"],
            "backend": ["Django REST Framework", "SQLite", "JWT Authentication", "WebSockets"],
            "tools": ["Git", "pgAdmin", "Postman"]
        },
        "duration": "2 months",
        "team": "Project-300 Course",
        "learnings": [
            "Implemented secure file upload with validation",
            "Designed complex many-to-many database relationships",
            "Built advanced search with multiple filters",
            "Learned PostgreSQL optimization techniques",
            "Web Sockets for realtime notifications",
            "Role-based access control with JWT",
            "Enhanced frontend-backend integration using Axios"
        ],
        "futureFeatures": [
            "AI-powered note summarization",
            "Collaborative note editing",
            "OCR for handwritten notes",
            "Subcription model for premium content",
            "Mobile app version"
        ],
        "youtubeVideo": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "links": {
            "github": "https://github.com/ramim141",
            "live": "#"
        },
        "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2000&auto=format&fit=crop",
        "featured": false
    },
    
//     {
//     "id": 3,
//     "title": "Deed Generator System",
//     "category": "Real World Client Project",
//     "description": "A specialized PDF generation system developed for 'Multiplan Shahjalal City Ltd'. It automates the creation of rental deeds based on user input, replacing manual paperwork.",
//     "fullDescription": "This project was developed as a complete solution for Multiplan Shahjalal City Ltd to digitize their rental deed generation process. The system takes user inputs through an intuitive form interface and automatically generates professional PDF documents with all necessary legal information. Key features include dynamic field population, custom branding, multiple deed templates, and instant PDF download functionality. The application significantly reduced manual paperwork time from hours to minutes, improved accuracy, and provides a consistent format for all rental agreements.",
//     "features": [
//       "Dynamic PDF generation with custom templates",
//       "User-friendly form interface with validation",
//       "Automatic data population and formatting",
//       "Multiple deed template support",
//       "Instant download and print functionality",
//       "Responsive design for all devices"
//     ],
//     "challenges": "Handling complex Bengali text rendering in PDFs, ensuring cross-browser compatibility, and maintaining legal document standards.",
//     "tech": ["JavaScript", "HTML/CSS", "PDF Generation", "Tailwind"],
//     "techStack": {
//       "frontend": ["HTML5", "CSS3", "JavaScript ES6+", "Tailwind CSS"],
//       "libraries": ["jsPDF", "html2canvas"],
//       "tools": ["Git", "VS Code"]
//     },
//     "duration": "2 months",
//     "team": "Solo Project",
//     "learnings": [
//       "Mastered dynamic PDF generation with complex layouts",
//       "Learned handling Bengali Unicode characters in PDFs",
//       "Improved understanding of client requirements and professional communication",
//       "Gained experience in real-world project delivery and maintenance"
//     ],
//     "futureFeatures": [
//       "Digital signature integration",
//       "Email automation for deed distribution",
//       "Multi-language support (English/Bengali toggle)",
//       "Cloud storage integration for archiving"
//     ],
//     "youtubeVideo": "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     "links": {
//       "github": "https://github.com/ramim141",
//       "live": "https://deed-generator.vercel.app" 
//     },
//     "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
//     "featured": false
//   },
//   {
//     "id": 2,
//     "title": "Tutorly - E-learning Platform",
//     "category": "Full Stack (Team Project)",
//     "description": "A comprehensive LMS featuring student enrollment, video playback, quizzes, and assignment tracking. Built with a decoupled architecture using DRF and React.",
//     "fullDescription": "Tutorly is a full-featured Learning Management System designed to facilitate online education. The platform enables instructors to create courses, upload video content, design quizzes, and track student progress. Students can enroll in courses, watch educational videos, take assessments, and submit assignments. The system features a clean, intuitive interface built with React on the frontend and a robust Django REST Framework backend for API services. Authentication, authorization, and role-based access control ensure secure operations for different user types.",
//     "features": [
//       "User authentication and role-based access (Student/Instructor)",
//       "Course creation and management system",
//       "Video streaming and playback with progress tracking",
//       "Interactive quiz system with auto-grading",
//       "Assignment submission and evaluation",
//       "Real-time progress dashboard",
//       "Responsive UI for mobile and desktop"
//     ],
//     "challenges": "Implementing video streaming optimization, designing a scalable database schema for course relationships, and ensuring smooth real-time updates.",
//     "tech": ["Django REST", "React.js", "SQLite", "Axios"],
//     "techStack": {
//       "frontend": ["React.js", "React Router", "Axios", "CSS3"],
//       "backend": ["Django", "Django REST Framework", "SQLite"],
//       "tools": ["Git", "Postman", "VS Code"]
//     },
//     "duration": "3 months",
//     "team": "Team of 3",
//     "learnings": [
//       "Built RESTful APIs with Django REST Framework",
//       "Implemented token-based authentication (JWT)",
//       "Learned video streaming optimization techniques",
//       "Practiced Agile development with team collaboration"
//     ],
//     "futureFeatures": [
//       "Live class integration with WebRTC",
//       "AI-powered quiz generation",
//       "Certificate generation system",
//       "Payment gateway integration"
//     ],
//     "youtubeVideo": "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     "links": {
//       "github": "https://github.com/ramim141",
//       "live": "https://tutorly-lms.vercel.app"
//     },
//     "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop",
//     "featured": false
//   },
  
  


];

// Modal Component
const ProjectModal = ({ project, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl overflow-hidden border shadow-2xl max-h-[92vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl border-slate-700/50 shadow-cyan-500/10"
                onClick={(e) => e.stopPropagation()}
                style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#475569 #0f172a'
                }}
            >
                {/* Close Button */}
                <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute z-50 p-3 transition-all duration-300 border rounded-full shadow-lg top-6 right-6 bg-slate-800/90 backdrop-blur-md border-slate-700/50 hover:bg-red-500 hover:border-red-400 text-slate-300 hover:text-white hover:shadow-red-500/50"
                >
                    <FaTimes size={18} />
                </motion.button>

                {/* Header Image */}
                <div className="relative overflow-hidden h-72">
                    <motion.img 
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                    {project.featured && (
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute flex items-center gap-2 px-5 py-2.5 text-xs font-black tracking-wider rounded-full shadow-2xl top-6 left-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-slate-900 border-2 border-white/20"
                        >
                            <FaStar className="animate-pulse" /> CLIENT PROJECT
                        </motion.div>
                    )}
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                    {/* Title & Category */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-10"
                    >
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="inline-block px-4 py-1.5 text-xs font-black tracking-widest uppercase border rounded-full text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/40 shadow-lg shadow-cyan-500/20">
                                {project.category}
                            </span>
                            {project.duration && (
                                <span className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold border rounded-full text-blue-400 bg-blue-500/10 border-blue-500/30 backdrop-blur-sm">
                                    <BiTimeFive size={14} /> {project.duration}
                                </span>
                            )}
                            {project.team && (
                                <span className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold border rounded-full text-purple-400 bg-purple-500/10 border-purple-500/30 backdrop-blur-sm">
                                    <FaCode size={12} /> {project.team}
                                </span>
                            )}
                        </div>
                        <h2 className="mb-6 text-3xl font-black tracking-tight text-transparent md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                            {project.title}
                        </h2>
                    </motion.div>

                    {/* YouTube Video */}
                    {project.youtubeVideo && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="p-2.5 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 shadow-lg shadow-red-500/30">
                                    <FaYoutube className="text-white" size={22} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Project Walkthrough</h3>
                            </div>
                            <div className="relative overflow-hidden border shadow-2xl aspect-video rounded-2xl border-slate-700/50 shadow-cyan-500/10">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={project.youtubeVideo}
                                    title={`${project.title} Demo`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    )}

                    {/* Full Description */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-12"
                    >
                        <h3 className="flex items-center gap-4 pb-4 mb-6 text-2xl font-black text-white border-b md:text-3xl border-slate-700/50">
                            <div className="p-3 shadow-lg rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/30">
                                <FaInfoCircle size={22} />
                            </div>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Project Overview</span>
                        </h3>
                        <p className="text-base leading-relaxed md:text-lg text-slate-300">
                            {project.fullDescription}
                        </p>
                    </motion.div>

                    {/* Key Features */}
                    {project.features && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mb-12"
                        >
                            <h3 className="flex items-center gap-4 pb-4 mb-6 text-2xl font-black text-white border-b md:text-3xl border-slate-700/50">
                                <div className="p-3 shadow-lg rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-green-500/30">
                                    <FaCheckCircle size={22} />
                                </div>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Core Features</span>
                            </h3>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {project.features.map((feature, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + index * 0.05 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-start gap-4 p-5 transition-all duration-300 border shadow-lg rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-slate-700/50 hover:border-green-500/40 hover:shadow-green-500/10 backdrop-blur-sm group"
                                    >
                                        <div className="flex-shrink-0 p-2 transition-transform duration-300 rounded-lg bg-green-500/10 group-hover:scale-110">
                                            <FaCheckCircle className="text-green-400" size={18} />
                                        </div>
                                        <span className="text-slate-300 group-hover:text-white">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Challenges & Learnings */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2"
                    >
                        {/* Challenges */}
                        {project.challenges && (
                            <div className="p-6 transition-all duration-300 border shadow-xl md:p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-slate-700/50 hover:border-red-500/40 hover:shadow-red-500/10 backdrop-blur-sm">
                                <h3 className="flex items-center gap-3 mb-5 text-xl font-black text-white md:text-2xl">
                                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 shadow-lg shadow-red-500/30">
                                        <FaShieldAlt size={20} />
                                    </div>
                                    Technical Challenges
                                </h3>
                                <p className="leading-relaxed text-slate-300">
                                    {project.challenges}
                                </p>
                            </div>
                        )}
                        {/* Learnings */}
                        {project.learnings && (
                            <div className="p-6 transition-all duration-300 border shadow-xl md:p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-slate-700/50 hover:border-yellow-500/40 hover:shadow-yellow-500/10 backdrop-blur-sm">
                                <h3 className="flex items-center gap-3 mb-5 text-xl font-black text-white md:text-2xl">
                                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 shadow-lg shadow-yellow-500/30">
                                        <FaLightbulb size={20} />
                                    </div>
                                    What I Learned
                                </h3>
                                <ul className="space-y-3">
                                    {project.learnings.map((learning, index) => (
                                        <li key={index} className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-2">
                                            <div className="flex-shrink-0 p-1 mt-0.5 rounded bg-yellow-500/10">
                                                <HiSparkles className="text-yellow-400" size={16} />
                                            </div>
                                            <span className="text-sm text-slate-300">{learning}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>

                    {/* Future Features */}
                    {project.futureFeatures && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mb-12"
                        >
                            <h3 className="flex items-center gap-4 pb-4 mb-6 text-2xl font-black text-white border-b md:text-3xl border-slate-700/50">
                                <div className="p-3 shadow-lg rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/30">
                                    <FaRocket size={22} />
                                </div>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Future Enhancements</span>
                            </h3>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {project.futureFeatures.map((feature, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 + index * 0.05 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-start gap-4 p-5 transition-all duration-300 border shadow-lg rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border-slate-700/50 hover:border-indigo-500/40 hover:shadow-indigo-500/10 backdrop-blur-sm group"
                                    >
                                        <div className="flex-shrink-0 p-2 transition-transform duration-300 rounded-lg bg-indigo-500/10 group-hover:scale-110">
                                            <FaRocket className="text-indigo-400" size={16} />
                                        </div>
                                        <span className="text-slate-300 group-hover:text-white">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Tech Stack */}
                    {project.techStack && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="mb-12"
                        >
                            <h3 className="flex items-center gap-4 pb-4 mb-6 text-2xl font-black text-white border-b md:text-3xl border-slate-700/50">
                                <div className="p-3 shadow-lg rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-500/30">
                                    <BiCodeBlock size={22} />
                                </div>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Technology Stack</span>
                            </h3>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                {/* Frontend */}
                                {project.techStack.frontend && (
                                    <motion.div 
                                        whileHover={{ y: -5 }}
                                        className="p-6 transition-all duration-300 border shadow-xl rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border-slate-700/50 hover:border-blue-500/40 hover:shadow-blue-500/20 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="p-2 rounded-lg bg-blue-500/10">
                                                <FaCode className="text-blue-400" size={20} />
                                            </div>
                                            <h4 className="text-lg font-black text-white">Frontend</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.frontend.map((tech, i) => (
                                                <span key={i} className="px-3 py-1.5 text-xs font-bold rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                {/* Backend */}
                                {project.techStack.backend && (
                                    <motion.div 
                                        whileHover={{ y: -5 }}
                                        className="p-6 transition-all duration-300 border shadow-xl rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border-slate-700/50 hover:border-green-500/40 hover:shadow-green-500/20 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="p-2 rounded-lg bg-green-500/10">
                                                <FaDatabase className="text-green-400" size={20} />
                                            </div>
                                            <h4 className="text-lg font-black text-white">Backend</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.backend.map((tech, i) => (
                                                <span key={i} className="px-3 py-1.5 text-xs font-bold rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                {/* Libraries/Tools */}
                                {(project.techStack.libraries || project.techStack.tools) && (
                                    <motion.div 
                                        whileHover={{ y: -5 }}
                                        className="p-6 transition-all duration-300 border shadow-xl rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border-slate-700/50 hover:border-amber-500/40 hover:shadow-amber-500/20 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="p-2 rounded-lg bg-amber-500/10">
                                                <FaCog className="text-amber-400" size={20} />
                                            </div>
                                            <h4 className="text-lg font-black text-white">Tools & Libraries</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {[...(project.techStack.libraries || []), ...(project.techStack.tools || [])].map((tech, i) => (
                                                <span key={i} className="px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Action Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4 pt-8 border-t border-slate-700/50"
                    >
                        <motion.a 
                            href={project.links.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-8 py-4 text-sm font-bold transition-all border shadow-lg rounded-xl bg-slate-800/80 backdrop-blur-sm text-slate-200 border-slate-700 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-cyan-500/20"
                        >
                            <FaGithub size={22} /> View Source Code
                        </motion.a>
                        {project.links.live && project.links.live !== "#" && (
                            <motion.a 
                                href={project.links.live} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-8 py-4 text-sm font-bold text-white transition-all shadow-2xl rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/30 hover:shadow-cyan-500/50"
                            >
                                <FaExternalLinkAlt size={20} /> Visit Live Site
                            </motion.a>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="relative py-24 overflow-hidden bg-[#020617] selection:bg-cyan-500/30">
            
            {/* Background Grid & Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            {/* Header */}
            <div className="container relative z-10 px-6 mx-auto mb-20 text-center max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-slate-900/80 border border-slate-800/50 backdrop-blur-md">
                        <span className="relative flex w-2 h-2">
                            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400"></span>
                            <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-500"></span>
                        </span>
                        <span className="text-[10px] font-bold tracking-widest uppercase  sm:text-xs text-slate-400">Case Studies</span>
                    </div>

                    <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Projects</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-400">
                        From real-world client deliverables to complex full-stack applications, here's a showcase of my technical journey.
                    </p>
                </motion.div>
            </div>

            <div className="container relative z-10 px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {projectData
                        .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
                        .map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                                project.featured 
                                    ? 'md:col-span-2 md:flex md:items-stretch' 
                                    : ''
                            }`}
                        >
                            {/* Card Background */}
                            <div className="absolute inset-0 transition-colors border bg-slate-900/40 backdrop-blur-md border-slate-800/50 group-hover:bg-slate-800/60 group-hover:border-slate-600/50"></div>
                            
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-2xl group-hover:opacity-100 -z-10"></div>

                            {/* Image Section */}
                            <div className={`relative overflow-hidden ${project.featured ? 'md:w-1/2 h-72 md:h-auto' : 'h-56 w-full'}`}>
                                <div className="absolute inset-0 z-10 transition-colors bg-slate-900/30 group-hover:bg-slate-900/10"></div>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="relative object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                                />
                                
                                {/* Client Badge */}
                                {project.featured && (
                                    <div className="absolute z-20 flex items-center gap-2 px-4 py-2 text-xs font-black tracking-wider rounded-full shadow-xl top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 backdrop-blur-md">
                                        <FaStar className="animate-pulse" /> CLIENT PROJECT
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className={`relative z-10 p-8 flex flex-col ${project.featured ? 'md:w-1/2' : ''}`}>
                                
                                {/* Category Tag */}
                                <div className="mb-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] lg:text-xs font-bold tracking-widest uppercase border rounded-full text-cyan-400 bg-cyan-500/10 border-cyan-500/30">
                                        <div className="relative flex w-2 h-2">
                                            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400"></span>
                                            <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-500"></span>
                                        </div>
                                        <span>{project.category}</span>
                                    </div>
                                </div>

                                <h3 className="mb-4 text-lg font-bold text-white transition-colors sm:text-xl md:text-2xl lg:text-3xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500">
                                    {project.title}
                                </h3>
                                
                                <p className="flex-grow mb-6 text-sm leading-relaxed sm:text-base text-slate-400 group-hover:text-slate-300">
                                    {project.description}
                                </p>

                                {/* Tech Stack Pills */}
                                <div className="grid grid-cols-3 gap-1.5 pb-6 mb-6 border-b md:grid-cols-3 md:gap-2 lg:grid-cols-5 place-items-center border-slate-700/50">
                                    {project.tech.map((t, i) => (
                                        <span 
                                            key={i} 
                                            className="w-full px-2 py-1 text-[10px] md:px-3 md:py-1.5 md:text-xs font-semibold text-center transition-colors border rounded-lg bg-slate-800/80 text-slate-300 border-slate-700/50 group-hover:border-slate-600 group-hover:bg-slate-800"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 sm:gap-3">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-5 text-sm font-bold transition-all rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                                    >
                                        <FaInfoCircle size={16} /> <span>View Details</span>
                                    </button>
                                    <a 
                                        href={project.links.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-5 text-sm font-bold transition-all border rounded-lg bg-slate-800/80 text-slate-200 border-slate-700 hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-800"
                                    >
                                        <FaGithub size={18} /> <span className="hidden sm:inline">Code</span>
                                    </a>
                                    {project.links.live && project.links.live !== "#" && (
                                        <a 
                                            href={project.links.live} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-5 text-sm font-bold transition-all border rounded-lg bg-slate-800/80 text-slate-200 border-slate-700 hover:border-green-500 hover:text-green-400 hover:bg-slate-800"
                                        >
                                            <FaExternalLinkAlt size={16} /> <span className="hidden sm:inline">Live</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub More Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a 
                        href="https://github.com/ramim141" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold transition-all border rounded-full group bg-slate-900/50 backdrop-blur-md border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500 hover:bg-slate-800"
                    >
                        <FaGithub size={20} className="transition-transform group-hover:scale-110" />
                        View More on GitHub
                        <FaExternalLinkAlt size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence mode="wait">
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
            <ScrollIndicator label="About Me" />
        </section>
    );
};

export default Projects;