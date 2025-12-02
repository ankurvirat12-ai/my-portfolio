import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/10 bg-slate-950/50 backdrop-blur-lg">
            <div className="section-container py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm flex items-center gap-2"
                    >
                        © {currentYear} Pharmacy Portfolio. Made with
                        <FaHeart className="text-red-500 animate-pulse" />
                        by a B. Pharm. Student
                    </motion.p>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-6 text-sm"
                    >
                        {['About', 'Education', 'Skills ', 'Experience', 'Contact'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-gray-400 hover:text-primary-400 transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </motion.div>

                    {/* Powered By */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 text-sm"
                    >
                        Built with <span className="gradient-text font-semibold">React</span> &
                        <span className="gradient-text font-semibold"> Tailwind CSS</span>
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
