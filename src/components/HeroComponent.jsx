import React from 'react'
import "./HeroComponent.css"
import { FaArrowRight } from 'react-icons/fa';
import heroPhoto from "../assets/heroImage1.jpeg"
const HeroComponent = () => {
  return (
    <div className='hero-component-cont containerWrapper'>
      <div className="hero-content">
        <p className="header-text">
          <span className='green-txt'>Welcome</span> to Prince Chiwuoke Grand <span className='green-txt'>Celebration!</span>
        </p>
        <p className="sub-text">Join us in celebrating a momentous occasion filled with joy, love, and cherished memories. Let's make this day unforgettable together!</p>
        <div className="hero-btns">
          <button className="hero-button1">
            <a href="/rsvp">Explore The Celebration</a>
          </button>
          <button className="hero-button2">
            <a href="/about">Learn more About Prince Chiwuoke <FaArrowRight className='hero-arrow'/> </a>
          </button>
        </div>
      </div>
      <div className="hero-photo">
        <img src={heroPhoto} alt="Prince Chiwuoke Grand Celebration" className='image-hero'/>
      </div>
    </div>
  )
}

export default HeroComponent
