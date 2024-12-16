import React from 'react';
import './MyStories.css'; // Import the CSS file
import FamilyMomentsPhoto from "../assets/mainPhotos/picture20.jpeg"; // Replace with your image path

const FamilyMoments = () => {
  return (
    <div className="my-story-container my-story-family-moments">
      <div className="my-story-sub-container">
        <div className="my-story-content">
          <h2>Family Moments</h2>
          <p>
            I married my childhood friend, who is now my lifelong friend, confidant, and wife, Mercy Chiwuoke, while I was doing my master's degree program. Our wedding was a beautiful celebration of love and unity, surrounded by family and friends. We are blessed with three amazing children: Awesome, Excel, and Cristal, who bring joy and purpose to our lives. Family moments are precious to us, whether it's celebrating birthdays, holidays, or simply enjoying quiet evenings together at home. As Psalm 127:3 reminds us, "Children are a heritage from the Lord, offspring a reward from him."
          </p>
        </div>
        <div className="my-story-image">
          <img src={FamilyMomentsPhoto} alt="Family Moments" className='image-radius'/>
        </div>
      </div>
    </div>
  );
};

export default FamilyMoments;
