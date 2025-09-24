/** @format */

import React from "react";
import {
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    Button,
    Chip,
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
    GitHub,
    Launch,
    ExpandMore,
    ExpandLess,
    CheckCircleOutline,
    Star,
    Visibility,
    Timeline,
} from "@mui/icons-material";
import { cardVariants, glowVariants } from "../../utils/animationVariants.js";

const getPriorityColor = (priority, colors) => {
    switch (priority) {
        case "high":
            return "#FF6B6B";
        case "medium":
            return "#4ECDC4";
        case "low":
            return "#45B7D1";
        default:
            return colors.accent;
    }
};

const ProjectCard = ({
    project,
    index,
    expandedProject,
    handleExpandClick,
    hoveredCard,
    setHoveredCard,
    colors,
}) => {
    const priorityColor = getPriorityColor(project.priority, colors);

    return (
        <motion.div
            variants={cardVariants}
            whileHover='hover'
            onHoverStart={() => setHoveredCard(project.id)}
            onHoverEnd={() => setHoveredCard(null)}
            style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}>
            <motion.div
                variants={glowVariants}
                initial='initial'
                whileHover='hover'>
                <Card
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        background: `linear-gradient(135deg, ${colors.background.default}f0 0%, ${colors.background.paper}f0 100%)`,
                        backdropFilter: "blur(20px)",
                        border: `1px solid rgba(255,255,255,0.1)`,
                        borderRadius: "20px",
                        overflow: "hidden",
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                                hoveredCard === project.id
                                    ? `linear-gradient(135deg, ${priorityColor}10, transparent)`
                                    : "transparent",
                            transition: "background 0.3s ease",
                            pointerEvents: "none",
                        },
                    }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        style={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            zIndex: 2,
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: priorityColor,
                            boxShadow: `0 0 20px ${priorityColor}80`,
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                        style={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            zIndex: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            background: "rgba(0,0,0,0.7)",
                            padding: "4px 8px",
                            borderRadius: "12px",
                            backdropFilter: "blur(10px)",
                        }}>
                        <Star sx={{ fontSize: 14, color: "#FFD700" }} />
                        <Typography
                            variant='caption'
                            sx={{ color: "white", fontWeight: 600 }}>
                            {project.stars}
                        </Typography>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}>
                        <CardMedia
                            component='img'
                            height='220'
                            src={project.image}
                            alt={project.title}
                            sx={{
                                objectFit: "cover",
                                filter:
                                    hoveredCard === project.id
                                        ? "brightness(1.1) contrast(1.1)"
                                        : "none",
                                transition: "filter 0.3s ease",
                            }}
                        />
                    </motion.div>

                    <CardContent
                        sx={{ flexGrow: 1, position: "relative", zIndex: 1 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mb: 2,
                                }}>
                                <Typography
                                    variant='h5'
                                    component='div'
                                    sx={{
                                        color: colors.text.primary,
                                        fontWeight: 700,
                                        fontSize: "1.4rem",
                                    }}>
                                    {project.title}
                                </Typography>
                                <motion.div
                                    whileHover={{ rotate: 180, scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <IconButton
                                        onClick={() =>
                                            handleExpandClick(project.id)
                                        }
                                        sx={{
                                            color: colors.accent,
                                            background: `rgba(255,255,255,0.1)`,
                                            backdropFilter: "blur(10px)",
                                            "&:hover": {
                                                background: `rgba(255,255,255,0.2)`,
                                            },
                                        }}
                                        size='small'>
                                        {expandedProject === project.id ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </IconButton>
                                </motion.div>
                            </Box>

                            <Typography
                                variant='body2'
                                sx={{
                                    mb: 3,
                                    lineHeight: 1.6,
                                    color: colors.text.secondary,
                                    fontSize: "0.95rem",
                                }}>
                                {project.description}
                            </Typography>

                            <AnimatePresence>
                                {expandedProject === project.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}>
                                        <Box sx={{ mb: 3 }}>
                                            <motion.div
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 }}>
                                                <Typography
                                                    variant='body2'
                                                    sx={{
                                                        color: colors.text
                                                            .primary,
                                                        mb: 2,
                                                        lineHeight: 1.6,
                                                        fontWeight: 400,
                                                    }}>
                                                    {
                                                        project.detailedDescription
                                                    }
                                                </Typography>
                                            </motion.div>

                                            <motion.div
                                                initial={{ x: -30, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.4 }}>
                                                <Typography
                                                    variant='subtitle2'
                                                    sx={{
                                                        color: colors.accent,
                                                        mb: 1,
                                                        fontWeight: 700,
                                                        fontSize: "1rem",
                                                    }}>
                                                    ✨ Key Features:
                                                </Typography>
                                            </motion.div>

                                            <List dense sx={{ py: 0 }}>
                                                {project.features.map(
                                                    (feature, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{
                                                                x: -20,
                                                                opacity: 0,
                                                            }}
                                                            animate={{
                                                                x: 0,
                                                                opacity: 1,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    0.1 * idx +
                                                                    0.5,
                                                            }}>
                                                            <ListItem
                                                                sx={{
                                                                    py: 0.5,
                                                                    px: 0,
                                                                }}>
                                                                <ListItemIcon
                                                                    sx={{
                                                                        minWidth: 28,
                                                                    }}>
                                                                    <motion.div
                                                                        whileHover={{
                                                                            scale: 1.3,
                                                                            rotate: 360,
                                                                        }}
                                                                        transition={{
                                                                            duration: 0.3,
                                                                        }}>
                                                                        <CheckCircleOutline
                                                                            sx={{
                                                                                fontSize: 18,
                                                                                color: colors.accent,
                                                                                filter: `drop-shadow(0 0 8px ${colors.accent}60)`,
                                                                            }}
                                                                        />
                                                                    </motion.div>
                                                                </ListItemIcon>
                                                                <ListItemText
                                                                    primary={
                                                                        feature
                                                                    }
                                                                    sx={{
                                                                        "& .MuiListItemText-primary":
                                                                            {
                                                                                fontSize:
                                                                                    "0.9rem",
                                                                                color: colors
                                                                                    .text
                                                                                    .secondary,
                                                                                fontWeight: 400,
                                                                            },
                                                                    }}
                                                                />
                                                            </ListItem>
                                                        </motion.div>
                                                    )
                                                )}
                                            </List>

                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.8 }}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        gap: 2,
                                                        mt: 3,
                                                        flexWrap: "wrap",
                                                    }}>
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 1.05,
                                                            y: -2,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.95,
                                                        }}>
                                                        <Chip
                                                            label={`Status: ${project.status}`}
                                                            size='small'
                                                            icon={
                                                                <Visibility
                                                                    sx={{
                                                                        fontSize: 16,
                                                                    }}
                                                                />
                                                            }
                                                            sx={{
                                                                background: `linear-gradient(135deg, ${colors.accent}30, ${colors.accent}50)`,
                                                                color: colors.accent,
                                                                fontWeight: 600,
                                                                border: `1px solid ${colors.accent}50`,
                                                                backdropFilter:
                                                                    "blur(10px)",
                                                            }}
                                                        />
                                                    </motion.div>
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 1.05,
                                                            y: -2,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.95,
                                                        }}>
                                                        <Chip
                                                            label={`Duration: ${project.duration}`}
                                                            size='small'
                                                            icon={
                                                                <Timeline
                                                                    sx={{
                                                                        fontSize: 16,
                                                                    }}
                                                                />
                                                            }
                                                            sx={{
                                                                background: `linear-gradient(135deg, ${colors.primary}30, ${colors.primary}50)`,
                                                                color: colors.primary,
                                                                fontWeight: 600,
                                                                border: `1px solid ${colors.primary}50`,
                                                                backdropFilter:
                                                                    "blur(10px)",
                                                            }}
                                                        />
                                                    </motion.div>
                                                </Box>
                                            </motion.div>
                                        </Box>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.5 }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 1.5,
                                        mb: 3,
                                    }}>
                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <motion.div
                                                key={tech}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    delay:
                                                        index * 0.1 +
                                                        techIndex * 0.1 +
                                                        0.6,
                                                    type: "spring",
                                                    damping: 15,
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    y: -3,
                                                    boxShadow: `0 8px 25px ${colors.primary}40`,
                                                }}
                                                whileTap={{ scale: 0.95 }}>
                                                <Chip
                                                    label={tech}
                                                    size='small'
                                                    sx={{
                                                        background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}40)`,
                                                        color: colors.primary,
                                                        fontWeight: 600,
                                                        border: `1px solid ${colors.primary}30`,
                                                        backdropFilter:
                                                            "blur(10px)",
                                                        fontSize: "0.8rem",
                                                        transition:
                                                            "all 0.3s ease",
                                                    }}
                                                />
                                            </motion.div>
                                        )
                                    )}
                                </Box>
                            </motion.div>
                        </motion.div>
                    </CardContent>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.8 }}>
                        <Box
                            sx={{
                                p: 3,
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 2,
                                background: `rgba(255,255,255,0.02)`,
                                backdropFilter: "blur(10px)",
                            }}>
                            <motion.div
                                whileHover={{ scale: 1.05, x: -5 }}
                                whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant='outlined'
                                    size='small'
                                    startIcon={
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}>
                                            <GitHub />
                                        </motion.div>
                                    }
                                    href={project.githubLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    sx={{
                                        borderColor: colors.accent,
                                        color: colors.accent,
                                        fontWeight: 600,
                                        borderRadius: "12px",
                                        px: 2.5,
                                        py: 1,
                                        background: `rgba(255,255,255,0.05)`,
                                        backdropFilter: "blur(10px)",
                                        "&:hover": {
                                            background: `linear-gradient(135deg, ${colors.accent}20, ${colors.accent}40)`,
                                            borderColor: colors.accent,
                                            boxShadow: `0 8px 25px ${colors.accent}40`,
                                            transform: "translateY(-2px)",
                                        },
                                    }}>
                                    GitHub
                                </Button>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant='contained'
                                    size='small'
                                    startIcon={
                                        <motion.div
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 45,
                                            }}
                                            transition={{ duration: 0.3 }}>
                                            <Launch />
                                        </motion.div>
                                    }
                                    href={
                                        project.liveLink &&
                                        project.liveLink !== "#"
                                            ? project.liveLink
                                            : "#"
                                    }
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    disabled={
                                        !project.liveLink ||
                                        project.liveLink === "#"
                                    }
                                    sx={{
                                        background:
                                            project.liveLink &&
                                            project.liveLink !== "#"
                                                ? `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`
                                                : `linear-gradient(135deg, ${colors.text.secondary}40, ${colors.text.secondary}60)`,
                                        color: "white",
                                        fontWeight: 600,
                                        borderRadius: "12px",
                                        px: 2.5,
                                        py: 1,
                                        boxShadow:
                                            project.liveLink &&
                                            project.liveLink !== "#"
                                                ? `0 4px 15px ${colors.accent}40`
                                                : `0 4px 15px ${colors.text.secondary}20`,
                                        "&:hover": {
                                            background:
                                                project.liveLink &&
                                                project.liveLink !== "#"
                                                    ? `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                                                    : `linear-gradient(135deg, ${colors.text.secondary}50, ${colors.text.secondary}70)`,
                                            boxShadow:
                                                project.liveLink &&
                                                project.liveLink !== "#"
                                                    ? `0 8px 30px ${colors.accent}60`
                                                    : `0 8px 30px ${colors.text.secondary}30`,
                                            transform: "translateY(-2px)",
                                        },
                                        "&.Mui-disabled": {
                                            color: "rgba(255,255,255,0.6)",
                                            background: `linear-gradient(135deg, ${colors.text.secondary}30, ${colors.text.secondary}50)`,
                                        },
                                    }}>
                                    Live Demo
                                </Button>
                            </motion.div>
                        </Box>
                    </motion.div>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default React.memo(ProjectCard);
