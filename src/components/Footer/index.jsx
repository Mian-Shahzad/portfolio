import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    // Helper to scroll smoothly if we are on the same page, or let browser handle it if not
    const getHref = (hash) => {
        return location.pathname === '/' ? hash : `/${hash}`;
    };

    return (
        <footer className="pt-16 pb-8 border-t border-slate-200 dark:border-slate-800/50 relative z-10 bg-white/50 dark:bg-darkBg/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                {/* Brand / Bio */}
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <a href="#" className="text-3xl font-extrabold tracking-tighter interactive inline-block mb-2">
                        <span className="text-gradient">Faryad</span>.
                    </a>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                        Embroidery Designer and Digitizer with 15+ years in garment manufacturing. Specializing in Wilcom digitizing, beads and sequence work, design grading and embroidery machine planning.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <li><a href={getHref('#about')} className="hover:text-primary transition-colors interactive">About Me</a></li>
                        <li><Link to="/projects" className="hover:text-primary transition-colors interactive">Featured Work</Link></li>
                        <li><Link to="/experience" className="hover:text-primary transition-colors interactive">Experience</Link></li>
                        <li><Link to="/gallery" className="hover:text-primary transition-colors interactive">Gallery</Link></li>
                        <li><Link to="/skills" className="hover:text-primary transition-colors interactive">Skills & Expertise</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">Skills</h4>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <li>Embroidery Digitizing</li>
                        <li>Design &amp; Sampling</li>
                        <li>Production &amp; Team Management</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200 dark:border-slate-800/50">
                <p className="text-sm text-slate-500 font-medium text-center md:text-left">
                    &copy; 2026 Faryad Ali. All Rights Reserved. <br />
                    <span className="text-xs">Bhobatian, Near 92 News, Raiwind Road, Lahore (0304-4005650)</span>
                </p>
                <div className="flex space-x-4">
                    <a href="tel:+923044005650" className="interactive w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <i className="fas fa-phone"></i>
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=Faryad228@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-secondary hover:text-white transition-all"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/923044005650" target="_blank" rel="noopener noreferrer" className="interactive w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
