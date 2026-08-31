import React from 'react';
import { motion } from 'framer-motion';
import Achievements from './Achievements';

const educations = [
    {
        id: 1,
        degree: 'Embroidery Designing',
        institution: 'Iman Arts Academy',
        location: 'Lahore, Pakistan',
        date: '2009',
        cgpa: null,
        type: 'primary',
        icon: 'fa-pen-nib',
        description: 'Professional training in embroidery designing and digitizing that became the foundation of my career: sketch punching, logo punching, stitch types and preparing production-ready designs.',
        courses: ['Embroidery Designing', 'Sketch Punching', 'Digitizing Basics', 'Stitch Types']
    },
    {
        id: 2,
        degree: 'FA (Arts)',
        institution: 'Allama Iqbal Open University (AIOU)',
        location: 'Lahore, Pakistan',
        date: 'Completed',
        cgpa: null,
        type: 'secondary',
        icon: 'fa-book-open',
        description: 'Completed intermediate education in Arts through AIOU while working full time in the embroidery industry, strengthening my communication and organizational skills.',
        courses: ['Arts', 'Urdu', 'English']
    },
    {
        id: 3,
        degree: 'Matriculation (Science)',
        institution: 'BISE Lahore',
        location: 'Lahore, Pakistan',
        date: 'Completed',
        cgpa: null,
        type: 'slate',
        icon: 'fa-school',
        description: 'Completed secondary education with Science from the Board of Intermediate and Secondary Education, Lahore, building the analytical base I use daily in design and machine planning.',
        courses: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
    }
];

const EducationPage = () => {
    return (
        <>
            <section className="pt-32 pb-24 relative z-10 min-h-screen">
                <div className="max-w-6xl mx-auto px-6">
                    <header className="text-center mb-20" data-aos="fade-down">
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
                            Academic <span className="text-gradient">Background</span>
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                            My academic and professional training, and the foundation that shaped my career as an embroidery designer.
                        </p>
                    </header>

                    <div className="flex flex-col gap-10">
                        {educations.map((edu, index) => {
                            const cardVariants = {
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: index * 0.2, type: 'spring', bounce: 0.4 } }
                            };

                            let borderColor = 'border-slate-300 dark:border-slate-700';
                            let badgeColor = 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400';
                            let pillTheme = 'bg-slate-400/10 border-slate-400/20 text-slate-600 dark:text-slate-400 hover:bg-slate-400/20';

                            if (edu.type === 'primary') {
                                borderColor = 'border-primary/50';
                                badgeColor = 'bg-primary/20 text-primary';
                                pillTheme = 'bg-primary/10 border-primary/20 text-primary hover:bg-primary/20';
                            } else if (edu.type === 'secondary') {
                                borderColor = 'border-secondary/50';
                                badgeColor = 'bg-secondary/20 text-secondary';
                                pillTheme = 'bg-secondary/10 border-secondary/20 text-secondary hover:bg-secondary/20';
                            }

                            return (
                                <motion.div
                                    key={edu.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={cardVariants}
                                    className={`glass-panel p-6 md:p-10 rounded-3xl interactive shadow-xl border border-slate-200 dark:border-slate-800/80 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 w-full text-left`}
                                >
                                    {/* Golden outline SVG animation overlay */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl" style={{ zIndex: 10 }}>
                                        <rect
                                            x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="23" ry="23"
                                            fill="none"
                                            stroke="url(#goldGradient)"
                                            strokeWidth="2"
                                            strokeDasharray="4000"
                                            strokeDashoffset="4000"
                                            className="transition-[stroke-dashoffset] duration-[1500ms] ease-in-out group-hover:[stroke-dashoffset:0]"
                                        />
                                        <defs>
                                            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#fde047" /> {/* yellow-300 */}
                                                <stop offset="50%" stopColor="#eab308" /> {/* yellow-500 */}
                                                <stop offset="100%" stopColor="#ca8a04" /> {/* yellow-600 */}
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Background blur element */}
                                    <div className={`absolute -right-10 -top-10 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 ${edu.type === 'primary' ? 'bg-primary' : edu.type === 'secondary' ? 'bg-secondary' : 'bg-slate-500'}`}></div>
                                    <div className={`absolute -left-10 -bottom-10 w-48 h-48 rounded-full blur-3xl opacity-5 group-hover:opacity-20 transition-opacity duration-500 ${edu.type === 'primary' ? 'bg-blue-500' : edu.type === 'secondary' ? 'bg-purple-500' : 'bg-slate-400'}`}></div>

                                    <div className="flex flex-col md:flex-row gap-8 relative z-20">
                                        {/* Left Side: Icon & Meta */}
                                        <div className="flex flex-col md:w-56 shrink-0 gap-5 items-start">
                                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${edu.type === 'primary' ? 'bg-gradient-to-br from-primary to-blue-600' : edu.type === 'secondary' ? 'bg-gradient-to-br from-secondary to-purple-600' : 'bg-gradient-to-br from-slate-400 to-slate-600'}`}>
                                                <i className={`fas ${edu.icon}`}></i>
                                            </div>
                                            <div className="flex flex-col gap-3 w-full">
                                                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold w-fit ${badgeColor}`}>
                                                    <i className="far fa-calendar-alt"></i>
                                                    <span>{edu.date}</span>
                                                </div>
                                                {edu.cgpa && (
                                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 w-fit">
                                                        <i className="fas fa-star text-yellow-500"></i>
                                                        <span>CGPA: {edu.cgpa}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right Side: Content */}
                                        <div className="flex-1 flex flex-col md:border-l border-slate-200 dark:border-slate-700 md:pl-8 justify-center">
                                            <h3 className="text-3xl font-extrabold mb-2 text-slate-800 dark:text-white group-hover:text-primary transition-colors duration-300">
                                                {edu.degree}
                                            </h3>
                                            <p className={`text-xl font-bold mb-3 ${edu.type === 'primary' ? 'text-primary' : edu.type === 'secondary' ? 'text-secondary' : 'text-slate-400'}`}>
                                                {edu.institution}
                                            </p>
                                            <p className="text-sm font-medium opacity-80 mb-4 tracking-wide flex items-center">
                                                <i className="fas fa-map-marker-alt mr-2 text-red-500"></i>
                                                {edu.location}
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                                                {edu.description}
                                            </p>

                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Key Subjects</p>
                                                <div className="flex flex-wrap gap-2 text-sm font-medium">
                                                    {edu.courses.map((course, i) => (
                                                        <span key={i} className={`px-3 py-1.5 rounded-lg border transition-colors duration-300 ${pillTheme}`}>
                                                            {course}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Achievements />
        </>
    );
};

export default EducationPage;
