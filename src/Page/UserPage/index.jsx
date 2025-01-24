import React from "react";
import Profile from "../../assets/images/profile.png";
import Mountain from "../../assets/images/mountain.png";
import WeatherCard from "../../Component/WeatherCard";

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

            {/* weather */}
            <div className="weather">
            <WeatherCard />
              
            </div>
          </div>
          {/* weather end */}
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
