import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Navbar = ({ onOpenCertificate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'education', 'skills', 'experience', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

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
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo & Brand */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => scrollToSection('#home')}
                    >
                        <div className="relative">
                            <img
                                src="/profile.jpg"
                                alt="Ankur Mondal"
                                className="w-11 h-11 rounded-full object-cover ring-2 ring-cyan-400/50 group-hover:ring-cyan-300 transition-all duration-300"
                            />
                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900" title="Online" />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-display font-bold text-white text-base block group-hover:text-cyan-300 transition-colors">
                                Ankur Mondal
                            </span>
                            <span className="text-[11px] text-cyan-400 block font-medium">
                                B. Pharm (3rd Year)
                            </span>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-7">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                onClick={() => scrollToSection(link.href)}
                                className={`relative font-medium text-sm transition-colors duration-300 ${activeSection === link.href.slice(1)
                                    ? 'text-cyan-400 font-semibold'
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
                            </motion.button>
                        ))}

                        {/* Quick Internship Doc Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            onClick={() => onOpenCertificate ? onOpenCertificate() : scrollToSection('#experience')}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 hover:from-cyan-500/30 hover:to-emerald-500/30 border border-cyan-500/40 text-cyan-300 shadow-sm transition-all cursor-pointer"
                        >
                            <FaAward className="text-amber-400 text-xs" />
                            <span>Internship Doc</span>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white text-2xl focus:outline-none p-2 rounded-lg hover:bg-slate-800/60"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                className="md:hidden overflow-hidden glass border-t border-slate-800"
            >
                <div className="px-6 py-5 space-y-3">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className={`block w-full text-left font-medium text-base py-1.5 transition-colors duration-300 ${activeSection === link.href.slice(1)
                                ? 'text-cyan-400 font-semibold'
                                : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}

                    <div className="pt-3 border-t border-slate-800">
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                if (onOpenCertificate) onOpenCertificate();
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        >
                            <FaAward className="text-amber-400 text-sm" />
                            <span>View Internship Doc (Manipal Hospital)</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
