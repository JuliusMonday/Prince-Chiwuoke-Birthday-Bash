import React from 'react'
import "./InfoSection.css"
const InfoSection = () => {
  return (
    <div className='info-container containerWrapper'>
      <div className="info-items">
            <div className="info-item">
                <h1>50</h1>
                <p>Years Of Love</p>
            </div>
            <div className="info-item">
                <h1>100+</h1>
                <p>Guests Expected</p>
            </div>
            <div className="info-item">
                <h1>Countless</h1>
                <p>Memorable Moments</p>
            </div>
      </div>
      <div className="photo-info">
            <h2>Photo Gallery</h2>
            <p>Take a trip down memory lane with photos from past celebrations and get a sneak peek of what’s to come at <b>Prince Chiwuoke's</b> Grand Celebration.</p>
      </div>
    </div>
  )
}

export default InfoSection
