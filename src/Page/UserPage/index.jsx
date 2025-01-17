import React from "react";
import Profile from "../../assets/images/profile.png";
import Mountain from "../../assets/images/mountain.png";

export const UserPage = () => {
  return (
    <>
      <div className="container">
        <div className="user-page">
          <div className="user-page-left">
            <div className="profile">
              <div className="profile-img">
                <img src={Profile} alt="profile" />
              </div>
              <div className="profile-data">
                <h2>John Doe</h2>
                <p>Email</p>
                <h1>username</h1>
                <div className="interests-wrapper">
                  <span className="interest">Horror</span>
                  <span className="interest">Music</span>
                  <span className="interest">Thriller</span>
                  <span className="interest">Fiction</span>
                </div>
              </div>
            </div>
            <div className="weather">
              <div className="weather-time">
                <p className="date">date</p>
                <p className="time">Time</p>
              </div>

              <div className="weather-data">
                <div className="weather-forecast">
                  <icon>nkjn</icon>
                  <p>temp</p>
                </div>
                <div className="weather-temp">
                  <span className="temp">55degrees</span>
                  <div className="temp-pressure">
                    <icon>icon</icon>
                    <span className="pressure">pressure</span>
                  </div>
                </div>

                <div className="weather-humidity">
                  <icon>icon</icon>
                  <span className="humidity">humidity</span>
                  <span className="wind">wind</span>
                </div>
              </div>
            </div>
          </div>
          <div className="user-page-right">
          <div className="right-card-content">
            <img src={Mountain} alt="mountain" />
          </div>
        </div>
        </div>
        
        </div>
        
      
    </>
  );
};
