import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create WhatsApp message
        const whatsappMessage = `Hi, I'm ${formData.name}. ${formData.message}`;
        const whatsappUrl = `https://wa.me/918514058627?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        // Reset form
        setFormData({ name: '', message: '' });
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'ankur.virat12@gmail.com',
            link: 'mailto:ankur.virat12@gmail.com',
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: '+91 8514058627',
            link: 'tel:+918514058627',
        },
        {
            icon: FaWhatsapp,
            label: 'WhatsApp',
            value: 'Message on WhatsApp',
            link: 'https://wa.me/918514058627',
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: 'Kolkata, West Bengal, India',
            link: '#',
        },
    ];

    const socialLinks = [
        { icon: FaInstagram, label: 'Instagram', link: 'https://www.instagram.com/iamankurofiicial_06', color: 'hover:text-pink-400' },
        { icon: FaFacebook, label: 'Facebook', link: 'https://www.facebook.com/ankur.mondal.3990418', color: 'hover:text-blue-500' },
    ];

    return (
        <section id="contact" className="section-container bg-gradient-to-b from-transparent via-accent-950/10 to-transparent" ref={ref}>
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
                        Get In Touch
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 100 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-secondary-400 mx-auto rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-gray-400 mt-4 max-w-2xl mx-auto"
                    >
                        Feel free to reach out for collaborations, opportunities, or just a friendly chat about pharmaceutical sciences!
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-display font-bold text-white mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.label}
                                        href={info.link}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                        className="flex items-center gap-4 glass-card group hover:scale-105 transition-all duration-300"
                                    >
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-400 group-hover:scale-110 transition-transform">
                                            <info.icon className="text-xl text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">{info.label}</p>
                                            <p className="text-white font-medium">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <h3 className="text-2xl font-display font-bold text-white mb-6">
                                Connect With Me
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`glass p-4 rounded-xl text-2xl text-gray-400 ${social.color} transition-colors`}
                                        aria-label={social.label}
                                    >
                                        <social.icon />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-card space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full btn-primary flex items-center justify-center gap-2"
                            >
                                <FaWhatsapp className="text-xl" />
                                <span>Send via WhatsApp</span>
                            </motion.button>

                            {formStatus && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-accent-400 font-medium"
                                >
                                    {formStatus}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
