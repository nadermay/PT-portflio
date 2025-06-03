import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faMedal,
  faUserGraduate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "../style/About.css";

const About = () => {
  const certifications = [
    {
      title: "NASM Certified Personal Trainer",
      icon: faDumbbell,
      description: "Expert in exercise science and program design",
    },
    {
      title: "Precision Nutrition Level 1 Coach",
      icon: faHeart,
      description: "Specialized in nutrition planning and meal preparation",
    },
    {
      title: "CrossFit Level 2 Trainer",
      icon: faMedal,
      description: "Advanced functional training and conditioning",
    },
    {
      title: "First Aid & CPR Certified",
      icon: faUserGraduate,
      description: "Ensuring safe and effective training sessions",
    },
  ];

  const achievements = [
    "Helped 100+ clients achieve their fitness goals",
    "Specialized in weight loss and muscle gain",
    "Expert in nutrition planning and meal preparation",
    "Experience with sports-specific training",
  ];

  const handleResumeClick = () => {
    window.open(process.env.PUBLIC_URL + "/PT cv without pic.pdf", "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="about-section" id="about">
      {/* color gradient */}
      <div className="blur about-blur-left"></div>
      <div className="blur about-blur-right"></div>

      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="outline-text">About</span> Me
          </motion.h2>

          <motion.div
            className="about-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div className="about-text" variants={itemVariants}>
              <motion.p
                className="bio"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                With over 5 years of experience in the fitness industry, I've
                dedicated my career to helping people transform their lives
                through proper training and nutrition. My approach combines
                scientific principles with practical, sustainable methods that
                deliver real results.
              </motion.p>

              <motion.div className="expertise" variants={itemVariants}>
                <h3>Areas of Expertise</h3>
                <ul>
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.05, x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div className="certifications" variants={itemVariants}>
              <h3>Certifications</h3>
              <div className="cert-grid">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="cert-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FontAwesomeIcon icon={cert.icon} className="cert-icon" />
                    <h4>{cert.title}</h4>
                    <p>{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="cta-container" variants={itemVariants}>
            <motion.button
              className="cta-button"
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Full Resume
            </motion.button>

            <motion.button
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
