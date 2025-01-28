import React, { useContext, useEffect } from "react";
import Profile from "../../assets/images/profile.png";
import WeatherCard from "../../Component/WeatherCard";
import { UserContext } from "../../Component/UserContext";
import { NewsFeed } from "../../Component/NewsFeed";
import { useNavigate } from "react-router-dom";


export const UserPage = () => {
  const navigate = useNavigate(); 
  const { user, setUser, userSelect, setUserSelect } = useContext(UserContext);

  useEffect(() => {
    // Check if context is empty, fallback to local storage
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      const parsedData = JSON.parse(savedUserData);
      if (!user.name || !user.email || !user.username) {
        setUser({
          name: parsedData.name,
          email: parsedData.email,
          username: parsedData.username,
        });
      }
      if (!userSelect.choices || userSelect.choices.length === 0) {
        setUserSelect({ choices: parsedData.choices });
      }
    }
  }, [user, setUser, userSelect, setUserSelect]);

  if (!user || !userSelect) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="user-page">
        <div className="user-page-left">
          <div className="profile">
            <div className="profile-img">
              <img src={Profile} alt="profile" />
            </div>
            <div className="profile-data">
              <h2>{user.name || "Guest"}</h2>
              <p>{user.email || "No email provided"}</p>
              <h1>{user.username || "Anonymous"}</h1>
              <div className="interests-wrapper">
                {userSelect.choices && userSelect.choices.length > 0 ? (
                  userSelect.choices.map((choice, index) => (
                    <span key={index} className="interest">
                      {choice}
                    </span>
                  ))
                ) : (
                  <p>No interests added yet.</p>
                )}
              </div>
            </div>
          </div>

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
