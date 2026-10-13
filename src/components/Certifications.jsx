import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaCertificate,
    FaAward,
    FaHospital,
    FaHeartbeat,
    FaFlask,
    FaUsers,
    FaCheckCircle,
    FaExternalLinkAlt,
    FaEye,
    FaGoogleDrive
} from 'react-icons/fa';

const Certifications = ({ onOpenCertificate }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const driveUrl = "https://drive.google.com/file/d/1hxX7XPk-OjdzNcxJtucI3ceV_TKdb1gC/view?usp=drivesdk";

    const certificates = [
        {
            title: 'Pharmacy Internship Certificate',
            organization: 'Manipal Hospital Broadway',
            issuerNote: 'A Unit of Manipal Hospitals (East) India Pvt. Ltd.',
            department: 'Supply Chain & Procurement',
            date: 'July 2026 – August 2026',
            icon: FaHospital,
            color: 'from-cyan-500 to-blue-600',
            verified: true,
            hasDoc: true,
            description: 'Officially certified for assisting as a pharmacy intern in hospital supply chain, pharmaceutical procurement, stock replenishment, and cold-chain compliance.',
        },
        {
            title: 'First Aid & Emergency Life Support Training',
            organization: 'Emergency Healthcare Training',
            issuerNote: 'Certified Community Emergency Medical Program',
            department: 'Emergency & Trauma Care',
            date: 'Completed 2024',
            icon: FaHeartbeat,
            color: 'from-rose-500 to-red-600',
            verified: true,
            hasDoc: false,
            description: 'Trained in primary medical response, emergency triage, wound management, fracture stabilization, and standard life-support protocols.',
        },
        {
            title: 'Good Laboratory Practices (GLP) & Safety',
            organization: 'Amity University Kolkata',
            issuerNote: 'Department of Pharmaceutical Technology',
            department: 'Laboratory Biosafety',
            date: 'Academic Certification',
            icon: FaFlask,
            color: 'from-emerald-500 to-teal-600',
            verified: true,
            hasDoc: false,
            description: 'Certified in laboratory safety guidelines, handling toxic and hazardous chemicals, aseptic pharmaceutical formulation protocols, and waste management.',
        },
        {
            title: 'Pharmaceutical Society Active Member',
            organization: 'Amity University Kolkata Pharmaceutical Society',
            issuerNote: 'Student Chapter & Healthcare Outreach',
            department: 'Academic & Professional Engagement',
            date: '2024 – Present',
            icon: FaUsers,
            color: 'from-indigo-500 to-purple-600',
            verified: true,
            hasDoc: false,
            description: 'Active membership contributing to pharmaceutical awareness campaigns, guest lectures from industrial experts, and peer study circles.',
        },
    ];

    return (
        <section id="certifications" className="section-container relative" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
                    >
                        <FaCertificate className="text-sm" /> Credentials & Licensure
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4"
                    >
                        Certifications & Accreditations
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 120 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto rounded-full"
                    />
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4">
                        Verified professional training, clinical hospital certifications, and university academic recognitions.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
                    {certificates.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-card flex flex-col justify-between border-slate-800 hover:border-cyan-500/40 relative overflow-hidden"
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-3 mb-4">
                                        <div className="flex items-start gap-3">
                                            <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} text-white shadow-md flex-shrink-0 mt-0.5`}>
                                                <Icon className="text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-display font-bold text-white">
                                                    {cert.title}
                                                </h3>
                                                <h4 className="text-sm font-semibold text-cyan-300">
                                                    {cert.organization}
                                                </h4>
                                                <p className="text-[11px] text-gray-400">
                                                    {cert.issuerNote}
                                                </p>
                                            </div>
                                        </div>

                                        {cert.verified && (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex-shrink-0">
                                                <FaCheckCircle className="text-[9px]" /> Verified
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                                        <span className="font-medium text-gray-300">{cert.department}</span>
                                        <span>•</span>
                                        <span>{cert.date}</span>
                                    </div>

                                    <p className="text-xs text-gray-300 leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>

                                {cert.hasDoc && (
                                    <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                                        <span className="text-[11px] text-cyan-400 flex items-center gap-1">
                                            <FaAward className="text-amber-400" /> Attached Document
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={onOpenCertificate}
                                                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                                            >
                                                <FaEye className="text-xs" /> Preview
                                            </button>
                                            <a
                                                href={driveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-sm transition-all inline-flex items-center gap-1.5"
                                            >
                                                <FaGoogleDrive className="text-xs" /> Drive ↗
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

export default Certifications;
