import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ toggleTheme, isDark }) => {
    const location = useLocation();

    // Helper to scroll smoothly if we are on the same page, or let browser handle it if not
    const getHref = (hash) => {
        return location.pathname === '/' ? hash : `/${hash}`;
    };

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[80%] max-w-5xl z-[100] glass-nav transition-all duration-300 rounded-2xl border border-white/10 shadow-lg">
            <div className="px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-extrabold tracking-tighter interactive hover:scale-105 transition-transform duration-300">
                    <span className="text-gradient">Numan</span>.
                </Link>

                <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <a href={getHref('#about')} className="hover:text-primary transition-colors interactive">About</a>
                    <Link to="/experience" className="hover:text-primary transition-colors interactive">Experience</Link>
                    <Link to="/projects" className="hover:text-primary transition-colors interactive">Projects</Link>
                    <Link to="/education" className="hover:text-primary transition-colors interactive">Education</Link>
                    <Link to="/skills" className="hover:text-primary transition-colors interactive text-primary font-bold">Skills & Services</Link>
                </div>

                <button
                    onClick={toggleTheme}
                    className="interactive p-2 rounded-full glass-panel hover:bg-primary/20 transition-all focus:outline-none w-10 h-10 flex items-center justify-center"
                >
                    {isDark ? (
                        <i className="fas fa-sun text-yellow-400 block"></i>
                    ) : (
                        <i className="fas fa-moon text-indigo-400 block"></i>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
