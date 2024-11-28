import QuotePhoto from "../assets/mainPhotos/picture14.jpeg"
import React from 'react'
import "./Quote.css"
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Quote = () => {
  return (
    <div className="quote-container">
      <div className="quote-sub-container containerWrapper">
        <div className="quote-image">
            <img src={QuotePhoto} alt="quote pics" />
        </div>
        <div className="quote-content">
            <FaQuoteLeft className="quote-icon" />
            <div className="quote-header">
            
                <p>Celebrating Uncle Prince milestones has brought our family closer together. It’s a day filled with love, laughter, and unforgettable memories.</p>
            </div>
            <div className="person">
                <h3>Julius Chimaobi</h3>
                <p>Son</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Quote
