import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUniversity, FaGraduationCap, FaCalendar, FaStar } from 'react-icons/fa';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const education = {
        degree: 'Bachelor of Pharmacy (B. Pharm.)',
        university: 'Amity University Kolkata',
        location: 'Kolkata, West Bengal',
        duration: '2024 - 2028 (Currently in 2nd Year)',
        gpa: '8.2 / 10.0',
        achievements: [
            'Pursuing Pharmacy with Strong Foundation',
            'Active Participant in University Activities',
            'Completed First Aid Training Certification',
            'Member of Pharmaceutical Society',
        ],
        coursework: [
            'Pharmaceutical Chemistry I',
            'Pharmaceutics I',
            'Pharmacognosy',
            'Human Anatomy & Physiology',
            'Pharmaceutical Organic Chemistry',
            'Biochemistry',
            'Mathematics & Biostatistics',
            'Communication Skills',
        ],
    };
    return (
        <section id="education" className="section-container bg-gradient-to-b from-transparent via-primary-950/10 to-transparent" ref={ref}>
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
                        Education
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 100 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto rounded-full"
                    />
                </div>

                {/* Main Education Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass-card relative overflow-hidden group">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 p-8 md:p-12">
                            {/* University Logo Placeholder */}
                            <div className="flex items-start justify-between flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FaUniversity className="text-3xl text-primary-400" />
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                                            {education.university}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                                        <FaCalendar className="text-secondary-400" />
                                        <span>{education.duration}</span>
                                    </div>

                                    <div className="flex items-center gap-3 mb-4">
                                        <FaGraduationCap className="text-2xl text-accent-500" />
                                        <span className="text-xl font-semibold text-white">{education.degree}</span>
                                    </div>

                                    <div className="flex items-center gap-2 mb-6">
                                        <FaStar className="text-yellow-400" />
                                        <span className="text-lg font-semibold text-white">GPA: {education.gpa}</span>
                                    </div>

                                    <p className="text-gray-400 mb-6">{education.location}</p>
                                </div>

                                {/* GPA Badge */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="glass p-6 rounded-2xl text-center min-w-[120px]"
                                >
                                    <div className="text-4xl font-bold gradient-text">{education.gpa.split('/')[0]}</div>
                                    <div className="text-sm text-gray-400 mt-1">/ 10.0 CGPA</div>
                                </motion.div>
                            </div>

                            {/* Achievements */}
                            <div className="mt-8">
                                <h4 className="text-xl font-display font-semibold text-white mb-4 flex items-center gap-2">
                                    <FaStar className="text-accent-500" />
                                    Key Achievements
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {education.achievements.map((achievement, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                            className="flex items-center gap-2 text-gray-300"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-400"></div>
                                            {achievement}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Relevant Coursework */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 max-w-4xl mx-auto"
                >
                    <h4 className="text-2xl font-display font-semibold text-white mb-6 text-center">
                        Relevant Coursework
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {education.coursework.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="glass-card text-center text-sm font-medium text-gray-300 cursor-default"
                            >
                                {course}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Education;
