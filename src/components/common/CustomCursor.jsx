/** @format */

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const CustomCursor = () => {
    const { colors } = useTheme();
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    const spring = { damping: 30, stiffness: 500, mass: 0.4 };
    const xSpring = useSpring(x, spring);
    const ySpring = useSpring(y, spring);

    useEffect(() => {
        const onMove = (e) => {
            x.set(e.clientX - 8); // Centering the dot
            y.set(e.clientY - 8);
        };

        window.addEventListener("mousemove", onMove);

        // Hide native cursor
        const prevCursor = document.body.style.cursor;
        document.body.style.cursor = "none";

        return () => {
            window.removeEventListener("mousemove", onMove);
            document.body.style.cursor = prevCursor;
        };
    }, [x, y]);

    return (
        <motion.div
            className='fixed top-0 left-0 pointer-events-none z-[9999]'
            style={{ x: xSpring, y: ySpring }}>
            {/* Simplified Dot */}
            <motion.div
                className='absolute rounded-full'
                style={{
                    width: 16,
                    height: 16,
                    background: colors.accent,
                }}
                animate={{
                    scale: 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
        </motion.div>
    );
};

export default CustomCursor;