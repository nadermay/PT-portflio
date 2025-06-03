import {
  faSquareFacebook,
  faSquareInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-scroll";
import logoFooter from "../assets/imgs/logo-1.png";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link spy={true} smooth={true} to="hero">
                Home
              </Link>
            </li>
            <li>
              <Link spy={true} smooth={true} to="about">
                About
              </Link>
            </li>
            <li>
              <Link spy={true} smooth={true} to="programs">
                Programs
              </Link>
            </li>
            <li>
              <Link spy={true} smooth={true} to="testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link spy={true} smooth={true} to="pricing">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <span>+218 99908239</span>
            </div>
            <div className="contact-item">
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <span>maynader08@gmail.com</span>
            </div>
            <div className="contact-item">
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              <span>Tunisia</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="footer-icons-wrapper">
            <a
              href="https://www.instagram.com/nader.maay/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSquareInstagram}
                className="footer-icon"
              />
            </a>
            <a
              href="https://www.facebook.com/nader.may.969/?locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className="footer-icon"
              />
            </a>
            <a
              href="https://wa.me/+21853275214"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="footer-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-logo">
        <Link spy={true} smooth={true} to="hero">
          <img src={logoFooter} alt="CJ Fitness Instructor" />
        </Link>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Nader Fitness. All rights reserved.
        </p>
      </div>

      {/* Blur effects */}
      <div className="blur footer-blur-left"></div>
      <div className="blur footer-blur-right"></div>
    </div>
  );
};

export default Footer;
