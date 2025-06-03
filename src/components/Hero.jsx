import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import Headshot from "../assets/imgs/headshot.png";
import "../style/Hero.css";
import Buttons from "./Buttons";
import Highlights from "./Highlights";
import Promo from "./Promo.jsx";

const Hero = () => {
  const transition = { type: "spring", duration: 2 };

  return (
    <div className="hero-container" id="hero">
      {/* color gradient  */}
      <div className="blur hero-blur"></div>
      <div className="left-hero">
        <Promo />
        <Highlights />
        <Buttons />
      </div>
      <div className="right-hero">
        <motion.div
          className="certificate"
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "5rem" }}
        >
          <FontAwesomeIcon icon={faCertificate} className="hero-icon" />
          <span>Certified</span>
          <span>Personal</span>
          <span>Trainer</span>
        </motion.div>
        <motion.img
          src={Headshot}
          alt="Personal trainer headshot"
          className="hero-img"
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "12rem" }}
        />
      </div>
    </div>
  );
};

export default Hero;
