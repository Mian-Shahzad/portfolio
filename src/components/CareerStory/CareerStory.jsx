import React, { useState, useRef } from 'react';
import faryadPhoto from '../../assets/pictures/faryad-ali.png';

const CareerStory = () => {
    const [activePhoto, setActivePhoto] = useState(0);
    const [dlState, setDlState] = useState('idle'); // 'idle' | 'loading' | 'done'
    const downloadRef = useRef(null);

    const handleDownload = () => {
        if (dlState !== 'idle') return;
        setDlState('loading');
        // trigger real download after a short delay for UX
        setTimeout(() => {
            if (downloadRef.current) downloadRef.current.click();
        }, 900);
        // switch to done tick after ~1.8s
        setTimeout(() => {
            setDlState('done');
        }, 1800);
        // reset back to idle after ~3.6s
        setTimeout(() => {
            setDlState('idle');
        }, 3600);
    };

    const photos = [
        { src: faryadPhoto, caption: 'Faryad Ali 🧵', sub: 'Deputy Manager Embroidery Digitizer · Outfitters' },
    ];

    

    const stats = [
        { icon: 'fa-calendar-alt', value: '2010–26', label: 'Years in Craft', color: 'text-primary' },
        { icon: 'fa-building', value: '3', label: 'Companies Served', color: 'text-secondary' },
        { icon: 'fa-pen-nib', value: 'Wilcom', label: 'Primary Software', color: 'text-emerald-400' },
        { icon: 'fa-users', value: 'Team Lead', label: 'Current Role', color: 'text-rose-400' },
    ];

    return (
        <section id="career-story" className="py-28 relative z-10 overflow-hidden">

            {/* Ambient decorative blobs */}
            <div
                className="absolute top-0 left-0 w-96 h-96 rounded-full -z-10 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(14,165,233,0.12), transparent 70%)',
                    transform: 'translate(-30%, -30%)',
                    filter: 'blur(60px)',
                }}
            />
            <div
                className="absolute bottom-0 right-0 w-96 h-96 rounded-full -z-10 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)',
                    transform: 'translate(30%, 30%)',
                    filter: 'blur(60px)',
                }}
            />
            <div
                className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full -z-10 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(52,211,153,0.06), transparent 70%)',
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(80px)',
                }}
            />

            <div className="max-w-7xl mx-auto px-6">

                {/* ── Section Header ── */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full glass-panel text-sm font-semibold text-primary mb-5 shadow-lg shadow-primary/20 border border-primary/20">
                        <i className="fas fa-pen-nib" />
                        Career Chapter
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
                        My <span className="text-gradient">Embroidery Journey</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Over fifteen years of designing, punching and running embroidery on the production floor —
                        from a junior digitizer to leading a product development team.
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
                </div>

                {/* ── University Story + Photos ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

                    {/* Left: Story */}
                    <div className="space-y-7 order-2 lg:order-1" data-aos="fade-right" data-aos-delay="100">

                        {/* Year Badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border backdrop-blur-sm"
                            style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(168,85,247,0.15))', borderColor: 'rgba(14,165,233,0.3)' }}>
                            <i className="fas fa-calendar-alt text-primary text-sm" />
                            <span className="text-sm font-extrabold tracking-widest text-primary uppercase">2010 – Present · Embroidery Industry</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Fifteen Years of Stitches at{' '}
                            <span className="text-gradient">Lahore’s Embroidery Floors</span>
                        </h3>

                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            I started in 2010 as a Junior Embroidery Digitizer at Waheed Embroidery, learning sketch punch and
                            Coral file punch from the ground up. Today I serve as Deputy Manager Embroidery Digitizer at
                            <strong className="text-slate-800 dark:text-slate-200"> Outfitters Pvt Ltd</strong>, leading the product development team.
                        </p>

                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            In between came five years at Brothers Embroidery as Senior Digitizer, punching logos of every kind.
                            Every design I release is checked, graded and set so it runs smoothly on the machine — because on the
                            production floor, a design is only as good as the stitches it produces.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="glass-panel p-4 rounded-2xl text-center border hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default"
                                    style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                                    data-aos="zoom-in"
                                    data-aos-delay={200 + i * 80}
                                >
                                    <i className={`fas ${stat.icon} text-xl ${stat.color} mb-2 block`} />
                                    <div className={`text-lg font-extrabold ${stat.color} leading-tight`}>{stat.value}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="border-l-4 border-primary/60 pl-5 italic text-slate-500 dark:text-slate-400 text-base mt-2"
                            style={{ borderImage: 'linear-gradient(to bottom, #0ea5e9, #a855f7) 1' }}>
                            "A good design is not the one that looks best on screen — it is the one that runs clean on the
                            machine, on every fabric, in every size."
                        </blockquote>

                        {/* Hidden real download anchor */}
                        <a
                            ref={downloadRef}
                            href="/Faryad_Ali_CV.pdf"
                            download="Faryad_Ali_CV.pdf"
                            style={{ display: 'none' }}
                            aria-hidden="true"
                        />

                        {/* Animated Download CV Button */}
                        <button
                            onClick={handleDownload}
                            disabled={dlState !== 'idle'}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-1 active:scale-95 select-none overflow-hidden relative"
                            style={{
                                background: dlState === 'done'
                                    ? 'linear-gradient(135deg, #10b981, #059669)'
                                    : 'linear-gradient(135deg, #0ea5e9, #2563eb)',
                                boxShadow: dlState === 'done'
                                    ? '0 8px 24px rgba(16, 185, 129, 0.4)'
                                    : '0 8px 24px rgba(14, 165, 233, 0.35)',
                                transition: 'background 0.5s ease, box-shadow 0.5s ease, transform 0.2s ease',
                                minWidth: '160px',
                                cursor: dlState !== 'idle' ? 'default' : 'pointer',
                            }}
                        >
                            {/* Idle state */}
                            <span
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                                    opacity: dlState === 'idle' ? 1 : 0,
                                    transform: dlState === 'idle' ? 'translateY(0)' : 'translateY(-12px)',
                                    position: dlState === 'idle' ? 'relative' : 'absolute',
                                    pointerEvents: 'none',
                                }}
                            >
                                <i className="fas fa-download text-base" />
                                Download CV
                            </span>

                            {/* Loading spinner */}
                            <span
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                                    opacity: dlState === 'loading' ? 1 : 0,
                                    transform: dlState === 'loading' ? 'translateY(0)' : 'translateY(12px)',
                                    position: dlState === 'loading' ? 'relative' : 'absolute',
                                    pointerEvents: 'none',
                                }}
                            >
                                <svg
                                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                                    style={{ animation: 'cvSpin 0.75s linear infinite' }}
                                >
                                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                                    <path d="M12 2 a10 10 0 0 1 10 10" />
                                </svg>
                                Downloading...
                            </span>

                            {/* Done tick */}
                            <span
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                                    transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                                    opacity: dlState === 'done' ? 1 : 0,
                                    transform: dlState === 'done' ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(12px)',
                                    position: dlState === 'done' ? 'relative' : 'absolute',
                                    pointerEvents: 'none',
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ animation: dlState === 'done' ? 'cvTickDraw 0.45s ease forwards' : 'none', strokeDasharray: 30, strokeDashoffset: dlState === 'done' ? 0 : 30 }}
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Done!
                            </span>
                        </button>
                    </div>

                    {/* Right: Dual Photo Showcase */}
                    <div
                        className="relative flex justify-center order-1 lg:order-2 group"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        {/* Glow halo */}
                        <div
                            className="absolute inset-0 -z-10 rounded-full pointer-events-none scale-90 group-hover:scale-110 transition-transform duration-700"
                            style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.25), rgba(168,85,247,0.15), transparent 70%)', filter: 'blur(50px)' }}
                        />

                        {/* Tabs */}
                        <div className="w-full max-w-sm md:max-w-md">
                            {photos.length > 1 && (
                            <div className="flex gap-2 mb-3 glass-panel rounded-2xl p-1.5 border" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                                {photos.map((p, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActivePhoto(i)}
                                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 ${activePhoto === i
                                            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                            }`}
                                    >
                                        <i className={`fas ${i === 0 ? 'fa-industry' : 'fa-images'} mr-1.5`} />
                                        {p.caption.split(' ').slice(0, 2).join(' ')}
                                    </button>
                                ))}
                            </div>
                            )}

                            {/* Floating badge */}
                            <div className="absolute -top-4 -right-2 z-20 glass-panel px-3 py-2 rounded-2xl shadow-xl border border-primary/20 flex items-center gap-2 animate-bounce">
                                <i className="fas fa-pen-nib text-primary text-base" />
                                <span className="text-xs font-extrabold">15+ Years 🧵</span>
                            </div>

                            {/* Photo Card */}
                            <div className="relative w-full rounded-3xl overflow-hidden glass-panel border-2 border-primary/20 p-2 transform transition-all duration-500 group-hover:rotate-1 group-hover:scale-[1.02] shadow-2xl shadow-primary/20">
                                <img
                                    key={activePhoto}
                                    src={photos[activePhoto].src}
                                    alt={photos[activePhoto].caption}
                                    className="w-full h-auto object-cover rounded-2xl transition-all duration-500"
                                    style={{ maxHeight: '460px', objectFit: 'cover', objectPosition: 'top' }}
                                />
                                {/* Overlay */}
                                <div className="absolute inset-2 rounded-2xl flex items-end p-5"
                                    style={{ background: 'linear-gradient(to top, rgba(2,6,23,0.8) 0%, transparent 60%)' }}>
                                    <div>
                                        <p className="text-white font-extrabold text-lg leading-tight">{photos[activePhoto].caption}</p>
                                        <p className="text-primary text-sm font-semibold mt-0.5">{photos[activePhoto].sub}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom decorative pill */}
                            <div className="absolute -bottom-4 -left-2 z-20 glass-panel px-3 py-2 rounded-2xl shadow-xl border border-secondary/20 flex items-center gap-2">
                                <i className="fas fa-star text-yellow-400 text-sm" />
                                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Embroidery Designer</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CareerStory;
