import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative z-10 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="mb-12" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let's <span className="text-gradient">Connect!</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10">
                        Have a project in mind, looking for a collaboration, or just want to say hi? I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.
                    </p>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeu8QP9ka4LYyuLICueGjXhIkC-NCeEkUsiCPBGEIbvmLnnZw/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 interactive px-10 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-extrabold text-xl shadow-[0_0_20px_rgba(14,165,233,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                    >
                        <span>Start a Conversation</span>
                        <i className="fas fa-paper-plane text-2xl"></i>
                    </a>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -z-10"></div>
        </section>
    );
};

export default Contact;
