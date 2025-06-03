import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import "../style/Join.css";

const Join = () => {
  const [email, setEmail] = useState("");
  const [welcome, setWelcome] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setWelcome(false);

    try {
      if (email && emailValidation.test(email)) {
        await emailjs.send(
          "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
          "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
          {
            to_email: "maynader08@gmail.com",
            from_email: email,
            message: `New contact request from: ${email}`,
          },
          "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
        );

        setWelcome(true);
        setEmail("");
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Failed to send email:", err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="join-container"
      id="join"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="left-join">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <hr />
          <div>
            <span>Ready To </span>
            <span className="outline-text">
              Level Up <span>?</span>
            </span>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="right-join"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <form action="submit" onSubmit={sendEmail} className="email-container">
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              className={error ? "error" : ""}
            />
          </div>
          <motion.button
            className="btn btn-join"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Get in touch"}
          </motion.button>
        </form>
        <AnimatePresence mode="wait">
          {welcome && !error && (
            <motion.p
              className="message success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faCheckCircle} className="message-icon" />
              Thank you for your interest! <br /> I look forward to working with
              you.
            </motion.p>
          )}
          {error && !welcome && (
            <motion.p
              className="message error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="message-icon"
              />
              Please enter a valid email address.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Join;
