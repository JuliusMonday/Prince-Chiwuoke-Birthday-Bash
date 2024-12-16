import React from 'react';
import './MyStories.css'; // Import the CSS file
import CommunityImpactPhoto from "../assets/mainPhotos/picture8.jpeg"; // Replace with your image path

const CommunityImpact = () => {
  return (
    <div className="my-story-container my-story-community-impact">
      <div className="my-story-sub-container">
        <div className="my-story-image">
          <img src={CommunityImpactPhoto} alt="Community Impact" className='image-radius'/>
        </div>
        <div className="my-story-content">
          <h2>Community Impact</h2>
          <p>
            I believe in giving back to the community and making a positive impact wherever I go. Whether through volunteering, mentoring young individuals, or supporting local initiatives, I am committed to contributing to the well-being of those around me. As Matthew 5:16 states, "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven." My story continues unabated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityImpact;
