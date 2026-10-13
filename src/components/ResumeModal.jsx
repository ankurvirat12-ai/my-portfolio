import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaTimes,
    FaPrint,
    FaDownload,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGraduationCap,
    FaBriefcase,
    FaAward,
    FaExternalLinkAlt
} from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose, onOpenCertificate }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handlePrint = () => {
        window.print();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
                    />

                    {/* Modal Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden z-10"
                    >
                        {/* Top Accent */}
                        <div className="h-1 bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-500" />

                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
                            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                                <FaAward /> Curriculum Vitae (CV) Preview
                            </span>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handlePrint}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40 transition-colors cursor-pointer"
                                    title="Print or Save as PDF"
                                >
                                    <FaPrint className="text-xs" />
                                    <span>Print / PDF</span>
                                </button>
                                <button
                                    onClick={onClose}
                                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
                                    aria-label="Close CV modal"
                                >
                                    <FaTimes className="text-base" />
                                </button>
                            </div>
                        </div>

                        {/* Resume Printable Content Area */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-slate-200 bg-slate-950" id="printable-cv">
                            {/* Personal Header */}
                            <div className="border-b border-slate-800 pb-5">
                                <h1 className="text-2xl md:text-3xl font-display font-bold text-white">
                                    Ankur Mondal
                                </h1>
                                <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                                    Bachelor of Pharmacy (B. Pharm) Student • 3rd Year
                                </p>
                                <p className="text-xs text-gray-400">
                                    Amity University Kolkata • Kolkata, West Bengal, India
                                </p>

                                <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-300">
                                    <span className="flex items-center gap-1.5">
                                        <FaEnvelope className="text-cyan-400" /> ankur.virat12@gmail.com
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <FaPhone className="text-cyan-400" /> +91 8514058627
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <FaMapMarkerAlt className="text-cyan-400" /> Kolkata, India
                                    </span>
                                </div>
                            </div>

                            {/* Summary */}
                            <div>
                                <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1.5">
                                    Professional Summary
                                </h2>
                                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                                    Dedicated 3rd-year B. Pharm student at Amity University Kolkata with practical hospital pharmacy internship experience at Manipal Hospital Broadway. Well-versed in pharmaceutical formulations, medicinal chemistry, supply chain logistics, and cold-chain compliance. Committed to achieving excellence in patient healthcare delivery and clinical pharmacy practice.
                                </p>
                            </div>

                            {/* Education */}
                            <div>
                                <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                    <FaGraduationCap /> Education
                                </h2>
                                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                        <h3 className="text-sm font-bold text-white">
                                            Bachelor of Pharmacy (B. Pharm.)
                                        </h3>
                                        <span className="text-xs text-gray-400 font-medium">
                                            2024 – 2028 (Currently in 3rd Year)
                                        </span>
                                    </div>
                                    <p className="text-xs text-cyan-300 font-medium">
                                        Amity Institute of Pharmacy, Amity University Kolkata
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        Cumulative Grade Point Average (CGPA): <strong className="text-white">8.2 / 10.0</strong>
                                    </p>
                                    <div className="mt-2 text-xs text-gray-300">
                                        <strong className="text-gray-400">Core Coursework:</strong> Pharmaceutical Chemistry, Pharmaceutics, Pharmacognosy, Human Anatomy & Physiology, Biochemistry, Biostatistics.
                                    </div>
                                </div>
                            </div>

                            {/* Professional Experience */}
                            <div>
                                <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                    <FaBriefcase /> Practical Experience & Internships
                                </h2>
                                <div className="space-y-3">
                                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                            <h3 className="text-sm font-bold text-white">
                                                Pharmacy Intern – Supply Chain & Procurement
                                            </h3>
                                            <span className="text-xs text-gray-400 font-medium">
                                                Jul 2026 – Aug 2026
                                            </span>
                                        </div>
                                        <p className="text-xs text-cyan-300 font-medium">
                                            Manipal Hospital Broadway (Manipal Hospitals East India Pvt. Ltd.)
                                        </p>
                                        <ul className="list-disc list-inside mt-2 text-xs text-gray-300 space-y-1">
                                            <li>Assisted in the Department of Supply Chain & Procurement, tracking medication stocks and procurement flows.</li>
                                            <li>Monitored strict cold-chain compliance (2°C - 8°C) for vaccines, biopharmaceuticals, and insulin.</li>
                                            <li>Received letter of commendation from Regional HR Head (East) for conduct and duty performance.</li>
                                        </ul>
                                    </div>

                                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                            <h3 className="text-sm font-bold text-white">
                                                Pharmacy Club Member
                                            </h3>
                                            <span className="text-xs text-gray-400 font-medium">
                                                Aug 2024 – Present
                                            </span>
                                        </div>
                                        <p className="text-xs text-cyan-300 font-medium">
                                            Amity University Kolkata Pharmaceutical Society
                                        </p>
                                        <p className="mt-1 text-xs text-gray-300">
                                            Active participant in pharmaceutical seminars, campus health awareness drives, and academic research discussions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills & Certifications Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                                    <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                                        Technical & Clinical Skills
                                    </h2>
                                    <div className="flex flex-wrap gap-1.5 text-xs text-gray-300">
                                        {['Hospital Pharmacy', 'Drug Logistics', 'Cold-Chain Maintenance', 'GLP & Lab Safety', 'Phytochemistry', 'Dosage Calculations', 'Prescription Handling'].map(skill => (
                                            <span key={skill} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] border border-slate-700">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                                    <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                                        Certifications
                                    </h2>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li>• <strong>Manipal Hospital Internship Certificate</strong> (2026)</li>
                                        <li>• <strong>First Aid & Emergency Life Support</strong> (2024)</li>
                                        <li>• <strong>Good Laboratory Practices (GLP)</strong> (2024)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-800 bg-slate-900 text-xs">
                            <span className="text-gray-400">
                                Ankur Mondal • Updated October 2026
                            </span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        onClose();
                                        if (onOpenCertificate) onOpenCertificate();
                                    }}
                                    className="text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                                >
                                    View Internship Doc ↗
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
