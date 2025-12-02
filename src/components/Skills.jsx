import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
    FaPills, FaFlask, FaMicroscope, FaUserMd,
    FaLaptopCode, FaChartLine, FaLanguage, FaUsers
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
                { name: 'Pharmaceutical Chemistry', level: 70 },
                { name: 'Pharmaceutics', level: 72 },
                { name: 'Pharmacognosy', level: 75 },
                { name: 'Anatomy & Physiology', level: 68 },
            ],
        },
        {
            title: 'Laboratory Skills',
            icon: FaFlask,
            color: 'from-secondary-400 to-secondary-600',
            skills: [
                { name: 'Basic Lab Techniques', level: 65 },
                { name: 'Pharmaceutical Preparation', level: 60 },
                { name: 'Microscopy', level: 70 },
                { name: 'Titration Methods', level: 72 },
            ],
        },
        {
            title: 'Academic & Learning',
            icon: FaUserMd,
            color: 'from-accent-500 to-accent-700',
            skills: [
                { name: 'Medical Terminology', level: 75 },
                { name: 'Drug Classification', level: 70 },
                { name: 'Biochemistry Concepts', level: 68 },
                { name: 'Microbiology Basics', level: 65 },
            ],
        },
        {
            title: 'Technical Skills',
            icon: FaLaptopCode,
            color: 'from-purple-500 to-purple-700',
            skills: [
                { name: 'MS Office Suite', level: 80 },
                { name: 'Online Research', level: 75 },
                { name: 'Report Writing', level: 70 },
                { name: 'Presentation Skills', level: 72 },
            ],
        },
    ];

    const softSkills = [
        { name: 'Communication', icon: FaLanguage },
        { name: 'Team Collaboration', icon: FaUsers },
        { name: 'Research & Analysis', icon: FaMicroscope },
        { name: 'Problem Solving', icon: FaChartLine },
    ];

    return (
        <section id="skills" className="section-container" ref={ref}>
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
                        Skills & Expertise
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 100 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto rounded-full"
                    />
                </div>

                {/* Skill Categories Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 + catIndex * 0.1 }}
                            className="glass-card"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                                    <category.icon className="text-2xl text-white" />
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
                                        delay={0.7 + catIndex * 0.1 + skillIndex * 0.05}
                                        color={category.color}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <h3 className="text-2xl font-display font-semibold text-white mb-8 text-center">
                        Core Competencies
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="glass-card text-center group cursor-default"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-secondary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <skill.icon className="text-xl text-white" />
                                </div>
                                <p className="font-semibold text-white">{skill.name}</p>
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
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
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
