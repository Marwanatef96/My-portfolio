/** @format */

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const CustomCursor = () => {
    const { colors } = useTheme();
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Position values
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const spring = { damping: 30, stiffness: 500, mass: 0.4 };
    const xSpring = useSpring(x, spring);
    const ySpring = useSpring(y, spring);

    useEffect(() => {
        const onMove = (e) => {
            x.set(e.clientX - 16);
            y.set(e.clientY - 16);
        };
        const onDown = () => setIsClicking(true);
        const onUp = () => setIsClicking(false);

        const onOver = (e) => {
            const t = e.target;
            const interactive =
                t.tagName === "BUTTON" ||
                t.tagName === "A" ||
                t.closest("button") ||
                t.closest("a") ||
                t.classList?.contains("interactive") ||
                t.closest?.(".interactive");
            setIsHovering(Boolean(interactive));
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", onUp);
        document.addEventListener("mouseover", onOver);

        // Hide native cursor
        const prevCursor = document.body.style.cursor;
        document.body.style.cursor = "none";

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
            document.removeEventListener("mouseover", onOver);
            document.body.style.cursor = prevCursor;
        };
    }, [x, y]);

    return (
        <motion.div
            className='fixed top-0 left-0 pointer-events-none z-[9999]'
            style={{ x: xSpring, y: ySpring }}>
            {/* Soft glow ring (backdrop) */}
            <motion.div
                className='absolute rounded-full'
                style={{
                    width: 56,
                    height: 56,
                    left: -8,
                    top: -8,
                    background: `${colors.accent}22`,
                    filter: "blur(8px)",
                }}
                animate={{
                    opacity: isHovering ? 0.5 : 0.25,
                    scale: isHovering ? 1.15 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            />

            {/* Ring */}
            <motion.div
                className='absolute rounded-full'
                style={{
                    width: 32,
                    height: 32,
                    border: `2px solid ${colors.accent}`,
                }}
                animate={{
                    scale: isClicking ? 0.85 : isHovering ? 1.15 : 1,
                    opacity: 0.9,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Dot */}
            <motion.div
                className='absolute rounded-full'
                style={{
                    width: 8,
                    height: 8,
                    left: 12,
                    top: 12,
                    background: colors.accent,
                }}
                animate={{ scale: isClicking ? 1.6 : isHovering ? 0.8 : 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
        </motion.div>
    );
};

export default CustomCursor;
