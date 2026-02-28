import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        title: "Associate Software Developer",
        company: "Wizmen Systems, Lahore",
        date: "July 2025 – Present",
        type: "primary",
        icon: "fa-laptop-code",
        points: [
            "Implemented activity-tracking mechanisms to analyze 50+ user behavior patterns",
            "Designed 10+ dashboards and graphs using Oracle Apex queries, reducing data retrieval time by 30%",
            "Generated 10+ monthly reports utilizing SQL formulas and Bootstrap Tables"
        ]
    },
    {
        id: 2,
        title: "Graphic Designer",
        company: "Rafiperr Global Entertainment",
        date: "Jan 2025 – Feb 2025",
        type: "secondary",
        icon: "fa-palette",
        points: [
            "Designed branding materials and social media creatives using AI, Photoshop & Illustrator",
            "Collaborated with marketing teams to align visuals with brand identity"
        ]
    },
    {
        id: 3,
        title: "Frontend Developer",
        company: "Auraniums, Lahore",
        date: "June 2024 – September 2024",
        type: "primary",
        icon: "fa-code",
        points: [
            "Delivered 4+ responsive client websites with cross-browser compatibility",
            "Redesigned the company website, increasing page load speed by 35%"
        ]
    },
    {
        id: 4,
        title: "MERN Stack Developer Intern",
        company: "Code Graper's, Lahore",
        date: "2023",
        type: "secondary",
        icon: "fa-server",
        points: [
            "Developed a full-stack To-Do List application using Node.js and MongoDB supporting 100+ concurrent users",
            "Worked with 8+ RESTful APIs, backend routing, and database schema design"
        ]
    }
];

const ExperiencePage = () => {
    return (
        <main className="pt-32 pb-24 relative z-10 min-h-screen">
            <div className="max-w-5xl mx-auto px-6">
                <header className="text-center mb-20" data-aos="fade-down">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
                        My <span className="text-gradient">Professional</span> Journey
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        A detailed timeline of my roles, responsibilities, and key achievements throughout my career.
                    </p>
                </header>

                <div className="relative">
                    {/* The Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2 rounded-full hidden md:block"></div>
                    {/* Mobile Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2 rounded-full md:hidden"></div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            const cardVariants = {
                                hidden: { opacity: 0, x: isEven ? 50 : -50, y: 20 },
                                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, type: 'spring', bounce: 0.4 } }
                            };

                            // Adjust direction for mobile so all cards come from the right
                            const mobileCardVariants = {
                                hidden: { opacity: 0, x: 50, y: 20 },
                                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, type: 'spring', bounce: 0.4 } }
                            };

                            const dotVariants = {
                                hidden: { scale: 0 },
                                visible: { scale: 1, transition: { delay: 0.3, type: 'spring' } }
                            };

                            return (
                                <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Timeline Dot */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        variants={dotVariants}
                                        className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-lightBg dark:border-darkBg shadow-[0_0_15px_rgba(0,0,0,0.3)] flex items-center justify-center z-10 ${exp.type === 'primary' ? 'bg-primary shadow-primary/50' : 'bg-secondary shadow-secondary/50'}`}
                                    >
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </motion.div>

                                    {/* Content Card */}
                                    <div className="w-full md:w-1/2 pl-20 md:pl-0">
                                        <div className={`flex ${isEven ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'}`}>
                                            <motion.div
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, margin: "-50px" }}
                                                variants={typeof window !== 'undefined' && window.innerWidth < 768 ? mobileCardVariants : cardVariants}
                                                className="glass-panel p-8 rounded-3xl relative w-full interactive group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                                style={{ borderTop: `4px solid ${exp.type === 'primary' ? '#0ea5e9' : '#a855f7'}` }}
                                            >
                                                {/* Fancy background glow */}
                                                <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 opacity-10 rounded-full blur-3xl pointer-events-none group-hover:opacity-20 transition-opacity ${exp.type === 'primary' ? 'bg-primary' : 'bg-secondary'}`}></div>

                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white shadow-lg ${exp.type === 'primary' ? 'bg-gradient-to-br from-primary to-blue-600' : 'bg-gradient-to-br from-secondary to-purple-600'}`}>
                                                        <i className={`fas ${exp.icon}`}></i>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                                                        <span className={`text-sm font-semibold tracking-wider uppercase ${exp.type === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                                                            {exp.date}
                                                        </span>
                                                    </div>
                                                </div>

                                                <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-6 flex items-center gap-2">
                                                    <i className="fas fa-building text-slate-400"></i> {exp.company}
                                                </p>

                                                <ul className="space-y-3">
                                                    {exp.points.map((point, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm md:text-base">
                                                            <i className={`fas fa-check-circle mt-1 flex-shrink-0 ${exp.type === 'primary' ? 'text-primary/70' : 'text-secondary/70'}`}></i>
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ExperiencePage;
