import React from 'react';

const Hero = () => {
    return (
        <header id="about" className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6 z-10 hero-content text-center lg:text-left">
                    <div className="inline-block py-1 px-3 rounded-full glass-panel text-sm font-semibold text-primary mb-2 shadow-lg shadow-primary/20">
                        Hello, I am
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                        M. <br className="hidden lg:block" />
                        <span className="text-gradient">Numan Saleem</span>
                    </h1>
                    <h2 className="text-2xl md:text-5xl font-extrabold mt-2 mb-4">
                        <span className="gradient-outline-text">Full Stack Web Developer</span>
                    </h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Associate Software Developer with a strong foundation in Full Stack MERN development and a keen interest in building responsive and efficient web applications. I want to apply theoretical knowledge to real-world projects, learn new technologies, and contribute to innovative solutions. Passionate about writing clean, maintainable code, collaborating in teams, and continuously improving technical skills through hands-on experience.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                        <a href="#projects" className="interactive px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 h-full w-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                        </a>
                        <a href="https://wa.me/923274323300" target="_blank" rel="noopener noreferrer" className="interactive px-8 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                            <i className="fab fa-whatsapp text-lg"></i>
                            <span>WhatsApp Me</span>
                        </a>
                    </div>
                </div>

                {/* Hero Photo Integration */}
                <div className="relative z-10 flex justify-center hero-visual group" data-aos="zoom-in" data-aos-delay="300">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-panel border-2 border-primary/20 p-2 transform transition-transform duration-500 group-hover:rotate-2">
                        {/* Ensure image path matches public folder or src/assets */}
                        <img src="/1769508726921.jpeg" alt="M. Numan Saleem" className="w-full h-full object-cover rounded-xl shadow-2xl" />
                        {/* Overlay Accent */}
                        <div className="absolute inset-0 bg-gradient-to-t from-darkBg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-sm font-semibold italic">Building digital experiences.</span>
                        </div>
                    </div>
                    {/* Ambient Glow behind photo */}
                    <div className="absolute inset-0 -z-10 bg-primary/20 blur-[60px] rounded-full transform scale-75 group-hover:scale-110 transition-transform duration-700"></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <i className="fas fa-chevron-down text-primary"></i>
            </div>
        </header>
    );
};

export default Hero;
