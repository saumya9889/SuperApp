import React, { useContext, useState } from "react";
import { NewsFeed } from "../../Component/NewsFeed";
import WeatherCard from "../../Component/WeatherCard";
import { UserContext } from "../../Component/UserContext";
import { ProfileCard } from "../../Component/ProfileCard";

export const UserNote = () => {
  const { user, userSelect } = useContext(UserContext);
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  console.log("UserNote - User Data:", user);
  console.log("UserNote - User Select Data:", userSelect);
  return (
    <>
      <div className="container">
        <div className="user-note">
          <div className="usernote-content-left">
            <div className="usernote-content-left-top">
              <div className="usernote-content-left-top-left">
                <div className="profile-usernote">
                  <ProfileCard className="custom-profile" />
                  {/* <ProfileCard user={user} userSelect={userSelect} /> */}
                </div>
                <div className="weather-usernote">
                  <WeatherCard className="custom-weather" />
                </div>
              </div>
              <div className="usernote-content-left-top-right">
                <div className="usernote-wrap-head">
                  <h1 className="usernote-head">All Notes</h1>
                </div>
                <div className="usernote-wrap-textarea">
                  <textarea
                    className="usernote-textarea"
                    placeholder="Write your note here"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="usernote-content-left-bottom">
              <div className="music-player-wrapper">
                <div className="music-player"></div>
                <div className="timer">
                  <p>
                    {/* {time.hours} : {time.minutes} : {time.seconds} */}
                    {String(time.hours).padStart(2, "0")}:
                    {String(time.minutes).padStart(2, "0")}:
                    {String(time.seconds).padStart(2, "0")}
                  </p>
                </div>
              </div>

              <div className="time-inputs">
                {["Hours", "Minutes", "Seconds"].map((unit, index) => (
                  <div key={unit} className="time-unit">
                    <span className="label">{unit}</span>
                    <button
                      className="arrow-btn"
                      onClick={() =>
                        setTime((prev) => ({
                          ...prev,
                          [unit.toLowerCase()]: Math.min(
                            prev[unit.toLowerCase()] + 1,
                            59
                          ),
                        }))
                      }
                    >
                      ▲
                    </button>
                    <span className="time-value">
                      {String(time[unit.toLowerCase()]).padStart(2, "0")}
                    </span>
                    <button
                      className="arrow-btn"
                      onClick={() =>
                        setTime((prev) => ({
                          ...prev,
                          [unit.toLowerCase()]: Math.max(
                            prev[unit.toLowerCase()] - 1,
                            0
                          ),
                        }))
                      }
                    >
                      ▼
                    </button>
                    {index < 2 && <span className="colon">:</span>}
                  </div>
                ))}
                <button className="start-btn">START</button>
              </div>
            </div>
          </div>
          <div className="usernote-content-right">
            <NewsFeed className="custom-newsfeed" />
          </div>
          <button className="browse-btn" >Browse</button>
        </div>
      </div>
    </>
  );
};
