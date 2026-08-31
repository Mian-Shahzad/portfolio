import React from 'react';

const softSkills = [
    "Communication",
    "Ability to Work Under Pressure",
    "Decision Making",
    "Time Management",
    "Team Lead",
    "Adaptability",
    "Leadership",
    "Conflict Resolution"
];

const interests = ["Book Reading", "Browsing", "Gaming", "Photography", "YouTube Vlogging"];

const SkillsPage = () => {
    return (
        <>
            <header className="pt-36 pb-16 relative z-10 text-center">
                <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
                    {/* Large Avatar Feature */}
                    <div className="mb-10 flex justify-center" data-aos="zoom-in">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-panel border-4 border-primary/30 p-3 shadow-2xl shadow-primary/20 group interactive transition-colors duration-500 hover:border-primary">
                            <img src="/w.png" alt="Faryad Ali Sketch"
                                className="w-full h-full object-cover rounded-[50%] bg-white dark:bg-slate-800 transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4" data-aos="fade-down" data-aos-delay="100">
                        My <span className="text-gradient">Skills</span> &amp; Software
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl text-center mx-auto" data-aos="fade-up" data-aos-delay="200">
                        A complete breakdown of the embroidery software, machine knowledge and management skills I use to deliver production-ready designs on time.
                    </p>
                </div>
            </header>

            <section className="py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-6 space-y-20">

                    {/* 1. Embroidery Digitizing */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" data-aos="fade-up">
                        <div className="lg:col-span-4 space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center text-left justify-center text-3xl text-primary mb-6">
                                <i className="fas fa-pen-nib"></i>
                            </div>
                            <h2 className="text-3xl font-bold">Embroidery Digitizing &amp; Punching</h2>
                            <p className="text-slate-500 dark:text-slate-400">
                                From a plain sketch to a design that runs clean on the machine. I punch logos of all kinds, edit designs to the required stitch size, grade sizes according to pattern, and check every file before it reaches production.
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="glass-panel p-8 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-pen-nib text-4xl text-blue-400 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Wilcom W9 / W10</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-vector-square text-4xl text-green-500 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Wilcom E2 / E4</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-gem text-4xl text-purple-500 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Dahao / Emcad Beads</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-pencil-ruler text-4xl text-yellow-400 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Sketch Punch</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-bezier-curve text-4xl text-orange-500 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Coral File Punch</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-copyright text-4xl text-blue-500 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Logo Punching</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-ruler-combined text-4xl text-cyan-400 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Design Grading</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-layer-group text-4xl text-rose-400 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Sequence Work</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Machine Planning & Production */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" data-aos="fade-up">
                        <div className="lg:col-span-8 order-2 lg:order-1">
                            <div className="glass-panel p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 interactive hover:-translate-y-2 transition-transform shadow-lg border-blue-500/20">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-3xl text-blue-500"><i className="fas fa-cogs"></i></div>
                                    <h3 className="font-bold">Machine Setting</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Designs set for 12&quot;, 13&quot;, 16&quot; and 18&quot; machine sizes.</p>
                                </div>
                                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 interactive hover:-translate-y-2 transition-transform shadow-lg border-orange-500/20">
                                    <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center text-3xl text-orange-500"><i className="fas fa-bolt"></i></div>
                                    <h3 className="font-bold">Laser &amp; Beads Work</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Laser work and beads work handled end to end on the floor.</p>
                                </div>
                                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 interactive hover:-translate-y-2 transition-transform shadow-lg border-cyan-500/20">
                                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-3xl text-cyan-500"><i className="fas fa-th-large"></i></div>
                                    <h3 className="font-bold">Divider &amp; Frame Work</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Box cut, frame work and semi stitch planning with the team.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 space-y-4 order-1 lg:order-2">
                            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-3xl text-secondary mb-6">
                                <i className="fas fa-industry"></i>
                            </div>
                            <h2 className="text-3xl font-bold">Machine Planning &amp; Production</h2>
                            <p className="text-slate-500 text-left dark:text-slate-400">
                                A design is only good if it runs. I plan machines, adjust designs as per fabric width, length and costing, set sequence work in 3mm, 5mm, 7mm and 9mm as per sample, and research new embroidery techniques to keep quality and output high.
                            </p>
                        </div>
                    </div>

                    {/* 3. Office & Team Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" data-aos="fade-up">
                        <div className="lg:col-span-4 space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-3xl text-green-500 mb-6 text-left">
                                <i className="fas fa-users-cog"></i>
                            </div>
                            <h2 className="text-3xl font-bold">Team &amp; Office <br /> Management</h2>
                            <p className="text-slate-500 dark:text-slate-400">
                                As Team Lead in the product development department, I manage weekly and monthly reporting, coordinate designs with outsource vendors by email, and keep the department organized under tight production pressure.
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="glass-panel p-8 rounded-3xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 dark:hover:bg-slate-800/50 transition-colors">
                                        <i className="fas fa-file-word text-3xl text-blue-600"></i>
                                        <div>
                                            <h4 className="font-bold">MS Office</h4>
                                            <p className="text-xs text-slate-500">MS Word, MS Excel, documentation</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 dark:hover:bg-slate-800/50 transition-colors">
                                        <i className="fas fa-envelope-open-text text-3xl text-orange-500"></i>
                                        <div>
                                            <h4 className="font-bold">Outlook &amp; Vendor Coordination</h4>
                                            <p className="text-xs text-slate-500">Sending designs to all outsource vendors</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 dark:hover:bg-slate-800/50 transition-colors">
                                        <i className="fas fa-chart-line text-3xl text-green-500"></i>
                                        <div>
                                            <h4 className="font-bold">Reporting</h4>
                                            <p className="text-xs text-slate-500">Weekly and monthly production reports</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 dark:hover:bg-slate-800/50 transition-colors">
                                        <i className="fas fa-desktop text-3xl text-purple-500"></i>
                                        <div>
                                            <h4 className="font-bold">Hardware &amp; Software</h4>
                                            <p className="text-xs text-slate-500">Program installation and system setup</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Soft Skills & Languages */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-aos="fade-up">
                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-rose-500/20 flex items-center justify-center text-2xl text-rose-500"><i className="fas fa-handshake"></i></div>
                                <h2 className="text-2xl font-bold">Soft Skills</h2>
                            </div>
                            <div className="flex flex-wrap gap-2 text-sm font-medium">
                                {softSkills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-lg border bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors duration-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-2xl text-emerald-500"><i className="fas fa-language"></i></div>
                                <h2 className="text-2xl font-bold">Languages &amp; Interests</h2>
                            </div>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center justify-between text-sm"><span className="font-semibold">English</span><span className="text-slate-500">International</span></div>
                                <div className="flex items-center justify-between text-sm"><span className="font-semibold">Urdu</span><span className="text-slate-500">National</span></div>
                                <div className="flex items-center justify-between text-sm"><span className="font-semibold">Punjabi</span><span className="text-slate-500">National</span></div>
                            </div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Interests</p>
                            <div className="flex flex-wrap gap-2 text-sm font-medium">
                                {interests.map((item, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-lg border bg-secondary/10 border-secondary/20 text-secondary hover:bg-secondary/20 transition-colors duration-300">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default SkillsPage;
