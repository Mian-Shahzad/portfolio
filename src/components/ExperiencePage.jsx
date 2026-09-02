import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        title: 'Deputy Manager Embroidery Digitizer',
        company: 'Outfitters Pvt Ltd, Lahore (Garments Manufacturing)',
        date: 'May 2016 – Present',
        type: 'primary',
        icon: 'fa-pen-nib',
        stack: ['Wilcom W9/W10', 'Wilcom E2/E4', 'Dahao / Emcad', 'Laser & Beads', 'Sequence Work'],
        points: [
            'Serving as Team Lead in the Outfitters product development department',
            'Handle laser work and beads work, and discuss garments according to planning',
            'Change designs as per fabric width and length, and adjust designs as per costing',
            'Plan machines with the team: divider work, box cut, frame work and semi stitch',
            'Grade design sizes according to pattern and edit designs as per required stitch size',
            'Check and adjust every design so it runs smoothly on the machines',
            'Set designs according to machine size: 12 inch, 13 inch, 16 inch and 18 inch',
            'Set sequence work designs in 3mm, 5mm, 7mm and 9mm as per sample',
            'Research new embroidery techniques and prepare samples',
            'Prepare all necessary weekly and monthly reports',
            'Send designs by email to all outsource vendors'
        ]
    },
    {
        id: 2,
        title: 'Senior Embroidery Digitizer',
        company: 'Brothers Embroidery Pvt Ltd (Garments Manufacturing)',
        date: 'Feb 2011 – Apr 2016',
        type: 'secondary',
        icon: 'fa-vector-square',
        stack: ['Sketch Punch', 'Coral File Punch', 'Logo Punching', 'Sampling'],
        points: [
            'Served as Embroidery Digitizer and Programmer',
            'Sketch punching and Coral file punching for production',
            'Punched logos of all kinds and prepared sample punches',
            'Researched new embroidery techniques for the production floor'
        ]
    },
    {
        id: 3,
        title: 'Junior Embroidery Digitizer',
        company: 'Waheed Embroidery Pvt Ltd (Garments Manufacturing)',
        date: 'May 2010 – Jan 2011',
        type: 'primary',
        icon: 'fa-shirt',
        stack: ['Sketch Punch', 'Coral File Punch', 'Logo Punching'],
        points: [
            'Served as Embroidery Digitizer and Programmer',
            'Sketch punching and Coral file punching',
            'Prepared sample punches and punched logos of all kinds'
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
                        A detailed timeline of my roles, responsibilities, and key achievements across 15+ years in the embroidery and garments industry.
                    </p>
                </header>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {experiences.map((exp, index) => {
                            const cardVariants = {
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', bounce: 0.4, delay: index * 0.1 } }
                            };

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={cardVariants}
                                    className="glass-panel p-8 rounded-3xl relative w-full interactive group hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 transform hover:-translate-y-2 text-left flex flex-col h-full"
                                    style={{ borderTop: `4px solid ${exp.type === 'primary' ? '#0ea5e9' : '#a855f7'}` }}
                                >
                                    {/* Fancy background glow */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-3xl pointer-events-none group-hover:opacity-20 transition-opacity ${exp.type === 'primary' ? 'bg-primary' : 'bg-secondary'}`}></div>

                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white shadow-lg flex-shrink-0 ${exp.type === 'primary' ? 'bg-gradient-to-br from-primary to-blue-600' : 'bg-gradient-to-br from-secondary to-purple-600'}`}>
                                            <i className={`fas ${exp.icon}`}></i>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold leading-tight">{exp.title}</h3>
                                            <span className={`text-sm font-semibold tracking-wider uppercase ${exp.type === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                                                {exp.date}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-6 flex items-center gap-2">
                                        <i className="fas fa-building text-slate-400"></i> {exp.company}
                                    </p>

                                    <ul className="space-y-3 flex-grow">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm md:text-base">
                                                <i className={`fas fa-check-circle mt-1 flex-shrink-0 ${exp.type === 'primary' ? 'text-primary/70' : 'text-secondary/70'}`}></i>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack Row */}
                                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
                                        {exp.stack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className={`px-3 py-1.5 text-xs font-bold rounded-full border border-slate-200 dark:border-white/10 glass-panel cursor-default transition-all duration-300 hover:-translate-y-1 ${exp.type === 'primary'
                                                    ? 'hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:border-primary/50 text-slate-700 dark:text-slate-200 hover:text-primary'
                                                    : 'hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:border-secondary/50 text-slate-700 dark:text-slate-200 hover:text-secondary'
                                                    }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ExperiencePage;
