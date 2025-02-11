import React from "react";
import WeatherCard from "../../Component/WeatherCard";
import { NewsFeed } from "../../Component/NewsFeed";
import { useNavigate } from "react-router-dom";
import { ProfileCard } from "../../Component/ProfileCard";


export const UserPage = () => {
  const navigate = useNavigate(); 
  return (
    <div className="container">
      <div className="user-page">
        <div className="user-page-left">
           <ProfileCard  />
           
          {/* Weather */}
          <div className="weather">
            <WeatherCard />
          </div>
        </div>

        <div className="user-page-right">
          <div className="right-card-content">
            <h2>Top Headlines</h2>
            <NewsFeed />
          </div>
        </div>
        <button className="explore-btn" onClick={() => navigate("/usernote")}>Explore More</button>
      </div>
    </div>
  );
};
