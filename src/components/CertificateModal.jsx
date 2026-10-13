import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaTimes,
    FaExternalLinkAlt,
    FaDownload,
    FaCheckCircle,
    FaHospital,
    FaGoogleDrive,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaAward,
    FaBoxes
} from 'react-icons/fa';

const CertificateModal = ({ isOpen, onClose }) => {
    // Close on Escape key
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

    const driveUrl = "https://drive.google.com/file/d/1hxX7XPk-OjdzNcxJtucI3ceV_TKdb1gC/view?usp=drivesdk";
    const drivePreviewUrl = "https://drive.google.com/file/d/1hxX7XPk-OjdzNcxJtucI3ceV_TKdb1gC/preview";
    const localPdfUrl = "/internship-certificate.pdf";

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden z-10"
                    >
                        {/* Glowing Top Line */}
                        <div className="h-1 bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-500" />

                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/90">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-secondary-400/30 text-secondary-400">
                                    <FaHospital className="text-xl" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg md:text-xl font-display font-bold text-white">
                                            Internship Certificate
                                        </h3>
                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                            <FaCheckCircle className="text-[10px]" /> Verified
                                        </span>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-400">
                                        Manipal Hospital Broadway • A Unit of Manipal Hospitals (East) India Pvt. Ltd.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
                                aria-label="Close modal"
                            >
                                <FaTimes className="text-lg" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
                            {/* Summary Cards Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">Candidate</span>
                                    <span className="text-sm font-semibold text-white mt-0.5 block">Ankur Mondal</span>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">Role</span>
                                    <span className="text-sm font-semibold text-cyan-300 mt-0.5 block">Pharmacy Intern</span>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">Department</span>
                                    <span className="text-sm font-semibold text-emerald-300 mt-0.5 block">Supply Chain & Procurement</span>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">Tenure</span>
                                    <span className="text-sm font-semibold text-gray-200 mt-0.5 block">02/07/2026 - 01/08/2026</span>
                                </div>
                            </div>

                            {/* Official Verification Snippet */}
                            <div className="p-4 rounded-xl bg-gradient-to-r from-primary-950/40 via-secondary-950/30 to-slate-900 border border-primary-500/20 text-sm text-gray-300">
                                <div className="flex items-start gap-3">
                                    <FaAward className="text-amber-400 text-lg mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-white mb-1">
                                            Letter of Recommendation & Completion:
                                        </p>
                                        <p className="text-xs text-gray-300 leading-relaxed italic">
                                            "This is to certify that Mr. Ankur Mondal has successfully completed his internship with us from 02/07/2026 to 01/08/2026. During this period, he has assisted as a pharmacy intern in the department of Supply Chain & Procurement at Manipal Hospital Broadway. In the internship his performance on the assigned work and his conduct was found to be good."
                                        </p>
                                        <p className="text-[11px] text-gray-400 mt-2 font-medium">
                                            — Sudeshna Banerjee, Regional HR Head (East), Manipal Hospitals Bengal Pvt. Ltd.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* PDF Viewer Container */}
                            <div className="relative w-full h-[360px] md:h-[420px] rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-inner">
                                <iframe
                                    src={drivePreviewUrl}
                                    title="Internship Certificate Preview"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-slate-900/90">
                            <span className="text-xs text-gray-400">
                                Source: Google Drive Official Document
                            </span>

                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <a
                                    href={localPdfUrl}
                                    download="Ankur_Mondal_Internship_Certificate.pdf"
                                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-gray-200 border border-slate-700 transition-colors"
                                >
                                    <FaDownload className="text-xs text-secondary-400" />
                                    Download PDF
                                </a>

                                <a
                                    href={driveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-500 hover:to-secondary-400 text-white shadow-lg shadow-primary-500/25 transition-all"
                                >
                                    <FaGoogleDrive className="text-sm" />
                                    Open in Google Drive
                                    <FaExternalLinkAlt className="text-[10px]" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CertificateModal;
