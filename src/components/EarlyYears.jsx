import React from 'react';
import './MyStories.css'; // Import the CSS file
import EarlyYearsPhoto from "../assets/mainPhotos/picture23.jpeg"; // Replace with your image path

const EarlyYears = () => {
  return (
    <div className="my-story-container my-story-early-years">
      <div className="my-story-sub-container">
        <div className="my-story-content">
          <h2>Early Years</h2>
          <p>
            I did my primary school in Community School, Ubonukam, Onicha, Imo State, and Ajeromi Central School, Apapa, Lagos. My siblings and I grew up in Ajegunle, a remote and suburban part of Lagos, where we learned the values of hard work, resilience, and the importance of family. Those formative years were filled with laughter, challenges, and the unwavering support of my parents, who instilled in us the importance of education and integrity. As Proverbs 22:6 says, "Train up a child in the way he should go; even when he is old he will not depart from it."
          </p>
        </div>
        <div className="my-story-image">
          <img src={EarlyYearsPhoto} alt="Early Years" className='image-radius'/>
        </div>
      </div>
    </div>
  );
};

export default EarlyYears;
