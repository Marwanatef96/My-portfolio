/** @format */

import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../common/ThemeToggle";

const HEADER_OFFSET = 70;

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { colors } = useTheme();

    const navItems = [
        { label: "Home", href: "#home", id: "home" },
        { label: "About", href: "#about", id: "about" },
        { label: "Skills", href: "#skills", id: "skills" },
        { label: "Projects", href: "#projects", id: "projects" },
        { label: "Experience", href: "#experience", id: "experience" },
        { label: "Contact", href: "#contact", id: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navItems
                .map((item) => {
                    const el = document.getElementById(item.id);
                    if (!el) return null;
                    return { id: item.id, el };
                })
                .filter(Boolean);

            if (sections.length === 0) return;

            const scrollThreshold = HEADER_OFFSET + 1;
            let newActiveSection = "home";

            // If scrolled to the very bottom, set the last section as active.
            if (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2
            ) {
                newActiveSection = navItems[navItems.length - 1].id;
            } else {
                // Otherwise, find the last section that has passed the threshold.
                for (let i = sections.length - 1; i >= 0; i--) {
                    const { id, el } = sections[i];
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= scrollThreshold) {
                        newActiveSection = id;
                        break;
                    }
                }
            }

            setActiveSection(newActiveSection);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const y =
                element.getBoundingClientRect().top +
                window.scrollY -
                HEADER_OFFSET;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setMobileOpen(false);
    };

    return (
        <>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}>
                <AppBar
                    position='fixed'
                    sx={{
                        backgroundColor: scrolled
                            ? colors.background.paper
                            : "transparent",
                        backdropFilter: scrolled ? "blur(10px)" : "none",
                        transition:
                            "background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease",
                        boxShadow: scrolled
                            ? `0 4px 12px ${colors.accent}14`
                            : "none",
                        borderBottom: scrolled
                            ? `1px solid ${colors.border}`
                            : "none",
                    }}>
                    <Toolbar className='max-w-7xl mx-auto w-full'>
                        <Typography
                            variant='h6'
                            sx={{
                                flexGrow: 1,
                                fontWeight: "bold",
                                color: colors.accent,
                                cursor: "pointer",
                            }}
                            onClick={() => scrollToSection("#home")}>
                            &lt;Marwan Atef /&gt;
                        </Typography>

                        {/* Desktop Navigation */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 2,
                                alignItems: "center",
                            }}>
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                    }}>
                                    <Button
                                        aria-current={
                                            activeSection === item.id
                                                ? "page"
                                                : undefined
                                        }
                                        onClick={() =>
                                            scrollToSection(item.href)
                                        }
                                        sx={{
                                            color:
                                                activeSection === item.id
                                                    ? colors.accent
                                                    : colors.text.primary,
                                            backgroundColor:
                                                activeSection === item.id
                                                    ? `${colors.accent}1a`
                                                    : "transparent",
                                            "&:hover": {
                                                color: colors.accent,
                                                backgroundColor: `${colors.accent}1a`,
                                            },
                                            transition: "all 0.3s ease",
                                            fontWeight:
                                                activeSection === item.id
                                                    ? 600
                                                    : 400,
                                        }}>
                                        {item.label}
                                    </Button>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}>
                                <ThemeToggle />
                            </motion.div>
                        </Box>

                        {/* Mobile Menu + Theme */}
                        <Box
                            sx={{
                                display: { xs: "flex", md: "none" },
                                alignItems: "center",
                                gap: 1,
                            }}>
                            <ThemeToggle />
                            <IconButton
                                aria-label='open drawer'
                                onClick={handleDrawerToggle}
                                sx={{
                                    color: colors.text.primary,
                                    "&:hover": {
                                        color: colors.accent,
                                        backgroundColor: `${colors.accent}1a`,
                                    },
                                }}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </motion.div>

            {/* Mobile Drawer */}
            <Drawer
                anchor='right'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        width: 240,
                        backgroundColor: colors.background.paper,
                        color: colors.text.primary,
                        borderLeft: `1px solid ${colors.border}`,
                    },
                }}>
                <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{ color: colors.text.primary }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.id} disablePadding>
                            <Button
                                fullWidth
                                aria-current={
                                    activeSection === item.id
                                        ? "page"
                                        : undefined
                                }
                                onClick={() => scrollToSection(item.href)}
                                sx={{
                                    justifyContent: "flex-start",
                                    color:
                                        activeSection === item.id
                                            ? colors.accent
                                            : colors.text.primary,
                                    backgroundColor:
                                        activeSection === item.id
                                            ? `${colors.accent}1a`
                                            : "transparent",
                                    "&:hover": {
                                        color: colors.accent,
                                        backgroundColor: `${colors.accent}1a`,
                                    },
                                    fontWeight:
                                        activeSection === item.id ? 600 : 400,
                                }}>
                                <ListItemText primary={item.label} />
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Header;
