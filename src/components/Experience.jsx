import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaBriefcase,
    FaCalendar,
    FaMapMarkerAlt,
    FaHospital,
    FaAward,
    FaExternalLinkAlt,
    FaEye,
    FaDownload,
    FaCheckCircle,
    FaGoogleDrive
} from 'react-icons/fa';

const Experience = ({ onOpenCertificate }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            role: 'Pharmacy Intern – Supply Chain & Procurement',
            company: 'Manipal Hospital Broadway',
            organizationNote: 'A Unit of Manipal Hospitals (East) India Private Limited',
            location: 'Broadway, Kolkata, India',
            duration: '02/07/2026 - 01/08/2026',
            type: 'Hospital Internship',
            featured: true,
            icon: FaHospital,
            certificateUrl: 'https://drive.google.com/file/d/1hxX7XPk-OjdzNcxJtucI3ceV_TKdb1gC/view?usp=drivesdk',
            localPdfUrl: '/internship-certificate.pdf',
            responsibilities: [
                'Assisted in the Department of Supply Chain & Procurement, managing hospital pharmaceutical inventory and streamlined stock replenishment.',
                'Handled procurement workflows for critical hospital medicines, emergency drug stocks, and surgical consumables.',
                'Monitored cold-chain maintenance and rigorous temperature controls for biologics, vaccines, and thermo-labile medications.',
                'Collaborated with hospital clinical pharmacists and vendor representatives adhering to strict hospital quality and compliance standards.',
                'Received an official Letter of Completion and recommendation from the Regional HR Head (East) for commendable conduct and performance.',
            ],
            skills: [
                'Hospital Pharmacy',
                'Supply Chain & Procurement',
                'Cold-Chain Logistics',
                'Inventory Management',
                'Quality Compliance',
                'Vendor Coordination'
            ],
            color: 'from-cyan-500 to-blue-600',
            badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
        },
        {
            role: 'Pharmacy Club Member',
            company: 'Amity University Kolkata Pharmaceutical Society',
            organizationNote: 'Department of Pharmacy',
            location: 'Kolkata, India',
            duration: 'Aug 2024 - Present',
            type: 'Extracurricular & Academic',
            featured: false,
            icon: FaBriefcase,
            responsibilities: [
                'Actively participate in university pharmacy club meetings, case studies, and clinical discussions.',
                'Assist in organizing pharmaceutical awareness drives, healthcare symposiums, and visiting guest lectures.',
                'Collaborate with faculty and peers on academic study groups and research project presentations.',
                'Engage in workshops focused on pharmaceutical industry innovations, Good Laboratory Practice (GLP), and career pathways.',
            ],
            skills: [
                'Healthcare Awareness',
                'Event Organization',
                'Academic Collaboration',
                'Scientific Seminars'
            ],
            color: 'from-primary-500 to-primary-700',
            badgeColor: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
        },
    ];

    return (
        <section id="experience" className="section-container relative" ref={ref}>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative z-10"
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
                    >
                        <FaAward className="text-sm" /> Clinical & Academic Background
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4"
                    >
                        Experience & Internships
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 120 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-500 mx-auto rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4"
                    >
                        Practical hospital training and academic society contributions shaping my pharmaceutical career.
                    </motion.p>
                </div>

                {/* Experience Timeline */}
                <div className="max-w-4xl mx-auto space-y-10">
                    {experiences.map((exp, index) => {
                        const Icon = exp.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                                className={`relative rounded-2xl transition-all duration-300 ${exp.featured
                                        ? 'glass-card-featured border-cyan-500/40 shadow-2xl shadow-cyan-500/10'
                                        : 'glass-card border-slate-700/60'
                                    }`}
                            >
                                {/* Top Header Info */}
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-700/60">
                                    <div className="flex items-start gap-3.5">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} text-white shadow-lg flex-shrink-0 mt-0.5`}>
                                            <Icon className="text-xl" />
                                        </div>
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                                                    {exp.role}
                                                </h3>
                                                {exp.featured && (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                                        <FaCheckCircle className="text-[10px]" /> Featured Internship
                                                    </span>
                                                )}
                                            </div>

                                            <h4 className="text-base md:text-lg font-semibold text-cyan-300 mt-0.5">
                                                {exp.company}
                                            </h4>
                                            {exp.organizationNote && (
                                                <p className="text-xs text-gray-400">
                                                    {exp.organizationNote}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex sm:flex-col items-start sm:items-end justify-between gap-2 flex-shrink-0">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${exp.badgeColor}`}>
                                            {exp.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Meta details: Duration & Location */}
                                <div className="flex flex-wrap items-center gap-5 my-4 text-xs md:text-sm text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <FaCalendar className="text-secondary-400" />
                                        <span className="font-medium">{exp.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-accent-400" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                {/* Responsibilities list */}
                                <div className="mt-4 space-y-2.5">
                                    <h5 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
                                        Key Responsibilities & Impact:
                                    </h5>
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + idx * 0.05 }}
                                                className="flex items-start gap-2.5 text-gray-300 text-sm leading-relaxed"
                                            >
                                                <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                                                <span>{resp}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Skill Tags */}
                                {exp.skills && (
                                    <div className="mt-5 pt-4 border-t border-slate-800/80">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-xs text-gray-400 font-medium mr-1">Domain Focus:</span>
                                            {exp.skills.map((skill, sIdx) => (
                                                <span
                                                    key={sIdx}
                                                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800/80 text-cyan-200 border border-slate-700/60 hover:border-cyan-500/40 transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Certificate Action Bar (If Internship) */}
                                {exp.certificateUrl && (
                                    <div className="mt-6 pt-5 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-3 bg-cyan-950/20 -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-4 md:p-6 rounded-b-2xl">
                                        <div className="flex items-center gap-2 text-xs md:text-sm text-cyan-300">
                                            <FaAward className="text-amber-400 text-base" />
                                            <span>
                                                <strong>Official Completion Certificate:</strong> Verified Manipal Hospital Document
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                                            <button
                                                onClick={() => onOpenCertificate ? onOpenCertificate() : window.open(exp.certificateUrl, '_blank')}
                                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/40 hover:border-cyan-400 transition-all cursor-pointer shadow-sm"
                                            >
                                                <FaEye className="text-xs" />
                                                Preview Document
                                            </button>

                                            <a
                                                href={exp.certificateUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-500 hover:to-secondary-400 text-white shadow-md shadow-primary-500/20 transition-all cursor-pointer"
                                            >
                                                <FaGoogleDrive className="text-xs" />
                                                Open Drive Link
                                                <FaExternalLinkAlt className="text-[10px]" />
                                            </a>

                                            <a
                                                href={exp.localPdfUrl}
                                                download="Ankur_Mondal_Manipal_Hospital_Internship_Certificate.pdf"
                                                className="inline-flex items-center justify-center p-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-gray-300 border border-slate-700 transition-colors"
                                                title="Download PDF"
                                            >
                                                <FaDownload className="text-xs text-secondary-400" />
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
