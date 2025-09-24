/** @format */

import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    Button,
    Box,
    Avatar,
    Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import {
    ArrowDownward,
    GitHub,
    LinkedIn,
    Email,
    Twitter,
    Facebook,
} from "@mui/icons-material";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
    const { colors } = useTheme();
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Typing effect logic (from Hero.js)
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const roles = [
            "Front End Developer",
            "React Specialist",
            "UI/UX Enthusiast",
            "Problem Solver",
        ];
        const currentRole = roles[roleIndex];
        let timer;
        if (!deleting && charIndex <= currentRole.length) {
            timer = setTimeout(() => {
                setText(currentRole.slice(0, charIndex));
                setCharIndex(charIndex + 1);
            }, 100);
        } else if (deleting && charIndex >= 0) {
            timer = setTimeout(() => {
                setText(currentRole.slice(0, charIndex));
                setCharIndex(charIndex - 1);
            }, 30);
        } else if (charIndex > currentRole.length) {
            timer = setTimeout(() => setDeleting(true), 1000);
        } else if (charIndex < 0) {
            setDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
            setCharIndex(0);
        }
        return () => clearTimeout(timer);
    }, [charIndex, deleting, roleIndex]);

    // Avatar image (customize as needed)
    const avatarUrl =
        "https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/407459925_3344234602389613_2487854932642543414_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZntKHwvmNIMQ7kNvwHQpnlE&_nc_oc=AdkjyHr_Wn-ZfPgg1nQZLBbEmlZN8RTv3BWJzcoaK_zi93jdIJiqzXM2YmWvFglKjqM&_nc_zt=23&_nc_ht=scontent-hbe1-2.xx&_nc_gid=xnBJNl04NkUDZCHjRfpCMQ&oh=00_AfbsFZ5C5dECwLRjvZFu5cDFNRGUouzJLUzo6IBWyZK7HQ&oe=68D76C37";
    const name = "Marwan";

    return (
        <Box
            component='section'
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
            }}>
            {/* Animated Background Elements */}
            <motion.div
                className='absolute inset-0 opacity-20'
                animate={{
                    background: [
                        `radial-gradient(circle at 20% 50%, ${colors.accent} 0%, transparent 50%)`,
                        `radial-gradient(circle at 80% 20%, ${colors.secondary} 0%, transparent 50%)`,
                        `radial-gradient(circle at 40% 80%, ${colors.accent} 0%, transparent 50%)`,
                    ],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                style={{ position: "absolute", inset: 0, zIndex: 0 }}
            />

            <Container
                id='home'
                maxWidth='lg'
                sx={{ position: "relative", zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}>
                    <Grid
                        container
                        spacing={{ xs: 1, md: 4 }}
                        alignItems='center'
                        justifyContent='center'
                        sx={{ mb: 4 }}>
                        {/* Avatar */}
                        <Grid
                            size={{ xs: 12, md: 3 }}
                            order={{ xs: 1, md: 2 }}
                            sx={{
                                width: { xs: 220, md: 280 },
                                height: { xs: 220, md: 280 },
                                display: "flex",
                                justifyContent: {
                                    xs: "center",
                                    md: "flex-end",
                                },
                                mb: { xs: 2, md: 20 },
                            }}>
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}>
                                <Avatar
                                    src={avatarUrl}
                                    alt={name}
                                    sx={{
                                        width: { xs: 220, md: 280 },
                                        height: { xs: 220, md: 280 },
                                        border: `4px solid ${colors.accent}`,
                                        boxShadow:
                                            "0 20px 40px rgba(0,0,0,0.1)",
                                    }}
                                />
                            </motion.div>
                        </Grid>
                        <Grid
                            size={{ xs: 12, md: 7 }}
                            order={{ xs: 2, md: 1 }}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "flex-start" },
                                textAlign: { xs: "center", md: "left" },
                            }}>
                            <Typography
                                variant='h6'
                                sx={{
                                    color: colors.accent,
                                    fontFamily: "monospace",
                                    mb: 2,
                                    fontSize: { xs: "1rem", md: "1.2rem" },
                                }}>
                                Hi, my name is
                            </Typography>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}>
                                <Typography
                                    variant='h1'
                                    sx={{
                                        fontWeight: 700,
                                        color: colors.text.primary,
                                        mb: 1,
                                        fontSize: {
                                            xs: "2.5rem",
                                            md: "4rem",
                                            lg: "5rem",
                                        },
                                        lineHeight: 1.1,
                                    }}>
                                    {name}
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}>
                                <Typography
                                    variant='h2'
                                    sx={{
                                        fontWeight: 600,
                                        color: colors.text.secondary,
                                        mb: 3,
                                        fontSize: {
                                            xs: "2rem",
                                            md: "3rem",
                                            lg: "4rem",
                                        },
                                        lineHeight: 1.1,
                                        minHeight: "60px",
                                    }}>
                                    {text}
                                    <Box
                                        component='span'
                                        sx={{
                                            borderRight: "2px solid",
                                            borderColor: colors.accent,
                                            animation: "blink 1s infinite",
                                            ml: 0.5,
                                        }}
                                    />
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}>
                                <Typography
                                    variant='body1'
                                    sx={{
                                        color: colors.text.secondary,
                                        maxWidth: "540px",
                                        mb: 4,
                                        fontSize: { xs: "1rem", md: "1.2rem" },
                                        lineHeight: 1.6,
                                    }}>
                                    I create exceptional digital experiences
                                    with clean, efficient code. Passionate about
                                    turning ideas into reality through
                                    innovative web solutions.
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className='flex flex-wrap gap-4 mb-8'>
                                <Button
                                    variant='outlined'
                                    size='large'
                                    onClick={() => scrollToSection("#projects")}
                                    sx={{
                                        borderColor: colors.accent,
                                        color: colors.accent,
                                        px: 4,
                                        py: 1.5,
                                        fontSize: "1.1rem",
                                        "&:hover": {
                                            backgroundColor: `${colors.accent}1a`,
                                            borderColor: colors.accent,
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}>
                                    Check out my work!
                                </Button>
                                <Button
                                    variant='contained'
                                    size='large'
                                    onClick={() => scrollToSection("#contact")}
                                    sx={{
                                        backgroundColor: colors.accent,
                                        color: colors.background.paper,
                                        px: 4,
                                        py: 1.5,
                                        fontSize: "1.1rem",
                                        "&:hover": {
                                            backgroundColor: colors.primary,
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}>
                                    Get In Touch
                                </Button>
                                <Button
                                    variant='contained'
                                    size='large'
                                    href='/Marwan_Atef_CV.pdf' // make sure CV.pdf is in your public/ folder
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    sx={{
                                        backgroundColor: colors.accent,
                                        color: colors.background.paper,
                                        px: 4,
                                        py: 1.5,
                                        fontSize: "1.1rem",
                                        "&:hover": {
                                            backgroundColor: colors.primary,
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}>
                                    View CV
                                </Button>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className='flex gap-4'>
                                {[
                                    {
                                        icon: GitHub,
                                        name: "GitHub",
                                        href: "https://github.com/Marwanatef96",
                                        color: colors.text.primary,
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
                                        color: colors.primary,
                                    },
                                ].map(({ icon: Icon, href, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='p-3 rounded-full border transition-all duration-300'
                                        style={{
                                            borderColor: colors.border,
                                            backgroundColor: "transparent",
                                        }}>
                                        <Icon
                                            sx={{
                                                color: colors.text.secondary,
                                                "&:hover": {
                                                    color: colors.accent,
                                                },
                                            }}
                                        />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}>
                <Button
                    onClick={() => scrollToSection("#about")}
                    sx={{
                        color: colors.accent,
                        minWidth: "auto",
                        p: 1,
                        "&:hover": { backgroundColor: `${colors.accent}1a` },
                    }}>
                    <ArrowDownward />
                </Button>
            </motion.div>
            {/* Blinking cursor keyframes */}
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </Box>
    );
};

export default Hero;
