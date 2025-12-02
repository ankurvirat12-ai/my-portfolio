import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            role: 'Pharmacy Club Member',
            company: 'Amity University Kolkata Pharmaceutical Society',
            location: 'Kolkata, India',
            duration: 'Aug 2024 - Present',
            type: 'Extracurricular',
            responsibilities: [
                'Actively participate in pharmacy club meetings and academic discussions',
                'Assist in organizing pharmaceutical awareness events and guest lectures',
                'Collaborate with peers on study groups and project presentations',
                'Engage in workshops on pharmaceutical industry trends and career guidance',
            ],
            color: 'from-primary-500 to-primary-700',
        },
    ];
    return (
        <section id="experience" className="section-container" ref={ref}>
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
                        Experience
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 100 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto rounded-full"
                    />
                </div>

                {/* Experience Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-secondary-400 to-accent-500"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                                    }`}
                            >
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                                    <div className="glass-card group hover:scale-105 transition-transform duration-300">
                                        {/* Experience Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-lg font-semibold text-gray-300 mt-1">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${exp.color} rounded-full text-white`}>
                                                {exp.type}
                                            </span>
                                        </div>

                                        {/* Location and Duration */}
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-accent-500" />
                                                <span>{exp.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaCalendar className="text-secondary-400" />
                                                <span>{exp.duration}</span>
                                            </div>
                                        </div>

                                        {/* Responsibilities */}
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ duration: 0.4, delay: 0.7 + index * 0.2 + idx * 0.1 }}
                                                    className="flex items-start gap-2 text-gray-300 text-sm"
                                                >
                                                    <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}></div>
                                                    <span>{resp}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                                        className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-slate-950`}
                                    >
                                        <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-gradient-to-r from-primary-500 to-secondary-400"></div>
                                    </motion.div>
                                </div>

                                {/* Icon for mobile */}
                                <div className="md:hidden absolute -left-8 top-6">
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
