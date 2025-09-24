/** @format */

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

export const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100,
            duration: 0.8,
        },
    },
    hover: {
        y: -15,
        scale: 1.05,
        rotateY: 5,
        transition: {
            type: "spring",
            damping: 10,
            stiffness: 200,
        },
    },
};

export const cardVariants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        rotateX: -45,
        y: 100,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 80,
            duration: 1.2,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.5,
        rotateX: 45,
        y: -100,
        transition: { duration: 0.5 },
    },
};

export const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

export const glowVariants = {
    initial: { boxShadow: "0 0 0 rgba(255,255,255,0)" },
    hover: {
        boxShadow:
            "0 0 30px rgba(79, 172, 254, 0.6), 0 0 60px rgba(79, 172, 254, 0.3)",
        transition: { duration: 0.3 },
    },
};

export const textRevealVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100,
        },
    },
};

export const filterButtonVariants = {
    inactive: { scale: 1, backgroundColor: "transparent" },
    active: {
        scale: 1.1,
        backgroundColor: "#4FACFE",
        transition: { type: "spring", damping: 10, stiffness: 200 },
    },
    hover: { scale: 1.05, y: -2, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
};

export const sparkleVariants = {
    animate: {
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};
