import React from 'react';
import { motion } from 'framer-motion';

const myProjects = [
    {
        id: 1,
        title: "Chrome Extensions",
        tag: "V3 Extension",
        year: "2024",
        desc: "Developed production-ready extensions: Daily Expense Manager for financial tracking and Font Changer for dynamic webpage font customization.",
        tech: ["Chrome API", "JavaScript", "HTML/CSS"],
        type: "secondary",
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Hospital Management System",
        tag: "Full Stack",
        year: "2024",
        desc: "A comprehensive web-based management solution for healthcare providers. Developed modules for real-time patient registration, doctor scheduling, and automated billing using SQL and modern JavaScript.",
        tech: ["JavaScript", "SQL Database", "Admin Dashboard", "Node.js"],
        type: "primary",
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Digital Khata",
        tag: "Finance",
        year: "2024",
        desc: "A specialized high-performance Accounting System for managing daily 'Leen Deen' (Debit/Credit) transactions. Features automated balancing, secure user management with SQL/XAMPP, and one-click printable invoices.",
        tech: ["React.js", "SQL/XAMPP", "Financial Log", "Print API"],
        type: "secondary",
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Auraniums Portfolio Redesign",
        tag: "Frontend",
        year: "2024",
        desc: "Redesigned the company website for Auraniums, focusing on modern aesthetics and performance, increasing page load speed by 35%.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion"],
        type: "primary",
        link: "#",
        github: "#"
    },
    {
        id: 5,
        title: "Wizmen Reporting Dashboard",
        tag: "Enterprise",
        year: "2025",
        desc: "Designed 10+ dashboards and graphs using Oracle Apex queries. Generates monthly reports utilizing SQL formulas and Bootstrap Tables.",
        tech: ["Oracle Apex", "SQL", "Bootstrap"],
        type: "secondary",
        link: "#",
        github: "#"
    },
    {
        id: 6,
        title: "MERN To-Do App",
        tag: "Full Stack",
        year: "2023",
        desc: "Developed a full-stack To-Do List application supporting 100+ concurrent users with JWT authentication and RESTful APIs.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        type: "primary",
        link: "#",
        github: "#"
    }
];

const ProjectsPage = () => {
    return (
        <main className="pt-32 pb-24 relative z-10 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <header className="text-center mb-20" data-aos="fade-down">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
                        Showcase <span className="text-gradient">Projects</span>
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        A curated collection of my best work, spanning frontend magic to complex backend architectures.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {myProjects.map((project, index) => {
                        const cardVariants = {
                            hidden: { opacity: 0, scale: 0.9, y: 30 },
                            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1, type: 'spring' } }
                        };

                        return (
                            <motion.div
                                key={project.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                className="glass-panel rounded-3xl overflow-hidden shadow-xl flex flex-col interactive group relative h-full"
                            >
                                <div className="p-8 relative z-20 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`px-3 py-1 text-xs font-bold rounded-full ${project.type === 'primary' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                                            {project.tag}
                                        </div>
                                        <span className="text-sm font-semibold text-slate-400">{project.year}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>

                                    <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed text-sm">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto mb-6">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                        <a href={project.github} className="text-slate-500 hover:text-primary transition-colors font-semibold text-sm flex items-center gap-2">
                                            <i className="fab fa-github text-lg"></i> Code
                                        </a>
                                        <a href={project.link} className="text-slate-500 hover:text-secondary transition-colors font-semibold text-sm flex items-center gap-2">
                                            <i className="fas fa-external-link-alt text-lg"></i> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
