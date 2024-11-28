import React from 'react'
import { FaGlassCheers, FaUtensils, FaMusic,FaCalendarCheck  } from 'react-icons/fa';
import clock from "../assets/mainPhotos/picture18.jpeg"
import "./EventDetails.css"
const EventDetails = () => {
  return (
    <div>
    
    <h2 className="event">Event Details</h2>
    <div className='event-details1'>
        <h1>When & Where</h1>
        <div className="details1">
            <p>Date: September 15, 2024</p>
            <p>Time: 6:00 PM - 11:00 PM</p>
            <p>Venue: Njoku's Compound Arugwueze Ubonukam, Onicha Ezinihitte, Mbaise, Imo State</p>
        </div>
        <div className="details2">
            <div className="details-item">
                <h2><span><FaGlassCheers size={30} /></span> Reception</h2>
            </div>
            <div className="details-item">
                <h2><span><FaUtensils size={30} /></span> Dinner</h2>
            </div>
            <div className="details-item">
                <h2><span><FaMusic size={30} /></span> Dance</h2>
            </div>
        </div>
        <div className="details3">
            <p></p>
            <p></p>
            <img src={clock} alt="" srcset="" />
            <div className="calendar"><span><FaCalendarCheck size={30} /></span> Please RSVP by December 26, 2024.</div>
        </div>
    </div>

  </div>
  )
}

export default EventDetails;
