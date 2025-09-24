/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { ReactComponent as ReactLogo } from "../../assets/logos/react.svg";
import { ReactComponent as MuiLogo } from "../../assets/logos/mui.svg";
import { ReactComponent as TailwindLogo } from "../../assets/logos/tailwindcss.svg";
import { ReactComponent as BootstrapLogo } from "../../assets/logos/bootstrap.svg";
import { ReactComponent as ReduxLogo } from "../../assets/logos/redux.svg";
import { ReactComponent as ChakraLogo } from "../../assets/logos/chakraui.svg";
import { ReactComponent as ReactQueryLogo } from "../../assets/logos/reactquery.svg";
import { ReactComponent as AxiosLogo } from "../../assets/logos/axios.svg";
import { ReactComponent as FramerLogo } from "../../assets/logos/framer.svg";
import { ReactComponent as RHFLogo } from "../../assets/logos/reacthookform.svg";
import { ReactComponent as RouterLogo } from "../../assets/logos/reactrouter.svg";

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [hoveredTech, setHoveredTech] = useState(null);
    const { colors } = useTheme();

    const skillCategories = [
        {
            title: "Frontend Technologies",
            icon: "🎨",
            skills: [
                { name: "React.js", level: 85, color: "#61DAFB" },
                { name: "JavaScript ES6+", level: 90, color: "#F7DF1E" },
                { name: "HTML5 & CSS3", level: 95, color: "#E34F26" },
                { name: "Sass", level: 80, color: "#CC6699" },
                { name: "Bootstrap", level: 85, color: "#7952B3" },
                { name: "Tailwind CSS", level: 80, color: "#06B6D4" },
                { name: "Material-UI", level: 75, color: "#007FFF" },
            ],
        },
        {
            title: "Tools & Development",
            icon: "🛠️",
            skills: [
                { name: "Git & GitHub", level: 85, color: "#F05032" },
                { name: "VS Code", level: 90, color: "#007ACC" },
                { name: "Postman", level: 80, color: "#FF6C37" },
                { name: "Browser DevTools", level: 85, color: "#4FC08D" },
                { name: "Responsive Design", level: 90, color: "#38BDF8" },
                {
                    name: "Performance Optimization",
                    level: 85,
                    color: "#10B981",
                },
            ],
        },
    ];

    const techCards = [
        { name: "React", Logo: ReactLogo, color: "#61DAFB" },
        { name: "Material UI", Logo: MuiLogo, color: "#007FFF" },
        { name: "Tailwind CSS", Logo: TailwindLogo, color: "#06B6D4" },
        { name: "Bootstrap React", Logo: BootstrapLogo, color: "#7952B3" },
        { name: "Redux Toolkit", Logo: ReduxLogo, color: "#764ABC" },
        { name: "Chakra UI", Logo: ChakraLogo, color: "#319795" },
        { name: "TanStack Query", Logo: ReactQueryLogo, color: "#FF4154" },
        { name: "Axios", Logo: AxiosLogo, color: "#5A29E4" },
        { name: "Framer Motion", Logo: FramerLogo, color: "#0055FF" },
        { name: "React Hook Form", Logo: RHFLogo, color: "#EC5990" },
        { name: "React Router", Logo: RouterLogo, color: "#CA4245" },
    ];

    const getSkillColor = (level) => {
        if (level >= 90) return colors.accent;
        if (level >= 80) return colors.primary;
        if (level >= 70) return "#ffb74d";
        return "#f06292";
    };

    // Floating particles effect
    const FloatingParticles = () => (
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className='absolute w-1 h-1 rounded-full opacity-20'
                    style={{ backgroundColor: colors.primary }}
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        y: [null, -20, null],
                        opacity: [0.2, 0.5, 0.2],
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
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

    return (
        <div className='relative min-h-screen py-20 overflow-hidden'>
            {/* Animated gradient background */}
            <div
                className='absolute inset-0'
                style={{
                    background: `
            radial-gradient(circle at 20% 50%, ${colors.primary}1a 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${colors.accent}1a 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, ${colors.secondary}1a 0%, transparent 50%),
            linear-gradient(135deg, ${colors.background.main} 0%, ${colors.background.main}f5 100%)
          `,
                }}
            />

            <FloatingParticles />

            <div id='skills' className='relative z-10 max-w-7xl mx-auto px-6'>
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className='text-center mb-16'>
                    <motion.h2
                        className='text-5xl md:text-6xl font-bold mb-6'
                        style={{
                            backgroundSize: "200% 200%",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: colors.accent,
                        }}
                        animate={{
                            backgroundPosition: ["0%", "100%", "0%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}>
                        Skills & Technologies
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

                    <motion.p
                        className='text-xl max-w-3xl mx-auto leading-relaxed'
                        style={{ color: colors.text.secondary }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}>
                        Here's a comprehensive overview of my technical skills
                        and proficiency levels. I'm always learning and staying
                        up-to-date with the latest technologies and best
                        practices.
                    </motion.p>
                </motion.div>

                {/* Skills Categories */}
                <motion.div
                    className='grid md:grid-cols-2 gap-8 mb-20'
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, margin: "-100px" }}>
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className='relative group'>
                            <div
                                className='relative h-full p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1'
                                style={{
                                    background: `
                    linear-gradient(135deg, ${colors.background.glass} 0%, ${colors.background.paper} 100%)
                  `,
                                    borderColor: colors.border,
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                                }}
                                onMouseEnter={() =>
                                    setHoveredSkill(categoryIndex)
                                }
                                onMouseLeave={() => setHoveredSkill(null)}>
                                {/* Glow effect on hover */}
                                <motion.div
                                    className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.accent}10, ${colors.primary}10)`,
                                        filter: "blur(1px)",
                                    }}
                                />

                                <div className='relative z-10'>
                                    <div className='flex items-center justify-center mb-6'>
                                        <motion.div
                                            className='text-4xl mr-3'
                                            animate={
                                                hoveredSkill === categoryIndex
                                                    ? {
                                                          rotate: [
                                                              0, -10, 10, 0,
                                                          ],
                                                          scale: [1, 1.2, 1],
                                                      }
                                                    : {}
                                            }
                                            transition={{ duration: 0.6 }}>
                                            {category.icon}
                                        </motion.div>
                                        <h3
                                            className='text-2xl font-bold'
                                            style={{ color: colors.primary }}>
                                            {category.title}
                                        </h3>
                                    </div>

                                    <div className='space-y-6'>
                                        {category.skills.map(
                                            (skill, skillIndex) => (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{
                                                        opacity: 0,
                                                        x: -30,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        delay:
                                                            categoryIndex *
                                                                0.1 +
                                                            skillIndex * 0.05,
                                                        type: "spring",
                                                        stiffness: 100,
                                                    }}
                                                    viewport={{ once: true }}
                                                    className='group/skill'>
                                                    <div className='flex justify-between items-center mb-2'>
                                                        <span
                                                            className='font-medium group-hover/skill:text-white transition-colors'
                                                            style={{
                                                                color: colors
                                                                    .text
                                                                    .primary,
                                                            }}>
                                                            {skill.name}
                                                        </span>
                                                        <span
                                                            className='text-sm font-mono font-bold px-2 py-1 rounded-full'
                                                            style={{
                                                                color:
                                                                    skill.color ||
                                                                    getSkillColor(
                                                                        skill.level
                                                                    ),
                                                                backgroundColor: `${
                                                                    skill.color ||
                                                                    getSkillColor(
                                                                        skill.level
                                                                    )
                                                                }20`,
                                                            }}>
                                                            {skill.level}%
                                                        </span>
                                                    </div>

                                                    <div
                                                        className='h-3 rounded-full overflow-hidden'
                                                        style={{
                                                            backgroundColor: `${colors.text.secondary}20`,
                                                        }}>
                                                        <motion.div
                                                            className='h-full rounded-full relative overflow-hidden'
                                                            style={{
                                                                backgroundColor:
                                                                    skill.color ||
                                                                    getSkillColor(
                                                                        skill.level
                                                                    ),
                                                            }}
                                                            initial={{
                                                                width: 0,
                                                            }}
                                                            whileInView={{
                                                                width: `${skill.level}%`,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    categoryIndex *
                                                                        0.1 +
                                                                    skillIndex *
                                                                        0.05 +
                                                                    0.3,
                                                                duration: 1.2,
                                                                ease: "easeOut",
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}>
                                                            <motion.div
                                                                className='absolute inset-0 opacity-30'
                                                                style={{
                                                                    backgroundColor:
                                                                        colors
                                                                            .background
                                                                            .paper,
                                                                }}
                                                                animate={{
                                                                    x: [
                                                                        "-100%",
                                                                        "100%",
                                                                    ],
                                                                }}
                                                                transition={{
                                                                    duration: 1.5,
                                                                    repeat: Infinity,
                                                                    delay:
                                                                        categoryIndex *
                                                                            0.1 +
                                                                        skillIndex *
                                                                            0.05 +
                                                                        0.5,
                                                                }}
                                                            />
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Technology Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='text-center'>
                    <h3
                        className='text-3xl font-bold mb-12'
                        style={{ color: colors.text.primary }}>
                        Technologies I Work With
                    </h3>

                    <motion.div
                        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6'
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, margin: "-50px" }}>
                        {techCards.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.1,
                                    y: -10,
                                    rotateY: 10,
                                    rotateX: 5,
                                }}
                                whileTap={{ scale: 0.95 }}
                                className='relative group cursor-pointer'
                                style={{ perspective: "1000px" }}
                                onHoverStart={() => setHoveredTech(index)}
                                onHoverEnd={() => setHoveredTech(null)}>
                                <div
                                    className='relative p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500 group-hover:border-opacity-50'
                                    style={{
                                        background: `
                      linear-gradient(135deg, ${colors.background.glass} 0%, ${colors.background.paper} 100%)
                    `,
                                        borderColor:
                                            hoveredTech === index
                                                ? tech.color
                                                : colors.border,
                                        boxShadow:
                                            hoveredTech === index
                                                ? `0 20px 40px ${tech.color}30`
                                                : "0 8px 32px rgba(0, 0, 0, 0.2)",
                                        transform:
                                            hoveredTech === index
                                                ? "translateZ(20px)"
                                                : "translateZ(0)",
                                    }}>
                                    {/* Glow effect */}
                                    <motion.div
                                        className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                        style={{
                                            background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)`,
                                        }}
                                    />

                                    <div className='relative z-10 text-center'>
                                        <motion.div
                                            className='mb-3 flex justify-center'
                                            animate={
                                                hoveredTech === index
                                                    ? {
                                                          rotate: [0, -5, 5, 0],
                                                          scale: [1, 1.1, 1],
                                                      }
                                                    : {}
                                            }
                                            transition={{ duration: 0.5 }}>
                                            <tech.Logo
                                                style={{
                                                    width: 48,
                                                    height: 48,
                                                    fill:
                                                        hoveredTech === index
                                                            ? tech.color
                                                            : "#cbd5e1",
                                                }}
                                            />
                                        </motion.div>
                                        <h4
                                            className='font-semibold text-sm transition-colors duration-300'
                                            style={{
                                                color:
                                                    hoveredTech === index
                                                        ? tech.color
                                                        : colors.text.primary,
                                            }}>
                                            {tech.name}
                                        </h4>
                                    </div>

                                    {/* Sparkle effect on hover */}
                                    {hoveredTech === index && (
                                        <motion.div
                                            className='absolute top-2 right-2 w-2 h-2 rounded-full'
                                            style={{
                                                backgroundColor: tech.color,
                                            }}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{
                                                scale: [0, 1, 0],
                                                opacity: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                repeatDelay: 0.5,
                                            }}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
