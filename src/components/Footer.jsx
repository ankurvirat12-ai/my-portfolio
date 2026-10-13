import { motion } from 'framer-motion';
import { FaHeart, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Dosage Tool', href: '#tools' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="relative border-t border-slate-800 bg-slate-950/80 backdrop-blur-xl">
            <div className="section-container py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
                    <div>
                        <h4 className="font-display font-bold text-lg text-white">Ankur Mondal</h4>
                        <p className="text-xs text-gray-400 mt-0.5">
                            3rd-Year B. Pharm Student • Amity University Kolkata
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4 text-lg">
                        <a
                            href="https://www.linkedin.com/in/ankur-mondal-pharmacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-900"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/iamankurofiicial_06"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-400 transition-colors p-2 rounded-lg hover:bg-slate-900"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.facebook.com/ankur.mondal.3990418"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-slate-900"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="mailto:ankur.virat12@gmail.com"
                            className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-slate-900"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
                    {/* Copyright */}
                    <p className="text-gray-400 text-xs flex items-center gap-1.5">
                        © {currentYear} Ankur Mondal. Made with
                        <FaHeart className="text-red-500 animate-pulse text-xs" />
                        for Pharmaceutical Science & Patient Care.
                    </p>

                    {/* Quick Links */}
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
                        {quickLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-cyan-300 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
