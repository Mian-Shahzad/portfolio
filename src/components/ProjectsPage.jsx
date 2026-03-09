import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

const myProjects = [
    {
        id: 1,
        title: "Chrome Extensions",
        tag: "V3 Extension",
        year: "2024",
        desc: "Developed production-ready extensions: Daily Expense Manager for financial tracking and Font Changer for dynamic webpage font customization.",
        tech: ["Chrome API", "JavaScript", "HTML/CSS"],
        type: "secondary",
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Hospital Management System",
        tag: "Full Stack",
        year: "2024",
        desc: "A comprehensive web-based management solution for healthcare providers. Developed modules for real-time patient registration, doctor scheduling, and automated billing using SQL and modern JavaScript.",
        tech: ["JavaScript", "SQL Database", "Admin Dashboard", "Node.js"],
        type: "primary",
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Digital Khata",
        tag: "Finance",
        year: "2024",
        desc: "A specialized high-performance Accounting System for managing daily 'Leen Deen' (Debit/Credit) transactions. Features automated balancing, secure user management with SQL/XAMPP, and one-click printable invoices.",
        tech: ["React.js", "SQL/XAMPP", "Financial Log", "Print API"],
        type: "secondary",
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Auraniums Portfolio Redesign",
        tag: "Frontend",
        year: "2024",
        desc: "Redesigned the company website for Auraniums, focusing on modern aesthetics and performance, increasing page load speed by 35%.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion"],
        type: "primary",
        link: "#",
        github: "#"
    },
    {
        id: 5,
        title: "Wizmen Reporting Dashboard",
        tag: "Enterprise",
        year: "2025",
        desc: "Designed 10+ dashboards and graphs using Oracle Apex queries. Generates monthly reports utilizing SQL formulas and Bootstrap Tables.",
        tech: ["Oracle Apex", "SQL", "Bootstrap"],
        type: "secondary",
        link: "#",
        github: "#"
    },
    {
        id: 6,
        title: "MERN To-Do App",
        tag: "Full Stack",
        year: "2023",
        desc: "Developed a full-stack To-Do List application supporting 100+ concurrent users with JWT authentication and RESTful APIs.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        type: "primary",
        link: "#",
        github: "#"
    }
];

const floatingLogos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
];

const FloatingLogos = ({ numProjects }) => {
    const logosData = React.useMemo(() => {
        // Create 12 random logos spread along the track
        return Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            src: floatingLogos[i % floatingLogos.length],
            position: [
                (Math.random() - 0.5) * 35, // Spread wide on X axis
                (Math.random() * 15) - 3,   // Float between -3 and 12 on Y axis
                -(Math.random() * (numProjects * 20 + 20)) // Spread depth based on projects
            ],
            scale: Math.random() * 0.2 + 0.25, // Randomize size to be small and minor
        }));
    }, [numProjects]);

    return (
        <>
            {logosData.map((data) => (
                <Float key={`logo-${data.id}`} floatIntensity={2} speed={1.5} rotationIntensity={1.5}>
                    <group position={data.position}>
                        {/* Using Html to display SVGs perfectly in 3D */}
                        <Html transform center distanceFactor={15} zIndexRange={[100, 0]}>
                            <img
                                src={data.src}
                                alt="tech-logo"
                                style={{ width: `${data.scale * 80}px`, height: `${data.scale * 80}px` }}
                                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] opacity-40 pointer-events-none"
                            />
                        </Html>
                    </group>
                </Float>
            ))}
        </>
    );
};

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
                            <a href={project.github} className={`text-slate-300 hover:text-primary transition-colors font-semibold text-sm flex items-center gap-2 cursor-pointer ${flexRowClass}`}>
                                <i className="fab fa-github text-xl"></i> Source
                            </a>
                            <a href={project.link} className={`text-slate-300 hover:text-secondary transition-colors font-semibold text-sm flex items-center gap-2 cursor-pointer ${flexRowClass}`}>
                                <i className="fas fa-external-link-alt text-lg"></i> Live
                            </a>
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

            {/* Display our floating tech logos */}
            <FloatingLogos numProjects={myProjects.length} />

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
        <main ref={container} className="relative z-10 w-full bg-[#020617]" style={{ height: `${myProjects.length * 100 + 100}vh` }}>
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                {/* Header overlay */}
                <div className="absolute top-28 left-0 w-full text-center z-10 pointer-events-none px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                    >
                        Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary filter drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">Journey</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-lg text-slate-300 max-w-2xl mx-auto drop-shadow-md"
                    >
                        Scroll down to travel through a dimension of my finest creations.
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
        </main>
    );
};

export default ProjectsPage;
