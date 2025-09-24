/** @format */

import React from "react";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Code, Web, Api, Timeline } from "@mui/icons-material";
import { filterButtonVariants } from "../../utils/animationVariants";
import { filterOptions } from "../../data/projectsData";

const getFilterIcon = (filter) => {
    switch (filter) {
        case "ReactJS":
            return <Code />;
        case "JavaScript":
            return <Timeline />;
        case "CSS":
            return <Web />;
        default:
            return <Api />;
    }
};

const ProjectFilters = ({ activeFilter, setActiveFilter, colors }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 8,
                }}>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        p: 2,
                        borderRadius: "20px",
                        background: `rgba(255,255,255,0.05)`,
                        backdropFilter: "blur(10px)",
                        border: `1px solid rgba(255,255,255,0.1)`,
                    }}>
                    {filterOptions.map((filter, index) => (
                        <motion.div
                            key={filter}
                            variants={filterButtonVariants}
                            initial='inactive'
                            animate={
                                activeFilter === filter ? "active" : "inactive"
                            }
                            whileHover='hover'
                            whileTap='tap'
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                            }}>
                            <Button
                                onClick={() => setActiveFilter(filter)}
                                startIcon={getFilterIcon(filter)}
                                sx={{
                                    px: 3,
                                    py: 1.5,
                                    borderRadius: "15px",
                                    border: "none",
                                    background:
                                        activeFilter === filter
                                            ? `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`
                                            : "transparent",
                                    color:
                                        activeFilter === filter
                                            ? "white"
                                            : colors.text.secondary,
                                    fontWeight: 600,
                                    textTransform: "none",
                                    fontSize: "1rem",
                                    boxShadow:
                                        activeFilter === filter
                                            ? `0 8px 25px ${colors.accent}40`
                                            : "none",
                                    "&:hover": {
                                        background:
                                            activeFilter === filter
                                                ? `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                                                : `rgba(255,255,255,0.1)`,
                                        border: "none",
                                    },
                                }}>
                                {filter}
                            </Button>
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </motion.div>
    );
};

export default ProjectFilters;
