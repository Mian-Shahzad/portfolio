import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative z-10">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Journey</span></h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">

                    {/* Item 1 */}
                    <div className="relative pl-8 md:pl-0 w-full md:w-1/2 md:pr-12 md:text-right" data-aos="fade-right">
                        <div className="absolute top-0 left-[-9px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-primary border-4 border-lightBg dark:border-darkBg shadow-[0_0_10px_#0ea5e9]"></div>
                        <div className="glass-panel p-6 rounded-2xl hover:shadow-lg hover:shadow-primary/10 transition-shadow interactive">
                            <span className="text-sm font-semibold text-primary mb-1 block">July 2025 – Present</span>
                            <h3 className="text-xl font-bold">Associate Software Developer</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Wizmen Systems, Lahore</p>
                            <ul className="text-slate-600 dark:text-slate-300 list-disc list-inside text-sm md:text-base space-y-1">
                                <li>Implemented activity-tracking mechanisms to analyze 50+ user behavior patterns</li>
                                <li>Designed 10+ dashboards and graphs using Oracle Apex queries, reducing data retrieval time by 30%</li>
                                <li>Generated 10+ monthly reports utilizing SQL formulas and Bootstrap Tables</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="relative pl-8 md:pl-0 w-full md:w-1/2 md:ml-auto md:pl-12" data-aos="fade-left">
                        <div className="absolute top-0 left-[-9px] md:left-[-9px] w-4 h-4 rounded-full bg-secondary border-4 border-lightBg dark:border-darkBg shadow-[0_0_10px_#a855f7]"></div>
                        <div className="glass-panel p-6 rounded-2xl hover:shadow-lg hover:shadow-secondary/10 transition-shadow interactive">
                            <span className="text-sm font-semibold text-secondary mb-1 block">Jan 2025 – Feb 2025</span>
                            <h3 className="text-xl font-bold">Graphic Designer</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Rafiperr Global Entertainment</p>
                            <ul className="text-slate-600 dark:text-slate-300 list-disc list-inside text-sm md:text-base space-y-1">
                                <li>Designed branding materials and social media creatives using AI, Photoshop & Illustrator</li>
                                <li>Collaborated with marketing teams to align visuals with brand identity</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="relative pl-8 md:pl-0 w-full md:w-1/2 md:pr-12 md:text-right" data-aos="fade-right">
                        <div className="absolute top-0 left-[-9px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-primary border-4 border-lightBg dark:border-darkBg shadow-[0_0_10px_#0ea5e9]"></div>
                        <div className="glass-panel p-6 rounded-2xl hover:shadow-lg hover:shadow-primary/10 transition-shadow interactive">
                            <span className="text-sm font-semibold text-primary mb-1 block">June 2024 – September 2024</span>
                            <h3 className="text-xl font-bold">Frontend Developer</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Auraniums, Lahore</p>
                            <ul className="text-slate-600 dark:text-slate-300 list-disc list-inside text-sm md:text-base space-y-1">
                                <li>Delivered 4+ responsive client websites with cross-browser compatibility</li>
                                <li>Redesigned the company website, increasing page load speed by 35%</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="relative pl-8 md:pl-0 w-full md:w-1/2 md:ml-auto md:pl-12" data-aos="fade-left">
                        <div className="absolute top-0 left-[-9px] md:left-[-9px] w-4 h-4 rounded-full bg-secondary border-4 border-lightBg dark:border-darkBg shadow-[0_0_10px_#a855f7]"></div>
                        <div className="glass-panel p-6 rounded-2xl hover:shadow-lg hover:shadow-secondary/10 transition-shadow interactive">
                            <span className="text-sm font-semibold text-secondary mb-1 block">2023</span>
                            <h3 className="text-xl font-bold">MERN Stack Developer Intern</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Code Graper's, Lahore</p>
                            <ul className="text-slate-600 dark:text-slate-300 list-disc list-inside text-sm md:text-base space-y-1">
                                <li>Developed a full-stack To-Do List application using Node.js and MongoDB supporting 100+ concurrent users</li>
                                <li>Worked with 8+ RESTful APIs, backend routing, and database schema design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
