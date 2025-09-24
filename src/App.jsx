/** @format */

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { motion } from "framer-motion";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import "./styles/App.css";

function AppContent() {
    const { colors } = useTheme();

    return (
        <>
            <CssBaseline />
            <div
                className='min-h-screen transition-all duration-500'
                style={{ background: colors.background.gradient }}>
                <Header />
                <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='pt-[64px] sm:pt-[56px]'>
                    <Hero />
                    <About />
                    <Skills />

                    <Projects />

                    <Experience />

                    <Contact />
                </motion.main>
                <Footer />
            </div>
        </>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
