import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUserGraduate, FaFlask, FaHeart, FaLightbulb } from 'react-icons/fa';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const highlights = [
        {
            icon: FaUserGraduate,
            title: 'Academic Excellence',
            description: 'Dedicated to achieving excellence in pharmaceutical sciences',
        },
        {
            icon: FaFlask,
            title: 'Research Focused',
            description: 'Passionate about drug discovery and pharmaceutical research',
        },
        {
            icon: FaHeart,
            title: 'Patient Care',
            description: 'Committed to improving patient outcomes through pharmacy',
        },
        {
            icon: FaLightbulb,
            title: 'Innovation Driven',
            description: 'Exploring new approaches in pharmaceutical technology',
        },
    ];

    return (
        <section id="about" className="section-container" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4"
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 100 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto rounded-full"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative group"
                    >
                        <div className="glass-card p-4 max-w-md mx-auto">
                            <div className="relative overflow-hidden rounded-xl aspect-square">
                                <img
                                    src="/profile.jpg"
                                    alt="Ankur Mondal"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-400/20 rounded-full blur-2xl"></div>
                    </motion.div>

                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-display font-bold text-white">
                            Passionate About <span className="gradient-text">Pharmaceutical Sciences</span>
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            I am Ankur Mondal, a dedicated second-year B. Pharm. student at Amity University Kolkata.
                            Currently building my foundation in pharmaceutical sciences with a focus on understanding
                            drug mechanisms, formulations, and their impact on patient health.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            As an aspiring pharmacist, I am actively learning and exploring various aspects of
                            pharmacy through coursework, practical sessions, and self-study. My goal is to gain
                            comprehensive knowledge and skills to contribute meaningfully to the healthcare sector.
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                { number: '8.2', label: 'CGPA' },
                                { number: '3+', label: 'Projects' },
                                { number: '1+', label: 'Certificate' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                    className="glass-card text-center"
                                >
                                    <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
                                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-card text-center group cursor-pointer"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="text-2xl text-white" />
                            </div>
                            <h4 className="font-display font-semibold text-lg mb-2 text-white">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
