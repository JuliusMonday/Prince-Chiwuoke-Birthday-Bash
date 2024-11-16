import React, { useEffect, useState } from 'react';
import './MapSection.css';

const MapSection = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    // Check if Geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const specificLocation = "Ubonikam, Onicha Ezinihitte, Mbaise, Imo State";

  return (
    
    <div className="map-container">
      <div className="text-section">
        <h2>Find Us Here</h2>
        <p>Navigate to the venue using the interactive map by  the right. We look forward to seeing you!</p>
        <p>{specificLocation}</p>
      </div>
      <div className="map">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(specificLocation)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Open in Google Maps</button>
        </a>
        {location.lat && location.lng && (
          <div>
            <br/>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Open Your Location in Google Maps</button>
            </a>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default MapSection;