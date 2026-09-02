import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import './ProjectsPage.css';

const myProjects = [
    {
        id: 1,
        title: 'Laser & Beads Work',
        tag: 'Outfitters',
        year: '2016 – Present',
        desc: 'Handling laser work and beads work for garment production, discussing every garment according to the planning sheet and taking it from sample to bulk output.',
        tech: ['Laser Work', 'Beads Work', 'Dahao / Emcad', 'Production Planning'],
        type: 'primary'
    },
    {
        id: 2,
        title: 'Design Grading & Sizing',
        tag: 'Digitizing',
        year: '2016 – Present',
        desc: 'Grading design sizes according to pattern and editing designs as per required stitch size, so the same artwork sits correctly on every size in the size set.',
        tech: ['Wilcom E2/E4', 'Size Grading', 'Stitch Editing', 'Pattern Matching'],
        type: 'secondary'
    },
    {
        id: 3,
        title: 'Machine Planning & Setting',
        tag: 'Production',
        year: '2016 – Present',
        desc: 'Planning machines with the team — divider work, box cut, frame work and semi stitch — and setting designs for 12, 13, 16 and 18 inch machine sizes so every file runs smoothly.',
        tech: ['Machine Setting', 'Divider Work', 'Box Cut', 'Frame Work'],
        type: 'primary'
    },
    {
        id: 4,
        title: 'Sequence Work Setting',
        tag: 'Technique',
        year: '2016 – Present',
        desc: 'Setting sequence work designs in 3mm, 5mm, 7mm and 9mm exactly as per the approved sample, and researching new embroidery techniques to take fresh samples.',
        tech: ['3mm / 5mm', '7mm / 9mm', 'Sampling', 'R&D'],
        type: 'secondary'
    },
    {
        id: 5,
        title: 'Logo & Sketch Punching',
        tag: 'Brothers Embroidery',
        year: '2011 – 2016',
        desc: 'Punched logos of all kinds along with sketch punching and Coral file punching, preparing sample punches for buyers and researching new embroidery techniques.',
        tech: ['Sketch Punch', 'Coral File Punch', 'Logo Punching', 'Sample Punch'],
        type: 'primary'
    },
    {
        id: 6,
        title: 'Vendor Design Coordination',
        tag: 'Team Lead',
        year: '2016 – Present',
        desc: 'Sending approved designs by email to all outsource vendors and preparing the weekly and monthly reports for the product development department.',
        tech: ['Outlook', 'MS Excel', 'Vendor Management', 'Reporting'],
        type: 'secondary'
    }
];

const ProjectCard = ({ project, index }) => {
    // Alternating left/right offset 
    const isEven = index % 2 === 0;
    const isLeft = isEven;
    const xPos = isLeft ? -4.5 : 4.5;

    // Deeper into the Z-axis. Each item is spaced by 20 units.
    const zPos = -(index * 20) - 15;

    // Dynamic classes based on position
    const textAlignClass = isLeft ? 'text-right' : 'text-left';
    const flexRowClass = isLeft ? 'flex-row-reverse' : 'flex-row';
    const justifyClass = isLeft ? 'justify-end' : 'justify-start';

    return (
        <group position={[xPos, 0, zPos]}>
            <Float floatIntensity={2} speed={1.5} rotationIntensity={0.5}>
                {/* 
                  Using Html from drei to render proper DOM elements.
                  transform: scale to fit 3D space
                  center: anchored centrally 
                  distanceFactor: keeps it sized proportionally as we approach
                */}
                <Html transform center scale={0.7} distanceFactor={15} zIndexRange={[100, 0]} className="pointer-events-none">
                    <div className="w-[400px] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl bg-slate-800/95 border-2 border-slate-600/50 pointer-events-auto hover:border-primary/80 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-500 relative group overflow-hidden">

                        {/* Glow effect sitting behind the card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"></div>

                        <div className={`flex justify-between items-start mb-4 relative z-10 ${flexRowClass}`}>
                            <div className={`px-3 py-1.5 text-xs font-bold rounded-full ${project.type === 'primary' ? 'bg-primary/25 text-primary border border-primary/30' : 'bg-secondary/25 text-secondary border border-secondary/30'}`}>
                                <i className={`fas fa-code-branch ${isLeft ? 'ml-1' : 'mr-1'}`}></i>
                                {project.tag}
                            </div>
                            <span className="text-sm font-semibold tracking-wider text-slate-300 bg-black/30 px-3 py-1 rounded-full">{project.year}</span>
                        </div>

                        <h3 className={`text-3xl font-extrabold mb-3 text-white cursor-pointer group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300 relative z-10 ${textAlignClass}`}>
                            {project.title}
                        </h3>

                        <p className={`text-slate-200 mb-6 text-sm leading-relaxed ${isLeft ? 'border-r-2 border-primary/50 pr-3' : 'border-l-2 border-primary/50 pl-3'} relative z-10 ${textAlignClass}`}>
                            {project.desc}
                        </p>

                        <div className={`flex flex-wrap gap-2 mb-8 relative z-10 ${justifyClass}`}>
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded bg-black/40 text-slate-200 border border-slate-600/50">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className={`flex gap-6 pt-4 border-t border-slate-600/50 relative z-10 ${justifyClass}`}>
                            <span className={`text-slate-300 font-semibold text-sm flex items-center gap-2 ${flexRowClass}`}>
                                <i className="fas fa-building text-lg text-primary"></i> {project.tag}
                            </span>
                            <span className={`text-slate-300 font-semibold text-sm flex items-center gap-2 ${flexRowClass}`}>
                                <i className="far fa-calendar-alt text-lg text-secondary"></i> {project.year}
                            </span>
                        </div>
                    </div>
                </Html>
            </Float>
        </group>
    );
};

const JourneyCamera = ({ scrollProgress, numProjects }) => {
    useFrame((state, delta) => {
        // Read framer motion scroll value
        const offset = scrollProgress.get();

        // Calculate max depth. 20 is spacing, + 30 for extra run off area
        const maxZ = numProjects * 20 + 30;

        // Start z=5, travel to z = -maxZ
        const targetZ = 5 - (offset * maxZ);

        // Smooth damp to target allowing a slightly delayed silky feel
        state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, targetZ, 4, delta);

        // Dynamic wobble effect based on moving speed
        const time = state.clock.elapsedTime;
        state.camera.position.y = Math.sin(time * 1.5) * 0.15;
        state.camera.position.x = Math.cos(time * 0.8) * 0.1;
    });
    return null;
};

const Scene = ({ scrollProgress }) => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 15, 10]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-10, 5, -20]} intensity={2} color="#0ea5e9" />

            {/* Dark cool fog mimicking a cyber horizon */}
            <fog attach="fog" args={['#020617', 10, 50]} />

            <Stars radius={100} depth={50} count={6000} factor={5} saturation={0.5} fade speed={1.5} />

            <JourneyCamera scrollProgress={scrollProgress} numProjects={myProjects.length} />

            {/* The infinite road grid */}
            <group position={[0, -4, 0]}>
                <gridHelper args={[300, 150, '#38bdf8', '#0f172a']} position={[0, 0, -100]} />
                {/* Glowing neon line down the middle */}
                <mesh position={[0, 0.05, -100]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[0.2, 300]} />
                    <meshBasicMaterial color="#38bdf8" transparent opacity={0.8} />
                </mesh>
            </group>

            {/* Portal at the very end */}
            <Float floatIntensity={1} speed={1}>
                <mesh position={[0, 5, -(myProjects.length * 20 + 15)]}>
                    <ringGeometry args={[15, 18, 64]} />
                    <meshBasicMaterial color="#0ea5e9" transparent opacity={0.6} side={THREE.DoubleSide} />
                </mesh>
                <pointLight position={[0, 5, -(myProjects.length * 20 + 15)]} intensity={5} color="#0ea5e9" distance={50} />
            </Float>

            {myProjects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
            ))}
        </>
    );
};

const ProjectsPage = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <main className="projects-wrapper dark:bg-[#020617]">
            {/* Desktop View with 3D Canvas */}
            <div ref={container} className="projects-canvas-container h-[600vh]" style={{ height: `${myProjects.length * 100 + 100}vh` }}>
                <div className="sticky top-0 w-full h-screen overflow-hidden">
                    {/* Header overlay */}
                    <div className="absolute top-28 left-0 w-full text-center z-10 pointer-events-none px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="project-3d-title font-extrabold leading-tight mb-4 text-white drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                        >
                            Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary filter drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">Journey</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="project-3d-desc text-slate-300 max-w-2xl mx-auto drop-shadow-md"
                        >
                            Scroll down to travel through the embroidery work I have delivered on the production floor.
                        </motion.p>
                    </div>

                    {/* 3D Scene */}
                    <div className="absolute inset-0 z-0">
                        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true }}>
                            <Scene scrollProgress={scrollYProgress} />
                        </Canvas>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 1 }}
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 text-sm animate-bounce text-center pointer-events-none z-10 flex flex-col items-center gap-2"
                    >
                        <i className="fas fa-chevron-down text-3xl drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"></i>
                        <span className="tracking-[0.3em] uppercase text-[10px] font-bold">Scroll</span>
                    </motion.div>

                    {/* Progress bar overlay indicator */}
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 h-1/2 w-1 bg-white/10 rounded-full z-10 pointer-events-none hidden md:block">
                        <div className="relative w-full h-full overflow-hidden rounded-full">
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-primary shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                                style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Fallback View */}
            <div className="projects-mobile-container pt-32 pb-24 px-6 min-h-screen">
                <header className="text-center mb-16" data-aos="fade-down">
                    <h1 className="project-mobile-title font-extrabold leading-tight mb-4 text-slate-900 dark:text-white">
                        Craft <span className="text-gradient">Journey</span>
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Scroll down to explore my embroidery work highlights.
                    </p>
                </header>
                <div className="space-y-8 flex flex-col items-center">
                    {myProjects.map((project, index) => (
                        <div key={project.id} data-aos="fade-up" className="glass-panel w-full max-w-sm p-6 rounded-3xl relative overflow-hidden group shadow-lg hover:shadow-primary/20 transition-all border border-slate-200 dark:border-white/10">
                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className={`px-2 py-1 text-[10px] font-bold rounded-full ${project.type === 'primary' ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-secondary/20 text-secondary border border-secondary/30'}`}>
                                    <i className="fas fa-code-branch mr-1"></i>
                                    {project.tag}
                                </div>
                                <span className="text-[10px] font-semibold tracking-wider text-slate-600 dark:text-slate-300 bg-slate-200 dark:bg-black/30 px-2 py-1 rounded-full">{project.year}</span>
                            </div>

                            <h3 className="text-2xl font-extrabold mb-3 text-slate-800 dark:text-white">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[10px] font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-black/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600/50">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-600/50 relative z-10 justify-start">
                                <span className="text-slate-600 dark:text-slate-300 font-semibold text-xs flex items-center gap-1">
                                    <i className="fas fa-building text-base text-primary"></i> {project.tag}
                                </span>
                                <span className="text-slate-600 dark:text-slate-300 font-semibold text-xs flex items-center gap-1">
                                    <i className="far fa-calendar-alt text-base text-secondary"></i> {project.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
