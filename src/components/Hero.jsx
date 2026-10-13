import { motion } from 'framer-motion';
import {
    FaEnvelope,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaFileAlt,
    FaAward,
    FaDownload,
    FaAddressCard
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = ({ onOpenCertificate, onOpenResume }) => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'B. Pharm. Student | Future Pharmacist';

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const driveUrl = "https://drive.google.com/file/d/1hxX7XPk-OjdzNcxJtucI3ceV_TKdb1gC/view?usp=drivesdk";

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="section-container relative z-10">
                <div className="text-center space-y-7 max-w-4xl mx-auto">
                    {/* Internship Announcement Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block"
                    >
                        <button
                            onClick={onOpenCertificate ? onOpenCertificate : () => window.open(driveUrl, '_blank')}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-cyan-500/40 text-xs md:text-sm text-cyan-300 shadow-lg shadow-cyan-500/10 hover:border-cyan-400 hover:bg-slate-800/80 transition-all cursor-pointer group"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-gray-300">
                                Completed Internship at <strong className="text-cyan-300 font-semibold">Manipal Hospital Broadway</strong>
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-700/50 group-hover:scale-105 transition-transform">
                                <FaAward className="text-[10px]" /> View Doc ↗
                            </span>
                        </button>
                    </motion.div>

                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-primary-400 font-semibold text-lg md:text-xl"
                    >
                        Hello, I'm
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold gradient-text text-shadow tracking-tight"
                    >
                        Ankur Mondal
                    </motion.h1>

                    {/* Typing Effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-display text-gray-300 h-12 md:h-16 flex items-center justify-center"
                    >
                        <span>{displayText}</span>
                        <span className="animate-pulse text-primary-400 ml-1">|</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        3rd-year B. Pharm. student at Amity University Kolkata with clinical hospital pharmacy training in supply chain & drug logistics at Manipal Hospitals. Building a strong foundation to become a skilled healthcare professional.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <button onClick={scrollToContact} className="btn-primary w-full sm:w-auto">
                            Get In Touch
                        </button>

                        <button
                            onClick={onOpenCertificate ? onOpenCertificate : () => window.open(driveUrl, '_blank')}
                            className="btn-certificate w-full sm:w-auto"
                        >
                            <FaFileAlt className="text-secondary-400" />
                            <span>View Internship Doc</span>
                        </button>

                        <button
                            onClick={onOpenResume}
                            className="btn-outline w-full sm:w-auto text-sm"
                        >
                            <FaAddressCard className="text-sm text-cyan-400" />
                            <span>Curriculum Vitae (CV)</span>
                        </button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex items-center justify-center gap-6 pt-6"
                    >
                        {[
                            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ankur-mondal-pharmacy', label: 'LinkedIn' },
                            { icon: FaInstagram, href: 'https://www.instagram.com/iamankurofiicial_06', label: 'Instagram' },
                            { icon: FaFacebook, href: 'https://www.facebook.com/ankur.mondal.3990418', label: 'Facebook' },
                            { icon: FaEnvelope, href: 'mailto:ankur.virat12@gmail.com', label: 'Email' },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-xl hover:bg-slate-800/50"
                                aria-label={label}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 8, 0] }}
                        transition={{
                            opacity: { delay: 1.2 },
                            y: { repeat: Infinity, duration: 2 }
                        }}
                        className="pt-8"
                    >
                        <div className="w-5 h-9 border-2 border-primary-400/60 rounded-full flex items-start justify-center p-1.5 mx-auto">
                            <div className="w-1 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
