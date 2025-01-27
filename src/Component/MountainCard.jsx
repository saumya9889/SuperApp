import React , { useState, useEffect } from "react";
import Mountain from "../assets/images/mountain.png";

 export const MountainCard = () => {
    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
          setDateTime(new Date());
        }, 1000); 
    
        return () => clearInterval(interval); 
      }, []);

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={Mountain} 
          alt="Mount Everest"
        />
      </div>
      <div className="card-content">
        <div className="card-overlay">
          <h2>Want to climb Mount Everest?</h2>
          <p> {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}</p>
        </div>
        <div className="card-text">
          <p>
            In the years since human beings first reached the summit of Mount
            Everest in 1953, climbing the world’s highest mountain has changed
            dramatically. Today, hundreds of mountaineers manage the feat each
            year thanks to improvements in knowledge, technology, and the
            significant infrastructure provided by commercially guided
            expeditions that provide a veritable highway up the mountain for
            those willing to accept both the......
          </p>
        </div>
      </div>
    </div>
  );
};


