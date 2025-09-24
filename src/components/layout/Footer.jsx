/** @format */

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { GitHub, LinkedIn, Twitter, Facebook } from "@mui/icons-material";
const Footer = () => {
    const { colors } = useTheme();

    const socialLinks = [
        {
            icon: GitHub,
            name: "GitHub",
            href: "https://github.com/Marwanatef96",
            color: colors.accent,
        },
        {
            icon: LinkedIn,
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/marwan-atef-dev/",
            color: colors.primary,
        },
        {
            icon: Twitter,
            name: "Twitter",
            href: "https://x.com/MarwanAtef10",
            color: colors.accent,
        },
        {
            icon: Facebook,
            name: "Facebook",
            href: "https://www.facebook.com/Marwan.Atef.3572",
            color: "#ea4335",
        },
    ];

    const quickLinks = [
        { label: "About", href: "#about", icon: "👨‍💻" },
        { label: "Skills", href: "#skills", icon: "⚡" },
        { label: "Projects", href: "#projects", icon: "🚀" },
        { label: "Experience", href: "#experience", icon: "💼" },
        { label: "Contact", href: "#contact", icon: "📧" },
    ];

    const technologies = [
        "React",
        "Material UI",
        "Tailwind CSS",
        "Bootstrap React",
        "Redux Toolkit",
        "Chakra UI",
        "TanStack Query",
        "Axios",
        "Framer Motion",
        "React Hook Form",
        "React Router",
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Floating particles component matching Experience section
    const FloatingParticles = () => (
        <div className='absolute inset-0 overflow-hidden pointer-events-none z-0'>
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className='absolute w-1 h-1 rounded-full opacity-30'
                    style={{
                        backgroundColor: colors.primary,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );

    return (
        <footer
            className='relative py-16 overflow-hidden border-t'
            style={{
                background: `
          radial-gradient(circle at 25% 30%, ${colors.primary}0f 0%, transparent 50%),
          radial-gradient(circle at 75% 70%, ${colors.accent}0f 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, ${colors.secondary}0a 0%, transparent 50%),
          linear-gradient(135deg, ${colors.accent}0a 0%, ${colors.background.main}f2 100%)
        `,
                borderTopColor: colors.border,
            }}>
            <FloatingParticles />

            <div id='footer' className='relative z-10 max-w-6xl mx-auto px-6'>
                {/* Main Footer Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                    }}
                    viewport={{ once: true }}>
                    <div
                        className='relative p-8 rounded-2xl border mb-6 backdrop-blur-xl shadow-2xl overflow-hidden'
                        style={{
                            background: `
                linear-gradient(135deg, 
                  ${colors.background.glass} 0%, 
                  ${colors.background.paper}66 100%
                )
              `,
                            borderColor: colors.border,
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        }}>
                        {/* Decorative gradient overlay */}
                        <div
                            className='absolute top-0 right-0 w-40 h-40 rounded-full filter blur-3xl -z-10'
                            style={{
                                background: `radial-gradient(circle, ${colors.accent}1a, transparent 70%)`,
                            }}
                        />

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {/* Brand & Description */}
                            <div className='md:col-span-1'>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    viewport={{ once: true }}>
                                    <motion.div
                                        animate={{
                                            y: [-15, 5, -15],
                                            transition: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            },
                                        }}>
                                        <h2
                                            onClick={scrollToTop}
                                            className='text-3xl md:text-4xl font-bold mb-3 cursor-pointer transition-all duration-300 hover:scale-105'
                                            style={{
                                                backgroundClip: "text",
                                                WebkitBackgroundClip: "text",
                                                color: colors.accent,
                                            }}>
                                            &lt;Marwan Atef /&gt;
                                        </h2>
                                    </motion.div>

                                    <p
                                        className='text-lg leading-relaxed mb-4'
                                        style={{
                                            color: colors.text.secondary,
                                        }}>
                                        Passionate frontend developer creating
                                        exceptional digital experiences with
                                        modern web technologies. Always
                                        learning, always building.
                                    </p>

                                    {/* Location */}
                                    <div className='flex items-center mb-4 gap-2'>
                                        <span
                                            className='text-xl'
                                            style={{ color: colors.accent }}>
                                            📍
                                        </span>
                                        <span
                                            className='font-medium'
                                            style={{
                                                color: colors.text.secondary,
                                            }}>
                                            Ismailia, Egypt
                                        </span>
                                    </div>

                                    {/* Social Links */}
                                    <div className='flex gap-3'>
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.href}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0,
                                                    rotate: -180,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    rotate: 0,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: index * 0.1,
                                                    type: "spring",
                                                    stiffness: 200,
                                                }}
                                                whileHover={{
                                                    scale: 1.2,
                                                    y: -8,
                                                }}
                                                whileTap={{ scale: 0.9 }}
                                                viewport={{ once: true }}
                                                className='w-12 h-12 rounded-lg border transition-all duration-300 flex items-center justify-center text-xl backdrop-blur-sm hover:shadow-lg'
                                                style={{
                                                    backgroundColor: `rgba(${parseInt(
                                                        social.color.slice(
                                                            1,
                                                            3
                                                        ),
                                                        16
                                                    )}, ${parseInt(
                                                        social.color.slice(
                                                            3,
                                                            5
                                                        ),
                                                        16
                                                    )}, ${parseInt(
                                                        social.color.slice(
                                                            5,
                                                            7
                                                        ),
                                                        16
                                                    )}, 0.15)`,
                                                    borderColor: `rgba(${parseInt(
                                                        social.color.slice(
                                                            1,
                                                            3
                                                        ),
                                                        16
                                                    )}, ${parseInt(
                                                        social.color.slice(
                                                            3,
                                                            5
                                                        ),
                                                        16
                                                    )}, ${parseInt(
                                                        social.color.slice(
                                                            5,
                                                            7
                                                        ),
                                                        16
                                                    )}, 0.3)`,
                                                }}>
                                                <social.icon />
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Quick Links */}
                            <div className='md:col-span-1'>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}>
                                    <h3
                                        className='text-xl font-bold mb-4'
                                        style={{ color: colors.text.primary }}>
                                        Quick Links
                                    </h3>

                                    <div className='flex flex-col gap-3'>
                                        {quickLinks.map((link, index) => (
                                            <motion.button
                                                key={link.label}
                                                onClick={() =>
                                                    scrollToSection(link.href)
                                                }
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.1,
                                                }}
                                                whileHover={{
                                                    scale: 1.02,
                                                    x: 5,
                                                }}
                                                viewport={{ once: true }}
                                                className='flex items-center gap-3 text-left py-2 transition-colors duration-300 bg-transparent border-none cursor-pointer'
                                                style={{
                                                    color: colors.text
                                                        .secondary,
                                                }}
                                                onMouseEnter={(e) =>
                                                    (e.target.style.color =
                                                        colors.accent)
                                                }
                                                onMouseLeave={(e) =>
                                                    (e.target.style.color =
                                                        colors.text.secondary)
                                                }>
                                                <span className='text-lg'>
                                                    {link.icon}
                                                </span>
                                                <span className='font-medium'>
                                                    {link.label}
                                                </span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Technologies */}
                            <div className='md:col-span-1'>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}>
                                    <h3
                                        className='text-xl font-bold mb-4'
                                        style={{ color: colors.text.primary }}>
                                        Technologies
                                    </h3>

                                    <div className='flex flex-wrap gap-2'>
                                        {technologies.map((tech, index) => (
                                            <motion.div
                                                key={tech}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    y: -2,
                                                }}
                                                transition={{
                                                    delay: index * 0.05,
                                                }}
                                                viewport={{ once: true }}
                                                className='px-3 py-1 rounded-md text-sm font-medium border transition-all duration-300'
                                                style={{
                                                    backgroundColor: `${colors.primary}26`,
                                                    color: colors.primary,
                                                    borderColor: `${colors.primary}4d`,
                                                }}>
                                                {tech}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}>
                    <div
                        className='flex flex-col md:flex-row justify-between items-center gap-4 py-4 border-t'
                        style={{ borderTopColor: colors.border }}>
                        <p
                            className='text-center md:text-left'
                            style={{ color: colors.text.secondary }}>
                            © {new Date().getFullYear()} Marwan Atef. All rights
                            reserved.
                        </p>

                        <div
                            className='flex items-center gap-2'
                            style={{ color: colors.text.secondary }}>
                            <span>Built with</span>
                            <motion.span
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                                className='text-xl'
                                style={{ color: colors.accent }}>
                                ❤️
                            </motion.span>
                            <span>using React & Framer Motion</span>
                        </div>
                    </div>
                </motion.div>

                {/* Back to Top Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='text-center'>
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='px-6 py-3 rounded-xl border font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg'
                        style={{
                            borderColor: colors.accent,
                            color: colors.accent,
                            backgroundColor: `${colors.accent}1a`,
                        }}>
                        <span className='flex items-center gap-2'>
                            <motion.span
                                animate={{ y: [-2, 2, -2] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}>
                                ↑
                            </motion.span>
                            Back to Top
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
