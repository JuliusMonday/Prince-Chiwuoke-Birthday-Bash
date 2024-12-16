import React from 'react';
import './AboutMe.css'; // Import the CSS file
import AboutMephoto from "../assets/mainPhotos/picturelatest1.jpg" 
const AboutMe = () => {
  return (
    <div className="about-me-container">
        <div className="about-me-sub-container">
            <div className="about-me-content">
                <h2>About Me</h2>
                <p>
                I am Oparigwe Prince Chiwuoke, a passionate individual dedicated to personal growth, family values, and community service. Born in Lagos and raised in a loving family, I have always believed in the power of education and faith. My journey has taken me from the classrooms of Nigeria to pursuing higher education in Banking and Finance, culminating in an MBA. Alongside my academic pursuits, I cherish the moments spent with my wife, Mercy, and our three wonderful children. Together, we navigate life's adventures, embracing new cultures and experiences. My faith in Jesus Christ guides my actions, inspiring me to make a positive impact in every community I find myself in. I strive to be a beacon of hope and encouragement to others, believing that with hard work and dedication, we can all achieve our dreams.
                </p>
            </div>
            <div className="about-me-image">
                <img src={AboutMephoto} alt="Oparigwe Prince Chiwuoke" />
            </div>
        </div>
      
    </div>
  );
};

export default AboutMe;
