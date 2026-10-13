import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaAward, FaAddressCard } from 'react-icons/fa';

const Navbar = ({ onOpenCertificate, onOpenResume }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Dosage Tool', href: '#tools' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sectionIds = navLinks.map(l => l.href.slice(1));
            const current = sectionIds.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 120 && rect.bottom >= 120;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-2xl' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand */}
                    <div
                        className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
                        onClick={() => scrollToSection('#home')}
                    >
                        <div className="relative">
                            <img
                                src="/profile.jpg"
                                alt="Ankur Mondal"
                                className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan-400/50 group-hover:ring-cyan-300 transition-all duration-300"
                            />
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" title="Available" />
                        </div>
                        <div>
                            <span className="font-display font-bold text-white text-sm md:text-base block group-hover:text-cyan-300 transition-colors">
                                Ankur Mondal
                            </span>
                            <span className="text-[10px] md:text-[11px] text-cyan-400 block font-medium">
                                B. Pharm (3rd Year)
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center space-x-5">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className={`relative font-medium text-xs transition-colors duration-200 cursor-pointer ${activeSection === link.href.slice(1)
                                    ? 'text-cyan-300 font-semibold'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.href.slice(1) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-400"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center gap-2.5">
                        <button
                            onClick={onOpenCertificate ? onOpenCertificate : () => scrollToSection('#experience')}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 shadow-sm transition-all cursor-pointer"
                        >
                            <FaAward className="text-amber-400 text-xs" />
                            <span>Internship Doc</span>
                        </button>

                        <button
                            onClick={onOpenResume}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 border border-slate-700 text-gray-200 shadow-sm transition-all cursor-pointer"
                        >
                            <FaAddressCard className="text-cyan-400 text-xs" />
                            <span>CV</span>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="xl:hidden text-white text-2xl focus:outline-none p-2 rounded-lg hover:bg-slate-800/60"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                className="xl:hidden overflow-hidden glass border-t border-slate-800"
            >
                <div className="px-6 py-5 space-y-2.5 max-h-[75vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className={`block w-full text-left font-medium text-sm py-1.5 transition-colors duration-200 ${activeSection === link.href.slice(1)
                                ? 'text-cyan-400 font-semibold'
                                : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}

                    <div className="pt-4 border-t border-slate-800 space-y-2">
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                if (onOpenCertificate) onOpenCertificate();
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        >
                            <FaAward className="text-amber-400" />
                            <span>View Internship Certificate</span>
                        </button>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                if (onOpenResume) onOpenResume();
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold bg-slate-800 text-gray-200 border border-slate-700"
                        >
                            <FaAddressCard className="text-cyan-400" />
                            <span>View Curriculum Vitae (CV)</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
