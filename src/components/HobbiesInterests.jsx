import React from 'react';
import './MyStories.css'; // Import the CSS file
import HobbiesInterestsPhoto from "../assets/mainPhotos/picture18.jpeg"; // Replace with your image path

const HobbiesInterests = () => {
  return (
    <div className="my-story-container my-story-hobbies-interests">
      <div className="my-story-sub-container">
        <div className="my-story-content">
          <h2>Hobbies & Interests</h2>
          <p>
            I think I am a good friend, a go-getter, and a disciple of Jesus Christ. I strive to follow God and His tenets, continuously forging on to know Him and the power of His resurrection, and the fellowship of His sufferings. In my spare time, I enjoy reading, engaging in community service, and exploring new hobbies, including photography and cooking. These activities not only provide relaxation but also allow me to express my creativity. Philippians 4:13 resonates with me: "I can do all things through him who strengthens me."
          </p>
        </div>
        <div className="my-story-image">
          <img src={HobbiesInterestsPhoto} alt="Hobbies & Interests" className='image-radius' />
        </div>
      </div>
    </div>
  );
};

export default HobbiesInterests;
