/** @format */

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { filterOptions } from "../../data/projectsData";

const ProjectStats = ({ projects, colors }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}>
            <Box
                sx={{
                    mt: 8,
                    p: 4,
                    borderRadius: "20px",
                    background: `rgba(255,255,255,0.05)`,
                    backdropFilter: "blur(20px)",
                    border: `1px solid rgba(255,255,255,0.1)`,
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `radial-gradient(circle at center, ${colors.accent}15 0%, transparent 70%)`,
                        pointerEvents: "none",
                    },
                }}>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}>
                    <Typography
                        variant='h4'
                        sx={{
                            color: colors.text.primary,
                            mb: 4,
                            fontWeight: 800,
                            background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                        🚀 Project Statistics
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(3, 1fr)",
                        },
                        gap: 4,
                        position: "relative",
                        zIndex: 1,
                    }}>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        viewport={{ once: true }}>
                        <Box
                            sx={{
                                p: 3,
                                borderRadius: "15px",
                                background: `linear-gradient(135deg, ${colors.accent}20, ${colors.accent}10)`,
                                border: `1px solid ${colors.accent}30`,
                            }}>
                            <motion.div
                                animate={{
                                    textShadow: [
                                        `0 0 0px ${colors.accent}`,
                                        `0 0 20px ${colors.accent}80`,
                                        `0 0 0px ${colors.accent}`,
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}>
                                <Typography
                                    variant='h2'
                                    sx={{
                                        color: colors.accent,
                                        fontWeight: 800,
                                        fontSize: "3rem",
                                        mb: 1,
                                    }}>
                                    {projects.length}
                                </Typography>
                            </motion.div>
                            <Typography
                                variant='h6'
                                sx={{
                                    color: colors.text.secondary,
                                    fontWeight: 600,
                                }}>
                                Total Projects
                            </Typography>
                        </Box>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        viewport={{ once: true }}>
                        <Box
                            sx={{
                                p: 3,
                                borderRadius: "15px",
                                background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}10)`,
                                border: `1px solid ${colors.primary}30`,
                            }}>
                            <motion.div
                                animate={{
                                    textShadow: [
                                        `0 0 0px ${colors.primary}`,
                                        `0 0 20px ${colors.primary}80`,
                                        `0 0 0px ${colors.primary}`,
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 0.7,
                                }}>
                                <Typography
                                    variant='h2'
                                    sx={{
                                        color: colors.primary,
                                        fontWeight: 800,
                                        fontSize: "3rem",
                                        mb: 1,
                                    }}>
                                    {projects.reduce(
                                        (sum, p) => sum + p.stars,
                                        0
                                    )}
                                </Typography>
                            </motion.div>
                            <Typography
                                variant='h6'
                                sx={{
                                    color: colors.text.secondary,
                                    fontWeight: 600,
                                }}>
                                Total Stars ⭐
                            </Typography>
                        </Box>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        viewport={{ once: true }}>
                        <Box
                            sx={{
                                p: 3,
                                borderRadius: "15px",
                                background: `linear-gradient(135deg, ${colors.accent}20, ${colors.primary}10)`,
                                border: `1px solid ${colors.accent}30`,
                            }}>
                            <motion.div
                                animate={{
                                    textShadow: [
                                        `0 0 0px ${colors.accent}`,
                                        `0 0 20px ${colors.accent}80`,
                                        `0 0 0px ${colors.accent}`,
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 1.4,
                                }}>
                                <Typography
                                    variant='h2'
                                    sx={{
                                        color: colors.accent,
                                        fontWeight: 800,
                                        fontSize: "3rem",
                                        mb: 1,
                                    }}>
                                    {filterOptions.length - 1}
                                </Typography>
                            </motion.div>
                            <Typography
                                variant='h6'
                                sx={{
                                    color: colors.text.secondary,
                                    fontWeight: 600,
                                }}>
                                Technologies 🚀
                            </Typography>
                        </Box>
                    </motion.div>
                </Box>
            </Box>
        </motion.div>
    );
};

export default ProjectStats;
