import React from 'react';
import './MyStory.css'; // Import the CSS file
import MyStoryPhoto from "../assets/mainPhotos/picture13.jpeg"; // Replace with your image path

const MyStory = () => {
  return (
    <div className="my-story-container">
      <div className="my-story-sub-container">
        <div className="my-story-image">
          <img src={MyStoryPhoto} alt="Oparigwe Prince Chiwuoke" className='image-radius no-display'/>
        </div>
        <div className="my-story-content">
          <h2>My Story So Far</h2>
          <p>
            I am Oparigwe Prince Chiwuoke, the first son and second child to Mr. and Mrs. Kate Nwaocha and Ahia David Chiwuoke Njoku, both of blessed memories 💙 (for the memory of the just is blessed, forever). I was born in the Mushin Local Government Area of Lagos State, where my early memories are filled with the vibrant culture and community spirit that shaped my upbringing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyStory;
