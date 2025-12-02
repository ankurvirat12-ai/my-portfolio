import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
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

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="section-container relative z-10">
                <div className="text-center space-y-8">
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-primary-400 font-semibold text-lg md:text-xl"
                    >
                        Hello, I'm
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold gradient-text text-shadow"
                    >
                        Ankur Mondal
                    </motion.h1>

                    {/* Typing Effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-display text-gray-300 h-12 md:h-16"
                    >
                        {displayText}
                        <span className="animate-pulse text-primary-400">|</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Second-year B. Pharm. student at Amity University Kolkata with a passion for pharmaceutical
                        sciences and patient care. Building a strong foundation to become a skilled pharmacist.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
                    >
                        <button onClick={scrollToContact} className="btn-primary">
                            Get In Touch
                        </button>
                        <button
                            onClick={() => window.open('#', '_blank')}
                            className="btn-outline"
                        >
                            Download CV
                        </button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex items-center justify-center gap-8 pt-12"
                    >
                        {[
                            { icon: FaInstagram, href: 'https://www.instagram.com/iamankurofiicial_06', label: 'Instagram' },
                            { icon: FaFacebook, href: 'https://www.facebook.com/ankur.mondal.3990418', label: 'Facebook' },
                            { icon: FaEnvelope, href: 'mailto:ankur.virat12@gmail.com', label: 'Email' },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-3xl text-gray-400 hover:text-primary-400 transition-colors duration-300"
                                aria-label={label}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{
                            opacity: { delay: 1.2 },
                            y: { repeat: Infinity, duration: 2 }
                        }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex items-start justify-center p-2">
                            <div className="w-1 h-2 bg-primary-400 rounded-full"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
