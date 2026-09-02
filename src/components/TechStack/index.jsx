import React from 'react';

const techItems = [
    { icon: "fas fa-pen-nib", name: "Wilcom W9 / W10" },
    { icon: "fas fa-vector-square", name: "Wilcom E2 / E4" },
    { icon: "fas fa-gem", name: "Dahao / Emcad Beads" },
    { icon: "fas fa-shirt", name: "Sketch & Logo Punching" },
    { icon: "fas fa-ruler-combined", name: "Design Grading" },
    { icon: "fas fa-cogs", name: "Machine Planning" },
    { icon: "fas fa-file-excel", name: "MS Office & Outlook" },
    { icon: "fas fa-desktop", name: "Hardware & Software" },
];

const TechStack = () => {
    return (
        <div className="infinite-scroll-container glass-nav border-t border-b border-primary/10">
            <div className="infinite-scroll-track">
                {/* Duplicate the array inline to enable smooth infinite scrolling */}
                {[...techItems, ...techItems].map((tech, idx) => (
                    <div key={idx} className="infinite-scroll-item">
                        <i className={tech.icon}></i> {tech.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
