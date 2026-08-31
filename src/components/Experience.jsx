import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative z-10">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Journey</span></h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="relative space-y-12 ml-3 md:ml-0">
                    {/* Centered Timeline Line for Desktop */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-primary/30 transform -translate-x-1/2"></div>
                    {/* Left Timeline Line for Mobile */}
                    <div className="md:hidden absolute top-0 bottom-0 left-0 w-[2px] bg-primary/30 transform -translate-x-1/2"></div>

                    {/* Item 1 */}
                    <div className="relative pl-8 md:pl-0 w-full md:w-1/2 md:pr-12 md:text-right" data-aos="fade-right">
                        <div className="absolute top-0 left-[-9px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-primary border-4 border-lightBg dark:border-darkBg shadow-[0_0_10px_#0ea5e9]"></div>
                        <div className="glass-panel p-6 rounded-2xl hover:shadow-lg hover:shadow-primary/10 transition-shadow interactive">
                            <span className="text-sm font-semibold text-primary mb-1 block">May 2016 – Present</span>
                            <h3 className="text-xl font-bold">Deputy Manager Embroidery Digitizer</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Outfitters Pvt Ltd, Lahore</p>
                            <ul className="text-slate-600 dark:text-slate-300 list-disc list-inside text-sm md:text-base space-y-1">
                                <li>Serving as Team Lead in the Outfitters product development department</li>
                                <li>Handle laser work, beads work, design grading and machine planning</li>
                                <li>Prepare weekly and monthly reports and send designs to all outsource vendors</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="relative pl-8 md:pl-0 w-full md:w-1/2 md:ml-auto md:pl-12" data-aos="fade-left">
                        <div className="absolute top-0 left-[-9px] md:left-[-9px] w-4 h-4 rounded-full bg-secondary border-4 border-lightBg dark:border-darkBg shadow-[0_0_10px_#a855f7]"></div>
                        <div className="glass-panel p-6 rounded-2xl hover:shadow-lg hover:shadow-secondary/10 transition-shadow interactive">
                            <span className="text-sm font-semibold text-secondary mb-1 block">Feb 2011 – Apr 2016</span>
                            <h3 className="text-xl font-bold">Senior Embroidery Digitizer</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Brothers Embroidery Pvt Ltd</p>
                            <ul className="text-slate-600 dark:text-slate-300 list-disc list-inside text-sm md:text-base space-y-1">
                                <li>Sketch punching, Coral file punching and logo punching of all kinds</li>
                                <li>Prepared sample punches and researched new embroidery techniques</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="relative pl-8 md:pl-0 w-full md:w-1/2 md:pr-12 md:text-right" data-aos="fade-right">
                        <div className="absolute top-0 left-[-9px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-primary border-4 border-lightBg dark:border-darkBg shadow-[0_0_10px_#0ea5e9]"></div>
                        <div className="glass-panel p-6 rounded-2xl hover:shadow-lg hover:shadow-primary/10 transition-shadow interactive">
                            <span className="text-sm font-semibold text-primary mb-1 block">May 2010 – Jan 2011</span>
                            <h3 className="text-xl font-bold">Junior Embroidery Digitizer</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Waheed Embroidery Pvt Ltd</p>
                            <ul className="text-slate-600 dark:text-slate-300 list-disc list-inside text-sm md:text-base space-y-1">
                                <li>Served as Embroidery Digitizer and Programmer on the production floor</li>
                                <li>Sketch punch, Coral file punch and sample punch for daily orders</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="relative pl-8 md:pl-0 w-full md:w-1/2 md:ml-auto md:pl-12" data-aos="fade-left">
                        <div className="absolute top-0 left-[-9px] md:left-[-9px] w-4 h-4 rounded-full bg-secondary border-4 border-lightBg dark:border-darkBg shadow-[0_0_10px_#a855f7]"></div>
                        <div className="glass-panel p-6 rounded-2xl hover:shadow-lg hover:shadow-secondary/10 transition-shadow interactive">
                            <span className="text-sm font-semibold text-secondary mb-1 block">2009</span>
                            <h3 className="text-xl font-bold">Embroidery Designing Course</h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Iman Arts Academy, Lahore</p>
                            <ul className="text-slate-600 dark:text-slate-300 list-disc list-inside text-sm md:text-base space-y-1">
                                <li>Completed professional training in embroidery designing and digitizing</li>
                                <li>Learned stitch types, punching fundamentals and production-ready design preparation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
