/** @format */

import React, { useState, useEffect } from "react";
import {
    Container,
    Box,
    Typography,
    Paper,
    TextField,
    Button,
    Grid,
    IconButton,
    Alert,
    CircularProgress,
    useTheme as useMuiTheme,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "../../context/ThemeContext";
import {
    Send,
    Mail,
    Phone,
    LocationOn,
    GitHub,
    LinkedIn,
    Twitter,
    Facebook,
    AutoFixHigh,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const { colors } = useTheme();

    // EmailJS Configuration
    const EMAILJS_CONFIG = {
        serviceId: "service_mvihfuc",
        templateId: "template_x6rocz6",
        publicKey: "5e-QTBhdie-Vb_3Fo",
    };

    // State variables
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: "success",
    });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [sparkles, setSparkles] = useState([]);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    }, [EMAILJS_CONFIG.publicKey]);

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Sparkle generation
    useEffect(() => {
        const interval = setInterval(() => {
            setSparkles((prev) =>
                [
                    ...prev,
                    {
                        id: Math.random(),
                        x:
                            Math.random() *
                            (typeof window !== "undefined"
                                ? window.innerWidth
                                : 1000),
                        y:
                            Math.random() *
                            (typeof window !== "undefined"
                                ? window.innerHeight
                                : 1000),
                        size: Math.random() * 4 + 2,
                        life: 0,
                    },
                ].slice(-20)
            );
        }, 200);
        return () => clearInterval(interval);
    }, []);

    // Sparkle lifecycle
    useEffect(() => {
        const interval = setInterval(() => {
            setSparkles((prev) =>
                prev
                    .map((sparkle) => ({ ...sparkle, life: sparkle.life + 1 }))
                    .filter((sparkle) => sparkle.life < 50)
            );
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "marwanatef54@gmail.com",
            href: "mailto:marwanatef54@gmail.com",
            color: colors.primary,
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+201148763929",
            href: "tel:+201148763929",
            color: "#10b981",
        },
        {
            icon: LocationOn,
            title: "Location",
            value: "Ismailia, Egypt",
            href: "https://www.google.com/maps/place/%D8%A7%D9%84%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9%D8%8C+%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9%E2%80%AD/@30.5981827,32.2697131,2625m/data=!3m1!1e3!4m6!3m5!1s0x14f85956191e10b9:0x3b0933775b0f5b95!8m2!3d30.5964923!4d32.2714587!16zL20vMDI5cG02?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D",
            color: "#8b5cf6",
        },
    ];

    const socialLinks = [
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
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.from_name || !formData.from_email || !formData.message) {
            setNotification({
                show: true,
                message: "Please fill in all required fields.",
                type: "error",
            });
            setTimeout(
                () => setNotification((prev) => ({ ...prev, show: false })),
                5000
            );
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.from_email)) {
            setNotification({
                show: true,
                message: "Please enter a valid email address.",
                type: "error",
            });
            setTimeout(
                () => setNotification((prev) => ({ ...prev, show: false })),
                5000
            );
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                {
                    from_name: formData.from_name,
                    from_email: formData.from_email,
                    subject: formData.subject || "New Portfolio Contact",
                    message: formData.message,
                }
            );
            console.log("✅ Email sent successfully:", result);

            setNotification({
                show: true,
                message:
                    "Message sent successfully! I'll get back to you within 24 hours.",
                type: "success",
            });

            // Reset form
            setFormData({
                from_name: "",
                from_email: "",
                subject: "",
                message: "",
            });

            setTimeout(
                () => setNotification((prev) => ({ ...prev, show: false })),
                5000
            );
        } catch (error) {
            console.error("❌ Failed to send email:", error);
            setNotification({
                show: true,
                message:
                    "Failed to send message. Please try again or contact me directly.",
                type: "error",
            });
            setTimeout(
                () => setNotification((prev) => ({ ...prev, show: false })),
                5000
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    // Floating particles component
    const FloatingParticles = () => (
        <Box
            sx={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 0,
            }}>
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: "absolute",
                        width: 3,
                        height: 3,
                        backgroundColor: colors.accent,
                        borderRadius: "50%",
                        opacity: 0.3,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </Box>
    );

    return (
        <Box
            component='section'
            sx={{
                position: "relative",
                minHeight: "100vh",
                py: { xs: 10, md: 15 },
                overflow: "hidden",
                background: `
                    radial-gradient(circle at 25% 30%, ${colors.primary}0f 0%, transparent 50%),
                    radial-gradient(circle at 75% 70%, ${colors.accent}0f 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, ${colors.secondary}0a 0%, transparent 50%),
                    linear-gradient(135deg, ${colors.accent}0a 0%, ${colors.background.main} 100%)
                `,
            }}>
            <FloatingParticles />

            {/* Animated background elements */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                }}>
                <motion.div
                    style={{
                        position: "absolute",
                        width: 384,
                        height: 384,
                        background: `linear-gradient(45deg, ${colors.accent}33, ${colors.primary}33)`,
                        borderRadius: "50%",
                        filter: "blur(60px)",
                        transform: `translate(${mousePos.x * 0.02}px, ${
                            mousePos.y * 0.02
                        }px)`,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                />
                <motion.div
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: 0,
                        width: 320,
                        height: 320,
                        background: `linear-gradient(45deg, ${colors.secondary}33, #ec489933)`,
                        borderRadius: "50%",
                        filter: "blur(60px)",
                        transform: `translate(${mousePos.x * -0.01}px, ${
                            mousePos.y * -0.01
                        }px)`,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                />
            </Box>

            {/* Floating sparkles */}
            {sparkles.map((sparkle) => (
                <Box
                    key={sparkle.id}
                    sx={{
                        position: "absolute",
                        pointerEvents: "none",
                        left: sparkle.x,
                        top: sparkle.y,
                        transform: `scale(${1 - sparkle.life * 0.02})`,
                        opacity: Math.max(0, 1 - sparkle.life * 0.02),
                        zIndex: 1,
                    }}>
                    <AutoFixHigh
                        sx={{
                            fontSize: sparkle.size,
                            color: colors.accent,
                            animation: "pulse 1s infinite",
                        }}
                    />
                </Box>
            ))}

            <Container id='contact' maxWidth='lg' sx={{ position: "relative", zIndex: 10 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                    }}>
                    <Box sx={{ textAlign: "center", mb: 8 }}>
                        <Typography
                           
                            variant='h2'
                            sx={{
                                fontSize: { xs: "3rem", md: "4rem" },
                                fontWeight: "bold",
                                mb: 3,
                                background: `linear-gradient(45deg, ${colors.text.primary}, ${colors.accent}, ${colors.text.primary})`,
                                backgroundSize: "200% 200%",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}>
                            Get In Touch
                        </Typography>

                        <Box
                            sx={{
                                width: 80,
                                height: 4,
                                mx: "auto",
                                mb: 4,
                                background: `linear-gradient(90deg, ${colors.accent}, ${colors.primary})`,
                                borderRadius: 2,
                            }}
                        />

                        <Typography
                            variant='h6'
                            sx={{
                                color: colors.text.secondary,
                                lineHeight: 1.6,
                                maxWidth: "700px",
                                mx: "auto",
                            }}>
                            I'm always interested in new opportunities and
                            exciting projects. Whether you have a question or
                            just want to say hi, feel free to reach out!
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={6} alignItems='flex-start'>
                    {/* Contact Information */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}>
                            <Typography
                                variant='h4'
                                sx={{
                                    color: colors.text.primary,
                                    mb: 4,
                                    fontWeight: "bold",
                                }}>
                                Let's Connect
                            </Typography>

                            {/* Contact Cards */}
                            <Box sx={{ mb: 6 }}>
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        viewport={{ once: true }}>
                                        <Paper
                                            component='a'
                                            href={info.href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            sx={{
                                                p: 3,
                                                mb: 2,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                                background:
                                                    colors.background.glass,
                                                backdropFilter: "blur(20px)",
                                                border: `1px solid ${colors.border}`,
                                                borderRadius: 3,
                                                color: "inherit",
                                                textDecoration: "none",
                                                transition: "all 0.3s ease",
                                                cursor: "pointer",
                                                "&:hover": {
                                                    background: `${colors.background.paper}cc`,
                                                    borderColor: `${info.color}80`,
                                                    boxShadow: `0 10px 30px ${info.color}33`,
                                                },
                                            }}>
                                            <Box
                                                sx={{
                                                    p: 1.5,
                                                    borderRadius: 2,
                                                    backgroundColor: `${info.color}26`,
                                                    color: info.color,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}>
                                                <info.icon
                                                    sx={{ fontSize: 24 }}
                                                />
                                            </Box>
                                            <Box>
                                                <Typography
                                                    variant='h6'
                                                    sx={{
                                                        color: colors.text
                                                            .primary,
                                                        fontWeight: 600,
                                                        fontSize: "1.1rem",
                                                    }}>
                                                    {info.title}
                                                </Typography>
                                                <Typography
                                                    variant='body2'
                                                    sx={{
                                                        color: colors.text
                                                            .secondary,
                                                    }}>
                                                    {info.value}
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </motion.div>
                                ))}
                            </Box>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}>
                                <Typography
                                    variant='h6'
                                    sx={{
                                        color: colors.text.primary,
                                        mb: 3,
                                        fontWeight: 600,
                                    }}>
                                    Follow Me
                                </Typography>
                                <Box sx={{ display: "flex", gap: 2 }}>
                                    {socialLinks.map((social, index) => (
                                        <motion.div
                                            key={social.name}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            whileHover={{ scale: 1.1, y: -4 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                                type: "spring",
                                                stiffness: 200,
                                            }}
                                            viewport={{ once: true }}>
                                            <IconButton
                                                href={social.href}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                sx={{
                                                    width: 56,
                                                    height: 56,
                                                    backgroundColor:
                                                        colors.background.glass,
                                                    backdropFilter:
                                                        "blur(10px)",
                                                    border: `1px solid ${colors.border}`,
                                                    borderRadius: 2,
                                                    color: colors.text
                                                        .secondary,
                                                    transition: "all 0.3s ease",
                                                    "&:hover": {
                                                        color: social.color,
                                                        backgroundColor: `${social.color}1a`,
                                                        borderColor: `${social.color}4d`,
                                                        boxShadow: `0 8px 25px ${social.color}33`,
                                                    },
                                                }}>
                                                <social.icon
                                                    sx={{ fontSize: 24 }}
                                                />
                                            </IconButton>
                                        </motion.div>
                                    ))}
                                </Box>
                            </motion.div>
                        </motion.div>
                    </Grid>

                    {/* Contact Form */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}>
                            <Paper
                                sx={{
                                    p: 4,
                                    background: colors.background.glass,
                                    backdropFilter: "blur(20px)",
                                    border: `1px solid ${colors.border}`,
                                    borderRadius: 4,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        background: `${colors.background.paper}99`,
                                        borderColor: `${colors.accent}4d`,
                                    },
                                }}>
                                <Typography
                                    variant='h5'
                                    sx={{
                                        color: colors.text.primary,
                                        mb: 4,
                                        fontWeight: 600,
                                    }}>
                                    Send Me a Message
                                </Typography>

                                <Box component='form' onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                name='from_name'
                                                label='Your Name'
                                                value={formData.from_name}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isSubmitting}
                                                fullWidth
                                                sx={{
                                                    "& .MuiOutlinedInput-root":
                                                        {
                                                            backgroundColor: `${colors.background.glass}80`,
                                                            "& fieldset": {
                                                                borderColor:
                                                                    colors.border,
                                                            },
                                                            "&:hover fieldset":
                                                                {
                                                                    borderColor: `${colors.accent}80`,
                                                                },
                                                            "&.Mui-focused fieldset":
                                                                {
                                                                    borderColor:
                                                                        colors.accent,
                                                                },
                                                        },
                                                    "& .MuiInputLabel-root": {
                                                        color: colors.text
                                                            .secondary,
                                                        "&.Mui-focused": {
                                                            color: colors.accent,
                                                        },
                                                    },
                                                    "& .MuiOutlinedInput-input":
                                                        {
                                                            color: colors.text
                                                                .primary,
                                                        },
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                name='from_email'
                                                label='Your Email'
                                                type='email'
                                                value={formData.from_email}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isSubmitting}
                                                fullWidth
                                                sx={{
                                                    "& .MuiOutlinedInput-root":
                                                        {
                                                            backgroundColor: `${colors.background.glass}80`,
                                                            "& fieldset": {
                                                                borderColor:
                                                                    colors.border,
                                                            },
                                                            "&:hover fieldset":
                                                                {
                                                                    borderColor: `${colors.accent}80`,
                                                                },
                                                            "&.Mui-focused fieldset":
                                                                {
                                                                    borderColor:
                                                                        colors.accent,
                                                                },
                                                        },
                                                    "& .MuiInputLabel-root": {
                                                        color: colors.text
                                                            .secondary,
                                                        "&.Mui-focused": {
                                                            color: colors.accent,
                                                        },
                                                    },
                                                    "& .MuiOutlinedInput-input":
                                                        {
                                                            color: colors.text
                                                                .primary,
                                                        },
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                name='subject'
                                                label='Subject (Optional)'
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                disabled={isSubmitting}
                                                fullWidth
                                                sx={{
                                                    "& .MuiOutlinedInput-root":
                                                        {
                                                            backgroundColor: `${colors.background.glass}80`,
                                                            "& fieldset": {
                                                                borderColor:
                                                                    colors.border,
                                                            },
                                                            "&:hover fieldset":
                                                                {
                                                                    borderColor: `${colors.accent}80`,
                                                                },
                                                            "&.Mui-focused fieldset":
                                                                {
                                                                    borderColor:
                                                                        colors.accent,
                                                                },
                                                        },
                                                    "& .MuiInputLabel-root": {
                                                        color: colors.text
                                                            .secondary,
                                                        "&.Mui-focused": {
                                                            color: colors.accent,
                                                        },
                                                    },
                                                    "& .MuiOutlinedInput-input":
                                                        {
                                                            color: colors.text
                                                                .primary,
                                                        },
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                name='message'
                                                label='Your Message'
                                                multiline
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isSubmitting}
                                                fullWidth
                                                sx={{
                                                    "& .MuiOutlinedInput-root":
                                                        {
                                                            backgroundColor: `${colors.background.glass}80`,
                                                            "& fieldset": {
                                                                borderColor:
                                                                    colors.border,
                                                            },
                                                            "&:hover fieldset":
                                                                {
                                                                    borderColor: `${colors.accent}80`,
                                                                },
                                                            "&.Mui-focused fieldset":
                                                                {
                                                                    borderColor:
                                                                        colors.accent,
                                                                },
                                                        },
                                                    "& .MuiInputLabel-root": {
                                                        color: colors.text
                                                            .secondary,
                                                        "&.Mui-focused": {
                                                            color: colors.accent,
                                                        },
                                                    },
                                                    "& .MuiOutlinedInput-input":
                                                        {
                                                            color: colors.text
                                                                .primary,
                                                        },
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <motion.div
                                                whileHover={{ y: -2 }}
                                                whileTap={{ scale: 0.98 }}>
                                                <Button
                                                    type='submit'
                                                    variant='contained'
                                                    disabled={isSubmitting}
                                                    startIcon={
                                                        isSubmitting ? (
                                                            <CircularProgress
                                                                size={20}
                                                                color='inherit'
                                                            />
                                                        ) : (
                                                            <Send />
                                                        )
                                                    }
                                                    sx={{
                                                        px: 4,
                                                        py: 1.5,
                                                        background: `linear-gradient(45deg, ${colors.accent}, ${colors.primary})`,
                                                        borderRadius: 2,
                                                        textTransform: "none",
                                                        fontSize: "1rem",
                                                        fontWeight: 600,
                                                        boxShadow: `0 8px 25px ${colors.accent}4d`,
                                                        "&:hover": {
                                                            background: `linear-gradient(45deg, ${colors.accent}cc, ${colors.primary}cc)`,
                                                            boxShadow: `0 12px 35px ${colors.accent}66`,
                                                        },
                                                        "&:disabled": {
                                                            background: `${colors.text.secondary}4d`,
                                                            color: colors.text
                                                                .secondary,
                                                        },
                                                    }}>
                                                    {isSubmitting
                                                        ? "Sending..."
                                                        : "Send Message"}
                                                </Button>
                                            </motion.div>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Notification */}
                {notification.show && (
                    <Box
                        sx={{
                            position: "fixed",
                            bottom: 32,
                            right: 32,
                            zIndex: 9999,
                            minWidth: 300,
                        }}>
                        <Alert
                            severity={notification.type}
                            onClose={() =>
                                setNotification((prev) => ({
                                    ...prev,
                                    show: false,
                                }))
                            }
                            sx={{
                                backgroundColor:
                                    notification.type === "success"
                                        ? "#10b98133"
                                        : "#ef444433",
                                backdropFilter: "blur(10px)",
                                border: `1px solid ${
                                    notification.type === "success"
                                        ? "#10b98180"
                                        : "#ef444480"
                                }`,
                                borderRadius: 2,
                                "& .MuiAlert-message": {
                                    color: colors.text.primary,
                                },
                                "& .MuiAlert-icon": {
                                    color:
                                        notification.type === "success"
                                            ? "#10b981"
                                            : "#ef4444",
                                },
                            }}>
                            {notification.message}
                        </Alert>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default Contact;
