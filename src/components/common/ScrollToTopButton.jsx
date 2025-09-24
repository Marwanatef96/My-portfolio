/** @format */

import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { KeyboardArrowUp } from "@mui/icons-material";
import { floatingAnimation } from "../../utils/animationVariants";

const ScrollToTopButton = ({ colors }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            style={{
                position: "fixed",
                bottom: "30px",
                right: "30px",
                zIndex: 1000,
            }}>
            <motion.div
                animate={floatingAnimation}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Button
                    variant='contained'
                    sx={{
                        borderRadius: "50%",
                        minWidth: "60px",
                        height: "60px",
                        background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`,
                        boxShadow: `0 8px 25px ${colors.accent}60`,
                        "&:hover": {
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                            boxShadow: `0 12px 35px ${colors.accent}80`,
                        },
                    }}
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }>
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}>
                        <KeyboardArrowUp sx={{ fontSize: "2rem" }} />
                    </motion.div>
                </Button>
            </motion.div>
        </motion.div>
    );
};

export default ScrollToTopButton;
