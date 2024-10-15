import React from 'react'
import photo1 from "../assets/A Grand Celebration.jpeg"
import photo2 from "../assets/Birthday & Anniversary.jpeg"
import photo3 from "../assets/Celebration of Love.jpeg"
import photo4 from "../assets/Joyful Moments.jpeg"
import photo5 from"../assets/Family Gathering.jpeg"
import photo6 from "../assets/Happiness All Around.jpeg"
import photo7 from "../assets/Party Time.jpeg"
import photo8 from "../assets/Smiling Faces.jpeg"
import photo9 from "../assets/Friends and Fun.jpeg"
import photo10 from "../assets/Celebration of Love.jpeg"
import "./Gallery.css"
const Gallery = () => {
  return (
    <div>
      <div className="photo-container">
        <div className="photo">
            <div className="photo-img">
                <img src={photo1} alt="" srcset="" />
            </div>
            <h3>Family Gathering</h3>
        </div>
        <div className="photo">
            <div className="photo-img">
                <img src={photo2} alt="" srcset="" />
            </div>
            <h3>Joyful Moments</h3>
        </div>
        <div className="photo">
            <div className="photo-img">
                <img src={photo3} alt="" srcset="" />
            </div>
            <h3>Birthday & Anniversary</h3>
        </div>
        <div className="photo">
            <div className="photo-img">
                <img src={photo4} alt="" srcset="" />
            </div>
            <h3>Friends and Fun</h3>
        </div>
        <div className="photo">
            <div className="photo-img">
                <img src={photo5} alt="" srcset="" />
            </div>
            <h3>Celebration of Love</h3>
        </div>
        <div className="photo">
            <div className="photo-img">
                <img src={photo6} alt="" srcset="" />
            </div>
            <h3>Creating Memories</h3>
        </div>
        <div className="photo">
            <div className="photo-img">
                <img src={photo7} alt="" srcset="" />
            </div>
            <h3>Party Time</h3>
        </div>
        <div className="photo">
            <div className="photo-img">
                <img src={photo8} alt="" srcset="" />
            </div>
            <h3>Smiling Faces</h3>
        </div>
        <div className="photo">
            <div className="photo-img">
                <img src={photo9} alt="" srcset="" />
            </div>
            <h3>Happiness All Around</h3>
        </div>
        <div className="photo">
            <div className="photo-img">
                <img src={photo10} alt="" srcset="" />
            </div>
            <h3>A Grand Celebration</h3>
        </div>
      </div>
    </div>
  )
}

export default Gallery
