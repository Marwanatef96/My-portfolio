/** @format */

import React, { useState } from "react";
import {
    Container,
    Typography,
    Box,
    Grid,
    useMediaQuery,
    useTheme as useMuiTheme,
} from "@mui/material";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
import {
    projects as projectsData,
    filterOptions,
} from "../../data/projectsData";
import {
    containerVariants,
    floatingAnimation,
    sparkleVariants,
    textRevealVariants,
} from "../../utils/animationVariants";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import ProjectStats from "./ProjectStats";
import ScrollToTopButton from "../common/ScrollToTopButton";
import { useTheme } from "../../context/ThemeContext";
import { Code, Web, Api } from "@mui/icons-material";

const Projects = () => {
    const { colors } = useTheme();
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
    const [activeFilter, setActiveFilter] = useState("All");
    const [expandedProject, setExpandedProject] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const filteredProjects = projectsData.filter(
        (project) => activeFilter === "All" || project.category === activeFilter
    );

    const handleExpandClick = (projectId) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };

    return (
        <Box
            component='section'
            sx={{
                py: { xs: 8, md: 12 },
                background: `linear-gradient(135deg, ${colors.background.paper} 0%, ${colors.background.default} 50%, ${colors.background.paper} 100%)`,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 20% 80%, ${colors.accent}15 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, ${colors.primary}15 0%, transparent 50%),
                                radial-gradient(circle at 40% 40%, ${colors.accent}10 0%, transparent 50%)`,
                    pointerEvents: "none",
                },
            }}>
            {/* Floating Background Elements */}
            <motion.div
                animate={floatingAnimation}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "10%",
                    width: "100px",
                    height: "100px",
                    background: `linear-gradient(45deg, ${colors.accent}20, ${colors.primary}20)`,
                    borderRadius: "50%",
                    zIndex: 0,
                    filter: "blur(1px)",
                }}
            />
            <motion.div
                animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    },
                }}
                style={{
                    position: "absolute",
                    top: "60%",
                    right: "15%",
                    width: "80px",
                    height: "80px",
                    background: `linear-gradient(135deg, ${colors.primary}25, ${colors.accent}25)`,
                    borderRadius: "50%",
                    zIndex: 0,
                    filter: "blur(1px)",
                }}
            />

            {/* Sparkle Elements */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    variants={sparkleVariants}
                    animate='animate'
                    style={{
                        position: "absolute",
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                        width: "4px",
                        height: "4px",
                        background: colors.accent,
                        borderRadius: "50%",
                        zIndex: 0,
                    }}
                />
            ))}

            <Container
                id='projects'
                maxWidth='lg'
                sx={{ position: "relative", zIndex: 1 }}>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.3 }}>
                    {/* Animated Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                damping: 15,
                                stiffness: 50,
                                duration: 1.2,
                            },
                        }}
                        viewport={{ once: true }}>
                        <Typography
                            variant='h2'
                            sx={{
                                color: colors.text.primary,
                                mb: 2,
                                textAlign: "center",
                                fontSize: { xs: "2rem", md: "3.5rem" },
                                fontWeight: 800,
                                background: `linear-gradient(135deg, ${colors.text.primary} 0%, ${colors.accent} 50%, ${colors.primary} 100%)`,
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 4px 20px rgba(0,0,0,0.1)",
                            }}>
                            My Projects 🚀
                        </Typography>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60px" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{
                                height: "4px",
                                background: `linear-gradient(90deg, ${colors.accent}, ${colors.primary})`,
                                margin: "0 auto 48px auto",
                                borderRadius: "2px",
                            }}
                        />

                        <motion.div variants={textRevealVariants}>
                            <Typography
                                variant='body1'
                                sx={{
                                    color: colors.text.secondary,
                                    textAlign: "center",
                                    maxWidth: "800px",
                                    mx: "auto",
                                    mb: 6,
                                    fontSize: "1.2rem",
                                    lineHeight: 1.8,
                                    fontWeight: 300,
                                }}>
                                Here are some of the projects I have crafted
                                with passion, showcasing cutting-edge frontend
                                development and innovative solutions that push
                                the boundaries of user experience. ✨
                            </Typography>
                        </motion.div>
                    </motion.div>

                    <ProjectFilters
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        colors={colors}
                    />
                </motion.div>

                {/* Animated Project Grid */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeFilter}
                        initial='hidden' // Corrected from initial
                        animate='visible' // Corrected from animate
                        exit='hidden' // Corrected from exit
                        variants={containerVariants}>
                        <Grid container spacing={4}>
                            {filteredProjects.map((project, index) => (
                                <Grid
                                    size={{ xs: 12, sm: 6, lg: 4 }}
                                    key={project.id}>
                                    <ProjectCard
                                        project={project}
                                        index={index}
                                        expandedProject={expandedProject}
                                        handleExpandClick={handleExpandClick}
                                        hoveredCard={hoveredCard}
                                        setHoveredCard={setHoveredCard}
                                        colors={colors}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>

                <ProjectStats projects={projectsData} colors={colors} />
            </Container>
            <ScrollToTopButton colors={colors} />
        </Box>
    );
};

export default Projects;
