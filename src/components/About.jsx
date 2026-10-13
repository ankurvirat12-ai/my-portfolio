import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaUserGraduate,
    FaFlask,
    FaHeart,
    FaHospital,
    FaAward,
    FaExternalLinkAlt,
    FaBoxes
} from 'react-icons/fa';

const About = ({ onOpenCertificate }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const highlights = [
        {
            icon: FaHospital,
            title: 'Hospital Experience',
            description: 'Trained at Manipal Hospital Broadway in pharmaceutical supply chain & inventory',
        },
        {
            icon: FaUserGraduate,
            title: 'Academic Foundation',
            description: 'Pursuing B. Pharm at Amity University Kolkata with strong academic consistency',
        },
        {
            icon: FaFlask,
            title: 'Research & Formulations',
            description: 'Passionate about drug mechanisms, medicinal chemistry, and modern therapeutics',
        },
        {
            icon: FaHeart,
            title: 'Patient-First Focus',
            description: 'Committed to safe medicine distribution, compliance, and clinical patient care',
        },
    ];

    const driveUrl = "https://drive.google.com/file/d/1hxX7XPk-OjdzNcxJtucI3ceV_TKdb1gC/view?usp=drivesdk";

    return (
        <section id="about" className="section-container relative" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-4"
                    >
                        About Me
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4"
                    >
                        Biography & Background
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 100 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto rounded-full"
                    />
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Image / Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative mx-auto max-w-md">
                            {/* Decorative Glow Orbs */}
                            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-400/20 rounded-full blur-2xl"></div>

                            <div className="glass-card-featured p-6 md:p-8 space-y-6">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="/profile.jpg"
                                        alt="Ankur Mondal"
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover ring-2 ring-cyan-400/50 shadow-xl shadow-cyan-500/20"
                                    />
                                    <div>
                                        <h4 className="text-xl font-display font-bold text-white">Ankur Mondal</h4>
                                        <p className="text-sm text-cyan-300 font-medium">B. Pharm. Student (3rd Year)</p>
                                        <p className="text-xs text-gray-400 mt-1">Amity University Kolkata</p>
                                    </div>
                                </div>

                                {/* Internship Callout Badge inside profile card */}
                                <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-2">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="font-semibold text-cyan-300 flex items-center gap-1.5">
                                            <FaHospital className="text-cyan-400" /> Manipal Hospital Broadway
                                        </span>
                                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-medium">
                                            Internship Completed
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-300 leading-relaxed">
                                        Assisted in Supply Chain & Procurement, handling critical hospital drug management, stock verification, and cold-chain compliance.
                                    </p>
                                    <div className="pt-2 flex items-center justify-between text-xs">
                                        <span className="text-gray-400 text-[11px]">Jul 2026 – Aug 2026</span>
                                        <button
                                            onClick={onOpenCertificate ? onOpenCertificate : () => window.open(driveUrl, '_blank')}
                                            className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                                        >
                                            <FaAward className="text-amber-400" /> View Document ↗
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Bio & Key Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-display font-bold text-white leading-snug">
                            Passionate About <span className="gradient-text">Pharmaceutical Sciences</span> & Hospital Care
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                            I am Ankur Mondal, a dedicated 3rd-year B. Pharm. student at Amity University Kolkata.
                            I have built a strong theoretical and practical foundation in pharmacology, pharmaceutics, and clinical pharmacy, complemented by intensive hospital internship experience.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                            During my internship at <strong className="text-cyan-300 font-medium">Manipal Hospital Broadway</strong>, I had the privilege of working in the Department of Supply Chain & Procurement. I managed critical hospital medication logistics, cold-chain distribution, and quality assurance under senior healthcare leadership.
                        </p>

                        {/* Key Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
                            {[
                                { number: '8.2', label: 'CGPA' },
                                { number: '1', label: 'Hospital Internship' },
                                { number: '3+', label: 'Projects' },
                                { number: '100%', label: 'Dedication' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    className="glass-card text-center p-3.5 rounded-xl border-slate-700/60"
                                >
                                    <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
                                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="glass-card text-center group cursor-pointer border-slate-800 hover:border-cyan-500/40"
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-400 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/20">
                                <item.icon className="text-2xl text-white" />
                            </div>
                            <h4 className="font-display font-semibold text-lg mb-2 text-white group-hover:text-cyan-300 transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
