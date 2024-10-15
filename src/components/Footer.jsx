import React from 'react'
import "./Footer.css"
import { FaTwitter, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="footer-sub-sec">
        <div className="navigations">
            <h3 className="items">About Uncle John</h3>
            <h3 className="items">Event Highlights</h3>
            <h3 className="items">Photo Gallery</h3>
            <h3 className="items">Send Wishes</h3>
            <h3 className="items">Contact Us</h3>
        </div>
        <div className="socials">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
            </a>
        </div>
        <div className="copyright">
            <p>© 2024 Prince Chiwuoke Grand Celebration. All Rights Reserved. Designed By JuTeLabs</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
