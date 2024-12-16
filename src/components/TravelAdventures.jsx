import React from 'react';
import './MyStories.css'; // Import the CSS file
import TravelAdventuresPhoto from "../assets/mainPhotos/picture8.jpeg";

const TravelAdventures = () => {
  return (
    <div className="my-story-container my-story-travel-adventures">
      <div className="my-story-sub-container">
        <div className="my-story-image">
          <img src={TravelAdventuresPhoto} alt="Travel Adventures" className='image-radius' />
        </div>
        <div className="my-story-content">
          <h2>Travel Adventures</h2>
          <p>
            After my studies, I settled in Maitama District, Abuja, before traveling abroad to join my wife and soulmate, Mercy Chiwuoke. Our travels have taken us to various countries, enriching our lives with diverse cultures and experiences. We are presently living and working in London, where we continue to explore new places, cuisines, and traditions, making memories that we cherish. As Psalm 121:8 says, "The Lord will keep your going out and your coming in from this time forth and forevermore."
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelAdventures;
