/** @format */

import React, { createContext, useContext, useState, useEffect } from "react";
import {
    createTheme,
    ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

function readCssVar(name, fallback) {
    const value = getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
    return value || fallback;
}

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [colors, setColors] = useState({
        primary: "#2563eb",
        secondary: "#14b8a6",
        accent: "#f59e0b",
        background: {
            main: "#f8fafc",
            paper: "#ffffff",
            gradient: "none",
            accent: "none",
        },
        text: { primary: "#0f172a", secondary: "#64748b", accent: "#f59e0b" },
        border: "rgba(15, 23, 42, 0.12)",
        glow: { primary: "#f59e0b", secondary: "#14b8a6" },
    });

    // Load theme preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setIsDarkMode(prefersDark);
        }
    }, []);

    // Apply class and persist
    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    // Read CSS variables whenever mode changes
    useEffect(() => {
        const primary = readCssVar(
            "--color-primary",
            isDarkMode ? "#60a5fa" : "#2563eb"
        );
        const secondary = readCssVar(
            "--color-secondary",
            isDarkMode ? "#2dd4bf" : "#14b8a6"
        );
        const accent = readCssVar(
            "--color-accent",
            isDarkMode ? "#fbbf24" : "#f59e0b"
        );
        const bg = readCssVar("--color-bg", isDarkMode ? "#0b1220" : "#f8fafc");
        const card = readCssVar(
            "--color-card",
            isDarkMode ? "#0f172a" : "#ffffff"
        );
        const textPrimary = readCssVar(
            "--color-text",
            isDarkMode ? "#e2e8f0" : "#0f172a"
        );
        const muted = readCssVar(
            "--color-muted",
            isDarkMode ? "#94a3b8" : "#64748b"
        );
        const border = readCssVar(
            "--color-border",
            isDarkMode ? "rgba(226, 232, 240, 0.16)" : "rgba(15, 23, 42, 0.12)"
        );

        const gradient = `radial-gradient(1200px circle at 10% 10%, ${accent}22, transparent 60%), linear-gradient(135deg, ${bg} 0%, ${
            isDarkMode ? "#0e1628" : "#eef2f7"
        } 50%, ${bg} 100%)`;
        const accentOverlay = `linear-gradient(90deg, ${accent}1a, transparent)`;

        setColors({
            primary,
            secondary,
            accent,
            background: {
                main: bg,
                paper: card,
                gradient,
                accent: accentOverlay,
            },
            text: { primary: textPrimary, secondary: muted, accent },
            border,
            glow: { primary: accent, secondary },
        });
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    const muiTheme = createTheme({
        palette: {
            mode: isDarkMode ? "dark" : "light",
            primary: { main: colors.primary },
            secondary: { main: colors.secondary },
            background: {
                default: colors.background.main,
                paper: colors.background.paper,
            },
            text: {
                primary: colors.text.primary,
                secondary: colors.text.secondary,
            },
            divider: colors.border,
        },
        typography: {
            fontFamily: "Inter, system-ui, sans-serif",
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: "none",
                        transition:
                            "background-color 300ms ease, color 300ms ease",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                        borderRadius: 8,
                        transition: "all 200ms ease",
                    },
                },
            },
        },
    });

    const value = { isDarkMode, toggleTheme, muiTheme, colors };

    return (
        <ThemeContext.Provider value={value}>
            <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
