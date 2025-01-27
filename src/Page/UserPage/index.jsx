import React, { useContext } from "react";
import Profile from "../../assets/images/profile.png";
import WeatherCard from "../../Component/WeatherCard";
import { MountainCard } from "../../Component/MountainCard";
import { UserContext } from "../../Component/UserContext";


export const UserPage = () => {
  const { user } = useContext(UserContext);

  
  return (
    <>
      <div className="container">
        <div className="user-page">
          <div className="user-page-left">
             

              {/* <ProfileCard /> */}
            <div className="profile">
              <div className="profile-img">
                <img src={Profile} alt="profile" />
              </div>
              <div className="profile-data">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <h1>{user.username}</h1>
                <div className="interests-wrapper">
                  {user.choices.map((choice, index) => (
                    <span key={index} className="interest">
                      {choice}
                    </span>
                  ))}
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
              <MountainCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
