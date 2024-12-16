import React from 'react';
import './MyStories.css'; // Import the CSS file
import CareerHighlightsPhoto from "../assets/mainPhotos/picture4.jpeg"; // Replace with your image path

const CareerHighlights = () => {
  return (
    <div className="my-story-container my-story-career-highlights">
      <div className="my-story-sub-container">
        <div className="my-story-image">
          <img src={CareerHighlightsPhoto} alt="Career Highlights" className='image-radius'/>
        </div>
        <div className="my-story-content">
          <h2>Career Highlights</h2>
          <p>
            After my secondary school at Okemesi Grammar School, Okemesi Ekiti, in Ekiti State, where I wrote my WAEC/GCE, I got admitted into the Enugu State University of Science and Technology, where I studied Banking and Finance. This period was crucial as I developed a passion for finance and economics. Two years later, I returned to the University of Nigeria to pursue an MBA in Finance, where I honed my skills and expanded my knowledge in the financial sector. During my academic journey, I participated in various workshops and internships that provided me with practical experience and networking opportunities. As Colossians 3:23 encourages, "Whatever you do, work heartily, as for the Lord and not for men."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerHighlights;
