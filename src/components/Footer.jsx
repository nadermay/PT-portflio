import { faSquareFacebook, faSquareInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-scroll';
import logoFooter from '../assets/imgs/logo-1.png';
import '../style/Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className='footer-wrapper'>
            <div className="footer-icons-wrapper">
                <a href="https://www.instagram.com/nader.maay/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareInstagram} className='footer-icon' /></a>
                <a href="https://www.facebook.com/nader.may.969/?locale=fr_FR" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareFacebook} className='footer-icon' /></a>
                <a href="https://wa.me/+21853275214" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className='footer-icon' /></a>
            </div>
            <div className="footer-logo">
              <Link spy={true} span={'true'} smooth={true} to='hero'><img src={logoFooter} alt="Logo reads CJ Fitness Instructor" /></Link>
            </div>
        </div>
        {/* color gradient */}
        <div className="blur footer-blur-left"></div>
        <div className="blur footer-blur-right"></div>
    </div>
  )
}

export default Footer