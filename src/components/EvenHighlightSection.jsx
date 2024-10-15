import React from 'react'
import EventPics from "../assets/highlight-image1.jpeg"
import { FaHeart } from 'react-icons/fa';
import "./EventHighlightSection.css"
const EvenHighlightSection = () => {
  return (
    <>
       <div className="highlight-section">
       <div className="highlight-container containerWrapper">
            <div className="content-highlight">
                <h2>Event Highlights</h2>
                <p>Discover the exciting highlights of Uncle John's milestone birthday and wedding anniversary celebration. From heartwarming speeches to fun activities, there's something for everyone!</p>
                <button className="discover-more-btn">
                    Discover More
                    
                    <span className="heart-count"> 123</span>
                    <span className="heart-text">Love</span>
                    <span className="heart-text">s </span>
                    <FaHeart className="heart-icon"/>
                </button>
            </div>
            <div className="picture-section">
                <div className="image-div">
                    <img src={EventPics} alt="Event picture" className='event-img' />
                </div>
                <div className="bottom-box">
                    <FaHeart  className="love-icon"/>
                    <h2 className="bottom-box-header">100+</h2>
                    <p className="bottom-box-p">Guests joining the celebration</p>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default EvenHighlightSection;
