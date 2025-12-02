import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const projects = [
        {
            title: 'Medicinal Plant Identification',
            description: 'Practical project identifying and documenting various medicinal plants, their active constituents, and traditional therapeutic uses as part of Pharmacognosy coursework.',
            tags: ['Pharmacognosy', 'Herbology', 'Documentation'],
            link: '#',
            github: '#',
        },
        {
            title: 'First Aid & Emergency Care Certification',
            description: 'Completed certification course in basic first aid and emergency medical care, participating in community health awareness programs and learning life-saving techniques.',
            tags: ['Healthcare', 'Community Service', 'Training'],
            link: '#',
            github: '#',
        },
        {
            title: 'Pharmaceutical Anatomy Study Guide',
            description: 'Created a comprehensive digital study guide for human anatomy and physiology with focus on pharmaceutical applications and drug action sites.',
            tags: ['Anatomy', 'Study Aid', 'Documentation'],
            link: '#',
            github: '#',
        },
    ];
    return (
        <section id="projects" className="section-container bg-gradient-to-b from-transparent via-secondary-950/10 to-transparent" ref={ref}>
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
                        Projects & Research
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 100 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto rounded-full"
                    />
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card group cursor-pointer h-full flex flex-col relative overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-secondary-500/0 group-hover:from-primary-600/10 group-hover:to-secondary-500/10 transition-all duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Project Title */}
                                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Project Description */}
                                <p className="text-gray-400 leading-relaxed mb-4 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full text-gray-300 hover:bg-white/20 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FaExternalLinkAlt />
                                        <span>View Details</span>
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FaGithub />
                                        <span>Repository</span>
                                    </a>
                                </div>
                            </div>

                            {/* Corner Decoration */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-center mt-12"
                >
                    <button className="btn-outline">
                        View All Projects
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
