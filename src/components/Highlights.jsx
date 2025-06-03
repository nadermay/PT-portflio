import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "../style/Highlights.css";

const Highlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const highlights = [
    {
      title: "Body Sculpting",
      description:
        "Transform your physique with targeted training programs designed to build lean muscle and enhance your natural shape.",
      icon: "💪",
      color: "var(--purple)",
    },
    {
      title: "Cardio Training",
      description:
        "Boost your endurance and heart health with dynamic cardio workouts that keep you energized and fit.",
      icon: "❤️",
      color: "var(--glow-shadow-purple)",
    },
    {
      title: "Military Cardio",
      description:
        "Challenge yourself with high-intensity military-style training that builds strength, discipline, and mental toughness.",
      icon: "🎯",
      color: "var(--glow-shadow-purple-plan)",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <motion.div
      className="highlights-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="highlights-header">
        <span className="outline-text">Specialized</span>
        <span>Training Programs</span>
      </div>

      <div className="highlights-content">
        <div className="highlights-tabs">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className={`highlight-tab ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderColor:
                  activeIndex === index ? highlight.color : "transparent",
                backgroundColor:
                  activeIndex === index
                    ? "rgba(151, 11, 25, 0.1)"
                    : "transparent",
              }}
            >
              <span className="highlight-icon">{highlight.icon}</span>
              <span className="highlight-title">{highlight.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="highlight-details"
          key={activeIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>{highlights[activeIndex].description}</p>
          <Link
            to="programs"
            spy={true}
            smooth={true}
            className="learn-more-btn"
            style={{ backgroundColor: highlights[activeIndex].color }}
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Highlights;
