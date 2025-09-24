/** @format */

import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme, colors } = useTheme();

    return (
        <Tooltip title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                    onClick={toggleTheme}
                    sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        color: colors.accent,
                        backgroundColor: `${colors.accent}1a`,
                        border: `1px solid ${colors.accent}40`,
                        boxShadow: `0 2px 6px ${colors.glow}`,
                        "&:hover": {
                            backgroundColor: `${colors.accent}26`,
                            borderColor: colors.accent,
                            boxShadow: `0 4px 12px ${colors.glow}`,
                            transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        zIndex: 1,
                    }}>
                    <motion.div
                        initial={false}
                        animate={{
                            rotate: isDarkMode ? 0 : 180,
                            scale: isDarkMode ? 1 : 0.85,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}>
                        {isDarkMode ? (
                            <LightMode sx={{ fontSize: "1.6rem" }} />
                        ) : (
                            <DarkMode sx={{ fontSize: "1.6rem" }} />
                        )}
                    </motion.div>

                    {/* Animated background pulse */}
                    <motion.div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            transform: "translate(-50%, -50%) scale(1.5)",
                            zIndex: 0,
                            pointerEvents: "none",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{
                            background: `radial-gradient(circle, ${colors.accent}33 0%, transparent 70%)`,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                    />
                </IconButton>
            </motion.div>
        </Tooltip>
    );
};

export default ThemeToggle;
