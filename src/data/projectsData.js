/** @format */

import SocialMediaApp from "../assets/images/Social Media App.png";
import SadManga from "../assets/images/SadManga.png";
import IslamicPrayerTimes from "../assets/images/Islamic Prayer Times.png";
import HangmanGame from "../assets/images/Hangman Word Game.png";
import SimpleCalculator from "../assets/images/Simple Calculator.png";
import BootstrapLandingPage from "../assets/images/Bootstrap Landing Page.png";
import WeatherApp from "../assets/images/City Weather App.png";
import Template1 from "../assets/images/HTML & CSS Template 1.png";
import Template2 from "../assets/images/HTML & CSS Template 2.png";

export const projects = [
    {
        id: 1,
        title: "SadManga",
        description:
            "A manga reading website powered by the MangaDex API. Includes search, chapter reading, and responsive design for mobile and desktop.",
        detailedDescription:
            "SadManga is a comprehensive manga reading platform that leverages the MangaDex API to provide users with access to thousands of manga titles. The application features a clean, intuitive interface optimized for both mobile and desktop reading experiences.",
        image: SadManga,
        technologies: ["ReactJS", "API Integration"],
        category: "ReactJS",
        features: [
            "Real-time manga search and filtering",
            "Chapter navigation with bookmark system",
            "Responsive design for all devices",
            "Integration with MangaDex API",
            "Modern React hooks implementation",
            "Optimized image loading for better performance",
        ],
        githubLink: "https://github.com/Marwanatef96/SadManga",
        liveLink: "https://sadmanga-production.up.railway.app/",
        status: "Completed",
        duration: "1 months",
        priority: "high",
        stars: 24,
    },
    {
        id: 2,
        title: "Social Media App",
        description:
            "A responsive social media web app built with HTML, CSS (Bootstrap), and JavaScript. Users can register, log in, create posts, comment, and view profiles.",
        detailedDescription:
            "A full-featured social media application that demonstrates proficiency in vanilla web technologies. Built with modern JavaScript ES6+ features and Bootstrap for responsive design, integrated with Tarmeez Academy API for backend functionality.",
        image: SocialMediaApp,
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "API"],
        category: "JavaScript",
        features: [
            "User authentication and registration",
            "Create, edit, and delete posts",
            "Comment system with real-time updates",
            "User profile management",
            "Responsive Bootstrap UI",
            "RESTful API integration",
            "Image upload functionality",
        ],
        githubLink:
            "https://github.com/Marwanatef96/Social-Media-Web-Application",
        liveLink: "https://superlative-mermaid-010ae0.netlify.app/homepage",
        status: "Completed",
        duration: "2 weeks",
        priority: "high",
        stars: 18,
    },
    {
        id: 3,
        title: "Islamic Prayer Times",
        description:
            "Displays Islamic prayer times using a public API. Built with vanilla JavaScript and styled with modern UI techniques.",
        detailedDescription:
            "An Islamic prayer times application that helps Muslims stay connected with their daily prayers. Features location-based prayer time calculations and beautiful Islamic-themed UI design.",
        image: IslamicPrayerTimes,
        technologies: ["JavaScript", "API"],
        category: "JavaScript",
        features: [
            "Location-based prayer time calculation",
            "Multiple calculation methods support",
            "Beautiful Islamic-themed interface",
            "Daily prayer notifications",
            "Qibla direction indicator",
            "Multiple language support",
        ],
        githubLink: "https://github.com/Marwanatef96/Islamic-Prayer-Times-",
        liveLink: "https://resonant-puffpuff-9be19f.netlify.app/",
        status: "Completed",
        duration: "2 days",
        priority: "medium",
        stars: 12,
    },
    {
        id: 4,
        title: "City Weather App",
        description:
            "A weather application built with vanilla JavaScript that fetches real-time weather data from a public API based on city name.",
        detailedDescription:
            "A comprehensive weather application that provides current weather conditions, forecasts, and detailed meteorological data for cities worldwide using modern weather APIs.",
        image: WeatherApp,
        technologies: ["JavaScript", "API"],
        category: "JavaScript",
        features: [
            "Real-time weather data fetching",
            "5-day weather forecast",
            "City search with autocomplete",
            "Weather maps integration",
            "Local storage for favorite cities",
            "Responsive design for all devices",
        ],
        githubLink: "https://github.com/Marwanatef96/City-Weather-JS",
        liveLink: "https://resilient-tartufo-44b6f5.netlify.app/",
        status: "Completed",
        duration: "2 days",
        priority: "medium",
        stars: 15,
    },
    {
        id: 5,
        title: "Hangman Word Game",
        description:
            "A fun word guessing game built with JavaScript. Includes multiple categories, lives system, and interactive UI.",
        detailedDescription:
            "An interactive word guessing game that combines entertainment with learning. Features multiple difficulty levels, category-based word selection, and engaging animations.",
        image: HangmanGame,
        technologies: ["JavaScript"],
        category: "JavaScript",
        features: [
            "Multiple word categories",
            "Progressive difficulty levels",
            "Lives and scoring system",
            "Animated hangman graphics",
            "Sound effects and feedback",
            "High score tracking",
        ],
        githubLink: "https://github.com/Marwanatef96/HangMan-Word-Game-with-JS",
        liveLink: "https://silver-kitsune-6b2da1.netlify.app/",
        status: "Completed",
        duration: "2 days",
        priority: "low",
        stars: 8,
    },
    {
        id: 6,
        title: "Simple Calculator",
        description:
            "A basic calculator built with HTML, CSS, and JavaScript. Supports standard arithmetic operations.",
        detailedDescription:
            "A clean and functional calculator application demonstrating fundamental web development skills with modern JavaScript and CSS styling techniques.",
        image: SimpleCalculator,
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "JavaScript",
        features: [
            "Basic arithmetic operations",
            "Memory functions",
            "Keyboard input support",
            "History of calculations",
            "Responsive button layout",
            "Error handling and validation",
        ],
        githubLink: "https://github.com/Marwanatef96/Simple-Calculator-with-JS",
        liveLink: "https://moonlit-cheesecake-bb45e7.netlify.app/",
        status: "Completed",
        duration: "1 day",
        priority: "low",
        stars: 5,
    },
    {
        id: 7,
        title: "Bootstrap Landing Page",
        description:
            "A modern landing page template built using HTML, CSS, Bootstrap, and JavaScript.",
        detailedDescription:
            "A professional landing page template showcasing modern web design principles with Bootstrap framework, featuring smooth animations and responsive design.",
        image: BootstrapLandingPage,
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        category: "CSS",
        features: [
            "Responsive Bootstrap grid system",
            "Smooth scrolling navigation",
            "Contact form with validation",
            "Modern CSS animations",
            "Cross-browser compatibility",
            "SEO-optimized structure",
        ],
        githubLink:
            "https://github.com/Marwanatef96/HTML-CSS-project-3-using-Bootstrap-and-js",
        liveLink: "https://beamish-cuchufli-820bc6.netlify.app/",
        status: "Completed",
        duration: "1 day",
        priority: "medium",
        stars: 10,
    },
    {
        id: 8,
        title: "HTML & CSS Template 2",
        description:
            "A clean and modern responsive template built using HTML and CSS. Focused on layout and typography.",
        detailedDescription:
            "A sophisticated template demonstrating advanced CSS techniques including Flexbox, Grid, and modern layout methods with emphasis on typography and visual hierarchy.",
        image: Template2,
        technologies: ["HTML", "CSS"],
        category: "CSS",
        features: [
            "CSS Grid and Flexbox layouts",
            "Custom CSS animations",
            "Typography-focused design",
            "Mobile-first responsive approach",
            "CSS custom properties (variables)",
            "Semantic HTML structure",
        ],
        githubLink: "https://github.com/Marwanatef96/HTML_CSS_Template_2",
        liveLink: "https://vermillion-tiramisu-2f0847.netlify.app/",
        status: "Completed",
        duration: "1 day",
        priority: "low",
        stars: 6,
    },
    {
        id: 9,
        title: "HTML & CSS Template 1",
        description:
            "A beginner-friendly HTML and CSS project that focuses on structuring layouts and styling elements.",
        detailedDescription:
            "A foundational template project demonstrating core HTML and CSS concepts including layout techniques, styling methodologies, and responsive design principles.",
        image: Template1,
        technologies: ["HTML", "CSS"],
        category: "CSS",
        features: [
            "Semantic HTML5 structure",
            "CSS Flexbox layouts",
            "Responsive media queries",
            "CSS transitions and hover effects",
            "Clean and minimal design",
            "Cross-browser tested",
        ],
        githubLink: "https://github.com/Marwanatef96/HTML_CSS_Template_1",
        liveLink: "https://graceful-piroshki-337e6a.netlify.app/",
        status: "Completed",
        duration: "1 day",
        priority: "low",
        stars: 4,
    },
];

export const filterOptions = ["All", "ReactJS", "JavaScript", "CSS"];
