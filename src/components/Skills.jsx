import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
    FaPills, FaFlask, FaMicroscope, FaUserMd,
    FaHospital, FaBoxes, FaChartLine, FaLanguage, FaUsers, FaCheckDouble
} from 'react-icons/fa';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const skillCategories = [
        {
            title: 'Pharmaceutical Knowledge',
            icon: FaPills,
            color: 'from-primary-500 to-primary-700',
            skills: [
                { name: 'Pharmaceutical Chemistry', level: 75 },
                { name: 'Pharmaceutics & Formulations', level: 78 },
                { name: 'Pharmacognosy', level: 75 },
                { name: 'Human Anatomy & Physiology', level: 72 },
            ],
        },
        {
            title: 'Hospital Pharmacy & Supply Chain',
            icon: FaHospital,
            color: 'from-cyan-500 to-teal-600',
            skills: [
                { name: 'Hospital Drug Procurement', level: 82 },
                { name: 'Pharmaceutical Inventory Control', level: 85 },
                { name: 'Cold-Chain Storage Management', level: 80 },
                { name: 'Healthcare Quality Compliance', level: 78 },
            ],
        },
        {
            title: 'Laboratory & Practical Skills',
            icon: FaFlask,
            color: 'from-secondary-400 to-secondary-600',
            skills: [
                { name: 'Pharmaceutical Preparation', level: 70 },
                { name: 'Titration & Chemical Assay', level: 74 },
                { name: 'Microscopy & Identification', level: 72 },
                { name: 'Laboratory Safety & GLP', level: 80 },
            ],
        },
        {
            title: 'Clinical & Academic Competencies',
            icon: FaUserMd,
            color: 'from-accent-500 to-accent-700',
            skills: [
                { name: 'Medical Terminology & Dosage', level: 78 },
                { name: 'Drug Classification & Pharmacology', level: 75 },
                { name: 'Biochemistry Concepts', level: 70 },
                { name: 'Research & Documentation', level: 76 },
            ],
        },
    ];

    const softSkills = [
        { name: 'Clinical Communication', icon: FaLanguage },
        { name: 'Healthcare Teamwork', icon: FaUsers },
        { name: 'Inventory Accuracy', icon: FaBoxes },
        { name: 'Critical Problem Solving', icon: FaChartLine },
    ];

    return (
        <section id="skills" className="section-container relative" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
                    >
                        Competencies
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4"
                    >
                        Skills & Expertise
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 100 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto rounded-full"
                    />
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4">
                        Integrating pharmaceutical coursework with hospital supply chain logistics and practical laboratory techniques.
                    </p>
                </div>

                {/* Skill Categories Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + catIndex * 0.1 }}
                            className="glass-card hover:border-cyan-500/30 transition-all"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg text-white`}>
                                    <category.icon className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-display font-semibold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills with Progress Bars */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillBar
                                        key={skill.name}
                                        skill={skill}
                                        isInView={isInView}
                                        delay={0.5 + catIndex * 0.1 + skillIndex * 0.05}
                                        color={category.color}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Core Competencies */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <h3 className="text-2xl font-display font-semibold text-white mb-8 text-center">
                        Professional Strengths
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -6 }}
                                className="glass-card text-center group cursor-default border-slate-800 hover:border-cyan-500/40"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-400 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    <skill.icon className="text-xl text-white" />
                                </div>
                                <p className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm md:text-base">
                                    {skill.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

// Skill Bar Component with Animation
const SkillBar = ({ skill, isInView, delay, color }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                setWidth(skill.level);
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isInView, skill.level, delay]);

    return (
        <div>
            <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                <span className="text-cyan-300 text-xs font-semibold">{skill.level}%</span>
            </div>
            <div className="h-2 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
                >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
