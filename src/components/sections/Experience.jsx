/** @format */

import React, { useState } from "react";
import {
    Container,
    Typography,
    Box,
    Tabs,
    Tab,
    Paper,
    Chip,
    alpha,
} from "@mui/material";
import { useTheme } from "../../context/ThemeContext";
import { Work, School, Code, Computer, LocationOn } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { colors } = useTheme();

    const experiences = [
        // Frontend Projects & Training
        {
            title: "Frontend Development Projects",
            company: "Self-Directed Learning",
            period: "2024 - 2025",
            location: "Ismailia, Egypt",
            type: "work",
            description: [
                "Developed multiple responsive website templates using HTML, CSS, and Bootstrap framework",
                "Built interactive applications including Calculator and Hangman Word Game using JavaScript DOM manipulation",
                "Created Islamic Prayer Times web app with API integration and responsive design",
                "Designed Social Media Web Application interface with posts, comments, and UI interactions",
                "Developed Todo List application using React.js, Redux, and Material-UI with state management and local storage",
                "Completed advanced courses in HTML, CSS, Bootstrap, JavaScript, and React.js from Elzero Web School and Tarmeez Academy",
            ],
            technologies: [
                "React.js",
                "Redux",
                "JavaScript ES6+",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "Material-UI",
                "API Integration",
            ],
        },
        {
            title: "Embedded Systems Projects",
            company: "Academic & Self-Directed",
            period: "2021 - 2023",
            location: "Ismailia, Egypt",
            type: "work",
            description: [
                "Developed Clock and Alarm System using 8051 microcontroller with C programming",
                "Implemented On-demand Traffic Light Control system using Atmega32 microcontroller",
                "Built Car Control System (360°) controlled via analog controller using Atmega32",
                "Completed Embedded Systems Professional Nanodegree focusing on microcontroller drivers and layered architecture",
                "Gained hands-on experience with Linux and cloud infrastructure through ITI training",
            ],
            technologies: [
                "C/C++",
                "AVR Microcontrollers",
                "Atmega32",
                "8051",
                "UART",
                "I2C",
                "Linux",
            ],
        },
        // Education
        {
            title: "Bachelor of Engineering, Computer Major",
            company: "Suez Canal University",
            period: "2018 - 2023",
            location: "Ismailia, Egypt",
            type: "education",
            description: [
                "Graduated with GPA 2.93 Very Good (B-) in Computer Engineering",
                "Completed relevant coursework in Embedded Systems, Data Structures, and Microcontrollers",
                "Developed strong foundation in programming, digital systems, and software engineering principles",
                "Participated in hands-on laboratory work and practical projects",
                "Built comprehensive understanding of both hardware and software development",
            ],
            technologies: [
                "Data Structures",
                "Algorithms",
                "Embedded Systems",
                "Microcontrollers",
                "Software Engineering",
            ],
        },
        // Training Programs
        {
            title: "Frontend Web Development Training",
            company: "Elzero Web School & Tarmeez Academy",
            period: "2024 - 2025",
            location: "Online",
            type: "education",
            description: [
                "Completed comprehensive courses in modern frontend development practices",
                "Mastered HTML5, CSS3, and responsive design principles with Bootstrap framework",
                "Advanced JavaScript training covering ES6+, DOM manipulation, and event handling",
                "Specialized React.js courses focusing on component-based architecture and state management",
                "Learned API integration, asynchronous JavaScript, and modern development tools",
            ],
            technologies: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Bootstrap",
                "API Integration",
            ],
        },
        {
            title: "Embedded Systems Professional Training",
            company: "Nanodegree Program & ITI",
            period: "2021 - 2023",
            location: "Egypt",
            type: "education",
            description: [
                "Completed Embedded Systems Professional Nanodegree program",
                "Developed microcontroller drivers and implemented layered software architecture",
                "Built real-time applications and learned embedded systems best practices",
                "ITI Cloud Architecture Specialist training with hands-on Linux experience",
                "Gained practical experience with development tools and debugging techniques",
            ],
            technologies: [
                "Embedded C",
                "Microcontroller Drivers",
                "Real-time Systems",
                "Linux OS",
                "Cloud Architecture",
            ],
        },
    ];

    const tabs = [
        { label: "All", value: "all", icon: Code },
        { label: "Projects & Work", value: "work", icon: Work },
        { label: "Education & Training", value: "education", icon: School },
    ];

    const filteredExperiences =
        activeTab === 0
            ? experiences
            : experiences.filter((exp) => exp.type === tabs[activeTab].value);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    // Floating particles component
    const FloatingParticles = () => (
        <Box
            sx={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 0,
            }}>
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: "absolute",
                        width: 3,
                        height: 3,
                        backgroundColor: colors.accent,
                        borderRadius: "50%",
                        opacity: 0.3,
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
        </Box>
    );

    return (
        <Box
            component='section'
            sx={{
                position: "relative",
                minHeight: "100vh",
                py: { xs: 10, md: 15 },
                overflow: "hidden",
                background: ` radial-gradient(circle at 25% 30%, ${colors.primary}0f 0%, transparent 50%),radial-gradient(circle at 75% 70%, ${colors.accent}0f 0%, transparent 50%),radial-gradient(circle at 50% 50%, ${colors.secondary}0a 0%, transparent 50%),linear-gradient(135deg, ${colors.accent}0a 0%, ${colors.background.main} 100%)`,
            }}>
            <FloatingParticles />

            <Container
                id='experience'
                maxWidth='lg'
                sx={{ position: "relative", zIndex: 10 }}>
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                    }}>
                    <Box sx={{ textAlign: "center", mb: 8 }}>
                        <motion.div
                            animate={{
                                backgroundPosition: ["0%", "100%", "0%"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}>
                            <Typography
                                variant='h2'
                                sx={{
                                    fontSize: { xs: "3rem", md: "4rem" },
                                    fontWeight: "bold",
                                    mb: 3,
                                    backgroundSize: "200% 200%",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: colors.accent,
                                }}>
                                Experience & Education
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.8,
                                ease: "easeOut",
                            }}>
                            <Box
                                sx={{
                                    width: 96,
                                    height: 4,
                                    mx: "auto",
                                    mb: 4,
                                    background: `linear-gradient(90deg, ${colors.accent}, ${colors.primary})`,
                                    borderRadius: 2,
                                }}
                            />
                        </motion.div>

                        <Typography
                            variant='body1'
                            sx={{
                                color: colors.text.secondary,
                                fontSize: "1.2rem",
                                lineHeight: 1.6,
                                maxWidth: "700px",
                                mx: "auto",
                                mb: 6,
                            }}>
                            My journey in frontend development and computer
                            engineering, featuring practical projects,
                            continuous learning, and hands-on experience with
                            modern web technologies.
                        </Typography>
                    </Box>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 8,
                        }}>
                        <Paper
                            sx={{
                                backgroundColor: `${colors.background.paper}cc`,
                                backdropFilter: "blur(20px)",
                                border: `1px solid ${colors.border}`,
                                borderRadius: 3,
                                overflow: "hidden",
                            }}>
                            <Tabs
                                value={activeTab}
                                onChange={handleTabChange}
                                sx={{
                                    "& .MuiTabs-indicator": {
                                        backgroundColor: colors.accent,
                                        height: 3,
                                    },
                                    "& .MuiTab-root": {
                                        color: colors.text.secondary,
                                        fontWeight: 600,
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        minHeight: 64,
                                        "&.Mui-selected": {
                                            color: colors.accent,
                                        },
                                        "&:hover": {
                                            color: colors.text.primary,
                                        },
                                    },
                                }}>
                                {tabs.map((tab, index) => (
                                    <Tab
                                        key={tab.value}
                                        label={tab.label}
                                        icon={<tab.icon />}
                                        iconPosition='start'
                                    />
                                ))}
                            </Tabs>
                        </Paper>
                    </Box>
                </motion.div>

                {/* Experience Timeline */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}>
                        <Box sx={{ position: "relative" }}>
                            {/* Timeline Line */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: { xs: "20px", md: "50%" },
                                    top: 0,
                                    bottom: 0,
                                    width: "3px",
                                    background: `linear-gradient(180deg, ${colors.accent}, ${colors.primary})`,
                                    transform: { md: "translateX(-50%)" },
                                    zIndex: 1,
                                    borderRadius: 2,
                                }}
                            />

                            {filteredExperiences.map((experience, index) => (
                                <motion.div
                                    key={`${experience.company}-${experience.period}`}
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.15,
                                        type: "spring",
                                        stiffness: 100,
                                    }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: {
                                                xs: "column",
                                                md:
                                                    index % 2 === 0
                                                        ? "row"
                                                        : "row-reverse",
                                            },
                                            alignItems: "center",
                                            mb: 8,
                                            position: "relative",
                                        }}>
                                        {/* Timeline Dot */}
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}>
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    left: {
                                                        xs: "20px",
                                                        md: "50%",
                                                    },
                                                    top: {
                                                        xs: "24px",
                                                        md: "50%",
                                                    },
                                                    width: "20px",
                                                    height: "20px",
                                                    background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`,
                                                    borderRadius: "50%",
                                                    transform: {
                                                        xs: "translateX(-50%)",
                                                        md: "translate(-50%, -50%)",
                                                    },
                                                    zIndex: 2,
                                                    border: `4px solid ${colors.background.main}`,
                                                    boxShadow: `0 0 20px ${colors.accent}66`,
                                                }}
                                            />
                                        </motion.div>

                                        {/* Content */}
                                        <Box
                                            sx={{
                                                width: {
                                                    xs: "80%",
                                                    md: "45%",
                                                },
                                                ml: {
                                                    xs: "60px",
                                                    md:
                                                        index % 2 === 0
                                                            ? 0
                                                            : "5%",
                                                },
                                                mr: {
                                                    xs: 0,
                                                    md:
                                                        index % 2 === 0
                                                            ? "5%"
                                                            : 0,
                                                },
                                            }}>
                                            <motion.div
                                                whileHover={{
                                                    y: -8,
                                                    rotateY:
                                                        index % 2 === 0
                                                            ? 2
                                                            : -2,
                                                    rotateX: 2,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    type: "spring",
                                                    stiffness: 200,
                                                }}
                                                style={{ perspective: 1000 }}>
                                                <Paper
                                                    sx={{
                                                        position: "relative",
                                                        p: 4,
                                                        borderRadius: 4,
                                                        background: `linear-gradient(135deg, ${colors.background.glass} 0%, ${colors.background.paper} 100%)`,
                                                        border: `1px solid ${colors.border}`,
                                                        backdropFilter:
                                                            "blur(20px)",
                                                        boxShadow:
                                                            "0 10px 30px rgba(0, 0, 0, 0.3)",
                                                        overflow: "hidden",
                                                        transition:
                                                            "all 0.3s ease",
                                                        "&:hover": {
                                                            borderColor:
                                                                colors.accent,
                                                            boxShadow: `0 20px 60px ${colors.accent}33`,
                                                        },
                                                        "&::before": {
                                                            content: '""',
                                                            position:
                                                                "absolute",
                                                            top: "50%",
                                                            [index % 2 === 0
                                                                ? "right"
                                                                : "left"]: {
                                                                xs: "auto",
                                                                md: "-12px",
                                                            },
                                                            display: {
                                                                xs: "none",
                                                                md: "block",
                                                            },
                                                            width: 0,
                                                            height: 0,
                                                            borderTop:
                                                                "12px solid transparent",
                                                            borderBottom:
                                                                "12px solid transparent",
                                                            [index % 2 === 0
                                                                ? "borderRight"
                                                                : "borderLeft"]: `12px solid ${colors.background.paper}`,
                                                            transform:
                                                                "translateY(-50%)",
                                                            filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))",
                                                        },
                                                    }}>
                                                    {/* Header with Icon and Period */}
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            mb: 2,
                                                            gap: 1.5,
                                                        }}>
                                                        {experience.type ===
                                                        "work" ? (
                                                            <Computer
                                                                sx={{
                                                                    color: colors.accent,
                                                                    fontSize:
                                                                        "1.5rem",
                                                                }}
                                                            />
                                                        ) : (
                                                            <School
                                                                sx={{
                                                                    color: colors.accent,
                                                                    fontSize:
                                                                        "1.5rem",
                                                                }}
                                                            />
                                                        )}
                                                        <Chip
                                                            label={
                                                                experience.period
                                                            }
                                                            size='small'
                                                            sx={{
                                                                backgroundColor: `${colors.accent}33`,
                                                                color: colors.accent,
                                                                fontFamily:
                                                                    "monospace",
                                                                fontWeight: 600,
                                                                fontSize:
                                                                    "0.85rem",
                                                            }}
                                                        />
                                                    </Box>

                                                    {/* Title and Company */}
                                                    <Typography
                                                        variant='h5'
                                                        sx={{
                                                            color: colors.text
                                                                .primary,
                                                            mb: 1,
                                                            fontWeight: 700,
                                                            fontSize: {
                                                                xs: "1.3rem",
                                                                md: "1.5rem",
                                                            },
                                                        }}>
                                                        {experience.title}
                                                    </Typography>

                                                    <Typography
                                                        variant='h6'
                                                        sx={{
                                                            color: colors.accent,
                                                            mb: 1,
                                                            fontSize: "1.1rem",
                                                            fontWeight: 600,
                                                        }}>
                                                        {experience.company}
                                                    </Typography>

                                                    {/* Location */}
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            mb: 3,
                                                            gap: 0.5,
                                                        }}>
                                                        <LocationOn
                                                            sx={{
                                                                color: colors
                                                                    .text
                                                                    .secondary,
                                                                fontSize:
                                                                    "1rem",
                                                            }}
                                                        />
                                                        <Typography
                                                            variant='body2'
                                                            sx={{
                                                                color: colors
                                                                    .text
                                                                    .secondary,
                                                                fontStyle:
                                                                    "italic",
                                                            }}>
                                                            {
                                                                experience.location
                                                            }
                                                        </Typography>
                                                    </Box>

                                                    {/* Description */}
                                                    <Box
                                                        component='ul'
                                                        sx={{
                                                            pl: 2,
                                                            mb: 3,
                                                            listStyle: "none",
                                                        }}>
                                                        {experience.description.map(
                                                            (
                                                                item,
                                                                itemIndex
                                                            ) => (
                                                                <motion.li
                                                                    key={
                                                                        itemIndex
                                                                    }
                                                                    initial={{
                                                                        opacity: 0,
                                                                        x: -20,
                                                                    }}
                                                                    whileInView={{
                                                                        opacity: 1,
                                                                        x: 0,
                                                                    }}
                                                                    transition={{
                                                                        delay:
                                                                            itemIndex *
                                                                            0.1,
                                                                    }}
                                                                    viewport={{
                                                                        once: true,
                                                                    }}>
                                                                    <Typography
                                                                        variant='body2'
                                                                        sx={{
                                                                            color: colors
                                                                                .text
                                                                                .secondary,
                                                                            mb: 1.5,
                                                                            lineHeight: 1.6,
                                                                            position:
                                                                                "relative",
                                                                            pl: 2,
                                                                            "&::before":
                                                                                {
                                                                                    content:
                                                                                        '""',
                                                                                    position:
                                                                                        "absolute",
                                                                                    left: 0,
                                                                                    top: "0.6em",
                                                                                    width: "4px",
                                                                                    height: "4px",
                                                                                    backgroundColor:
                                                                                        colors.accent,
                                                                                    borderRadius:
                                                                                        "50%",
                                                                                },
                                                                        }}>
                                                                        {item}
                                                                    </Typography>
                                                                </motion.li>
                                                            )
                                                        )}
                                                    </Box>

                                                    {/* Technologies */}
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            gap: 1,
                                                        }}>
                                                        {experience.technologies.map(
                                                            (
                                                                tech,
                                                                techIndex
                                                            ) => (
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
                                                                    }}
                                                                    transition={{
                                                                        delay:
                                                                            techIndex *
                                                                            0.05,
                                                                    }}
                                                                    viewport={{
                                                                        once: true,
                                                                    }}>
                                                                    <Chip
                                                                        label={
                                                                            tech
                                                                        }
                                                                        size='small'
                                                                        sx={{
                                                                            backgroundColor: `${colors.primary}26`,
                                                                            color: colors.primary,
                                                                            border: `1px solid ${colors.primary}4d`,
                                                                            fontWeight: 500,
                                                                            fontSize:
                                                                                "0.75rem",
                                                                            "&:hover":
                                                                                {
                                                                                    backgroundColor: `${colors.primary}40`,
                                                                                },
                                                                        }}
                                                                    />
                                                                </motion.div>
                                                            )
                                                        )}
                                                    </Box>

                                                    {/* Decorative gradient overlay */}
                                                    <Box
                                                        sx={{
                                                            position:
                                                                "absolute",
                                                            top: 0,
                                                            right: 0,
                                                            width: "100px",
                                                            height: "100px",
                                                            background: `radial-gradient(circle, ${colors.accent}1a, transparent 70%)`,
                                                            borderRadius: "50%",
                                                            filter: "blur(20px)",
                                                            zIndex: -1,
                                                        }}
                                                    />
                                                </Paper>
                                            </motion.div>
                                        </Box>
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    </motion.div>
                </AnimatePresence>
            </Container>
        </Box>
    );
};

export default Experience;
