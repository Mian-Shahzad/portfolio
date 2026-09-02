import React from 'react';

const Achievements = () => {
    return (
        <section className="py-24 relative z-10 bg-slate-100/50 dark:bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Expertise &amp; <span className="text-gradient">Achievements</span></h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
                    <div className="glass-panel px-6 py-4 rounded-full flex items-center gap-3 interactive shadow-lg">
                        <i className="fas fa-award text-yellow-500 text-2xl"></i>
                        <span className="font-bold">Embroidery Designing &ndash; Iman Arts Academy (2009)</span>
                    </div>
                    <div className="glass-panel px-6 py-4 rounded-full flex items-center gap-3 interactive shadow-lg">
                        <i className="fas fa-certificate text-blue-500 text-2xl"></i>
                        <span className="font-bold">Wilcom Embroidery Software (W9 &middot; W10 &middot; E2 &middot; E4)</span>
                    </div>
                    <div className="glass-panel px-6 py-4 rounded-full flex items-center gap-3 interactive shadow-lg">
                        <i className="fas fa-gem text-purple-500 text-2xl"></i>
                        <span className="font-bold">Dahao / Emcad Beads Embroidery Software</span>
                    </div>
                    <div className="glass-panel px-6 py-4 rounded-full flex items-center gap-3 interactive shadow-lg">
                        <i className="fas fa-trophy text-orange-500 text-2xl"></i>
                        <span className="font-bold">Team Lead &ndash; Outfitters Product Development</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
