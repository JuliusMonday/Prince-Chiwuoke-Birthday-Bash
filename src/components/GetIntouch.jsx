import React from 'react'
import "./GetIntouch.css"
const GetIntouch = () => {
  return (
    <div className="get-intouch-container">
        <div className="get-intouch-sub-container containerWrapper">
            <div className="left-section">
                <div className="text1">Get In Touch</div>
                <h1>
                Have Questions or Want to RSVP?
                </h1>
                <p className='below-txt'>Available 24/7<br/>
                Feel free to reach out anytime. We're here to help!</p>
            </div>
            <div className="right-section">
                <h2>Wanna Have Call With Us?</h2>
                <p>
                    Call Us at:<br/>
                    <a href="tel:07068209902">07068209902</a>
                </p>
                <div className="below-txt2">
                    <h2>Want to Email Us?</h2>
                    <p>
                        Email Us at:<br/>
                        <a href="mailto:liftedstone@gmail.com">liftedstone@gmail.com</a>
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default GetIntouch