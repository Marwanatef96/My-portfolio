/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
    const [activeHighlight, setActiveHighlight] = useState(null);
    const { colors } = useTheme();

    const highlights = [
        "Computer Engineering Graduate",
        "Frontend Development Specialist",
        "Problem-Solving Focused",
        "Responsive Design Expert",
        "API Integration",
        "Modern UI/UX",
    ];

    // Floating particles effect
    const FloatingParticles = () => (
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className='absolute w-1 h-1 rounded-full opacity-20'
                    style={{ backgroundColor: colors.primary }}
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        y: [null, -30, null],
                        x: [null, Math.random() * 50 - 25, null],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {
            y: 60,
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.8,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20,
            },
        },
    };

    return (
        <div className='relative min-h-screen py-20 overflow-hidden'>
            {/* Animated gradient background */}
            <div
                className='absolute inset-0'
                style={{
                    background: `
            radial-gradient(circle at 30% 40%, ${colors.primary}14 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, ${colors.accent}14 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, ${colors.secondary}0f 0%, transparent 50%),
            linear-gradient(135deg, ${colors.background.paper} 0%, ${colors.background.paper}80 100%)
          `,
                }}
            />

            <FloatingParticles />

            <div className='relative z-10 max-w-7xl mx-auto px-6'>
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className='text-center mb-16'>
                    <motion.h2
                        id='about'
                        className='text-5xl md:text-6xl font-bold mb-6'
                        style={{
                            color: colors.accent,
                            backgroundSize: "200% 200%",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                        }}
                        animate={{
                            backgroundPosition: ["0%", "100%", "0%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}>
                        About Me
                    </motion.h2>

                    <motion.div
                        className='w-24 h-1 mx-auto mb-8 rounded-full'
                        style={{
                            background: `linear-gradient(90deg, ${colors.accent}, ${colors.primary})`,
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    />
                </motion.div>

                {/* Main Content */}
                <motion.div
                    className='grid lg:grid-cols-2 gap-12 items-start'
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, margin: "-100px" }}>
                    {/* Left Column - About Text */}
                    <motion.div variants={itemVariants} className='space-y-6'>
                        <motion.div
                            variants={textVariants}
                            className='space-y-6'>
                            <p
                                className='text-lg leading-relaxed'
                                style={{ color: colors.text.secondary }}>
                                I'm a passionate{" "}
                                <span
                                    style={{ color: colors.accent }}
                                    className='font-semibold'>
                                    Frontend Web Developer
                                </span>{" "}
                                with a strong foundation in Computer
                                Engineering. My journey combines technical
                                expertise in web development giving me a unique
                                perspective on creating efficient and
                                user-friendly applications.
                            </p>

                            <p
                                className='text-lg leading-relaxed'
                                style={{ color: colors.text.secondary }}>
                                With experience in{" "}
                                <span
                                    style={{ color: colors.primary }}
                                    className='font-semibold'>
                                    React, JavaScript, HTML, and CSS
                                </span>
                                , I focus on building responsive and interactive
                                web applications. I'm particularly interested in
                                creating seamless user experiences and
                                implementing modern frontend technologies.
                            </p>

                            <p
                                className='text-lg leading-relaxed'
                                style={{ color: colors.text.secondary }}>
                                My background in engineering has strengthened my{" "}
                                <span
                                    style={{ color: colors.secondary }}
                                    className='font-semibold'>
                                    problem-solving skills
                                </span>{" "}
                                and attention to detail, which I apply to every
                                frontend project I work on.
                            </p>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div variants={textVariants} className='pt-6'>
                            <h3
                                className='text-2xl font-bold mb-6'
                                style={{ color: colors.accent }}>
                                Key Highlights
                            </h3>
                            <div className='flex flex-wrap gap-3'>
                                {highlights.map((highlight, index) => (
                                    <motion.div
                                        key={highlight}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.8,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            y: 0,
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2,
                                            boxShadow:
                                                "0 10px 25px rgba(6, 182, 212, 0.3)",
                                        }}
                                        transition={{
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15,
                                        }}
                                        viewport={{ once: true }}
                                        className='relative group cursor-pointer'
                                        onHoverStart={() =>
                                            setActiveHighlight(index)
                                        }
                                        onHoverEnd={() =>
                                            setActiveHighlight(null)
                                        }>
                                        <div
                                            className='px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300'
                                            style={{
                                                background:
                                                    activeHighlight === index
                                                        ? `linear-gradient(135deg, ${colors.accent}20, ${colors.primary}20)`
                                                        : `linear-gradient(135deg, ${colors.background.glass}, ${colors.background.paper})`,
                                                borderColor:
                                                    activeHighlight === index
                                                        ? colors.accent
                                                        : colors.border,
                                                color:
                                                    activeHighlight === index
                                                        ? colors.accent
                                                        : colors.text.secondary,
                                            }}>
                                            <span className='font-medium text-sm'>
                                                {highlight}
                                            </span>

                                            {/* Glow effect */}
                                            <motion.div
                                                className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                                style={{
                                                    background: `radial-gradient(circle at center, ${colors.accent}15 0%, transparent 70%)`,
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Education Card */}
                    <motion.div variants={itemVariants}>
                        <div
                            className='relative p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 group hover:scale-[1.02]'
                            style={{
                                background: `
                  linear-gradient(135deg, ${colors.background.glass} 0%, ${colors.background.paper} 100%)
                `,
                                borderColor: colors.border,
                                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                            }}>
                            {/* Animated glow effect */}
                            <motion.div
                                className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                                style={{
                                    background: `linear-gradient(135deg, ${colors.accent}10, ${colors.primary}10)`,
                                    filter: "blur(1px)",
                                }}
                            />

                            <div className='relative z-10'>
                                {/* Education Header */}
                                <div className='flex items-center mb-8'>
                                    <motion.div
                                        className='text-4xl mr-4'
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                        }}>
                                        🎓
                                    </motion.div>
                                    <h3
                                        className='text-3xl font-bold'
                                        style={{ color: colors.primary }}>
                                        Education
                                    </h3>
                                </div>

                                {/* Degree Info */}
                                <div className='mb-8'>
                                    <h4
                                        className='text-xl font-bold mb-4'
                                        style={{ color: colors.text.primary }}>
                                        Bachelor of Engineering, Computer Major
                                    </h4>

                                    <div className='space-y-3'>
                                        <div className='flex items-center'>
                                            <span
                                                className='mr-3'
                                                style={{
                                                    color: colors.primary,
                                                }}>
                                                📍
                                            </span>
                                            <span>
                                                Suez Canal University, Ismailia
                                            </span>
                                        </div>
                                        <div className='flex items-center'>
                                            <span
                                                className='mr-3'
                                                style={{
                                                    color: colors.secondary,
                                                }}>
                                                📅
                                            </span>
                                            <span>2018 - 2023</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <span
                                                className='mr-3'
                                                style={{
                                                    color: colors.accent,
                                                }}>
                                                ⭐
                                            </span>
                                            <span>
                                                GPA: 2.93 Very Good (B-)
                                            </span>
                                        </div>
                                        <div className='flex items-center'>
                                            <span
                                                className='mr-3'
                                                style={{
                                                    color: colors.primary,
                                                }}>
                                                📚
                                            </span>
                                            <span
                                                className='text-sm'
                                                style={{
                                                    color: colors.text
                                                        .secondary,
                                                }}>
                                                Relevant coursework: Data
                                                Structures, Algorithms, Software
                                                Engineering
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Graduation Project */}
                                <motion.div
                                    className='p-6 rounded-2xl border'
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.accent}15, ${colors.primary}10)`,
                                        borderColor: `${colors.accent}40`,
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: `0 15px 30px ${colors.accent}20`,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                    }}>
                                    <div className='flex items-center mb-4'>
                                        <motion.span
                                            className='text-2xl mr-3'
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatDelay: 2,
                                            }}>
                                            🧠
                                        </motion.span>
                                        <h5
                                            className='text-lg font-bold'
                                            style={{ color: colors.primary }}>
                                            Graduation Project
                                        </h5>
                                    </div>

                                    <h6
                                        className='text-lg font-semibold mb-2'
                                        style={{ color: colors.text.primary }}>
                                        Brain-Controlled Wheelchair using EEG
                                    </h6>

                                    <div
                                        className='inline-block px-3 py-1 rounded-full text-sm font-bold mb-3'
                                        style={{
                                            backgroundColor: `${colors.accent}30`,
                                            color: colors.accent,
                                        }}>
                                        Grade: A+
                                    </div>

                                    <p
                                        className='text-sm leading-relaxed'
                                        style={{
                                            color: colors.text.secondary,
                                        }}>
                                        Developed a smart wheelchair controlled
                                        by human brain signals using EEG system
                                        and microcontroller programming.
                                        Implemented real-time signal processing
                                        and hardware-software integration for
                                        enhanced mobility assistance.
                                    </p>
                                </motion.div>

                                {/* Floating decorative elements */}
                                <motion.div
                                    className='absolute top-4 right-4 w-3 h-3 rounded-full opacity-60'
                                    style={{ backgroundColor: colors.primary }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 1,
                                    }}
                                />

                                <motion.div
                                    className='absolute bottom-8 left-4 w-2 h-2 rounded-full opacity-40'
                                    style={{
                                        backgroundColor: colors.secondary,
                                    }}
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.4, 0.8, 0.4],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                />
                            </div>

                            {/* Background decorative gradient */}
                            <div
                                className='absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full'
                                style={{
                                    background: `radial-gradient(circle, ${colors.accent}, transparent 70%)`,
                                    filter: "blur(20px)",
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
