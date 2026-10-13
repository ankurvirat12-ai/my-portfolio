import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaLeaf,
    FaHospital,
    FaHeartbeat,
    FaBookMedical,
    FaExternalLinkAlt,
    FaEye,
    FaAward
} from 'react-icons/fa';

const Projects = ({ onOpenCertificate }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const projects = [
        {
            title: 'Medicinal Plant Herbarium & Pharmacognosy',
            category: 'Pharmacognosy & Herbology',
            icon: FaLeaf,
            color: 'from-emerald-500 to-teal-600',
            description: 'Comprehensive academic research documenting medicinal flora, botanical authentication, active phytochemical extraction methods (alkaloids, flavonoids, tannins), and traditional Ayurvedic vs. modern clinical therapeutic applications.',
            tags: ['Pharmacognosy', 'Phytochemistry', 'Botanical Assay', 'Herbology'],
            highlights: ['Active constituent classification', 'Therapeutic indices', 'Microscopic analysis'],
        },
        {
            title: 'Hospital Supply Chain & Cold-Chain Protocol',
            category: 'Hospital Pharmacy Case Study',
            icon: FaHospital,
            color: 'from-cyan-500 to-blue-600',
            description: 'Field case study conducted during internship at Manipal Hospital Broadway. Evaluated hospital medication replenishment, controlled temperature storage for biologicals and insulin, purchase orders, and inventory audit metrics.',
            tags: ['Hospital Pharmacy', 'Cold-Chain', 'Inventory Control', 'Compliance'],
            highlights: ['2°C - 8°C cold chain verification', 'Procurement cycle', 'Audit workflows'],
            hasCertificateLink: true,
        },
        {
            title: 'Pharmaceutical Anatomy & Drug Action Guide',
            category: 'Physiology & Pharmacology',
            icon: FaBookMedical,
            color: 'from-indigo-500 to-purple-600',
            description: 'Digital reference manual integrating human anatomical systems with pharmacokinetic targets. Details receptor families (GPCRs, ion channels, nuclear receptors) and major organ clearance pathways.',
            tags: ['Anatomy & Physiology', 'Drug Targets', 'Pharmacokinetics', 'Study Guide'],
            highlights: ['Organ-specific absorption', 'Receptor biology', 'Metabolic pathways'],
        },
        {
            title: 'First Aid & Emergency Medical Care Protocol',
            category: 'Emergency Clinical Response',
            icon: FaHeartbeat,
            color: 'from-rose-500 to-pink-600',
            description: 'Standard operating manual developed following certified first aid training. Outlines emergency response procedures for acute anaphylaxis, poisoning triage, thermal burns, and basic life support in community settings.',
            tags: ['Emergency Care', 'First Aid', 'Clinical Triage', 'Community Health'],
            highlights: ['Anaphylaxis protocols', 'Toxicology triage', 'Certified Life Support'],
        },
    ];

    return (
        <section id="projects" className="section-container relative" ref={ref}>
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
                        Research & Practice
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4"
                    >
                        Projects & Academic Work
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 100 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto rounded-full"
                    />
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4">
                        Curated academic projects, laboratory herbarium compilations, and hospital clinical investigations.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                                whileHover={{ y: -6 }}
                                className="glass-card-featured flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Card Header */}
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                                                <Icon className="text-xl" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-medium text-cyan-400 block">
                                                    {project.category}
                                                </span>
                                                <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-5">
                                        {project.description}
                                    </p>

                                    {/* Key Highlights */}
                                    <div className="mb-5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                                            Key Findings & Scope:
                                        </span>
                                        <ul className="space-y-1">
                                            {project.highlights.map((item, hIdx) => (
                                                <li key={hIdx} className="text-xs text-gray-300 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4 pt-2 border-t border-slate-800">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs font-medium bg-slate-800/80 text-cyan-200 border border-slate-700/60 rounded-lg"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links & Action */}
                                    {project.hasCertificateLink && (
                                        <div className="pt-2 flex items-center justify-between">
                                            <button
                                                onClick={onOpenCertificate}
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
                                            >
                                                <FaAward className="text-amber-400" />
                                                <span>View Hospital Certificate</span>
                                                <FaExternalLinkAlt className="text-[10px]" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
