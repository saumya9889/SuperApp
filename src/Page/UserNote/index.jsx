import React, { useContext, useState, useEffect } from "react";
import { NewsFeed } from "../../Component/NewsFeed";
import WeatherCard from "../../Component/WeatherCard";
import { UserContext } from "../../Component/UserContext";
import { ProfileCard } from "../../Component/ProfileCard";

export const UserNote = () => {
  const { user, userSelect } = useContext(UserContext);
 

  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;

  useEffect(() => {
    let interval;
    if (isRunning && totalSeconds > 0) {
      let remainingTime = totalSeconds;
      interval = setInterval(() => {
        remainingTime--;
        setProgress(((totalSeconds - remainingTime) / totalSeconds) * 100);
        if (remainingTime <= 0) {
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, totalSeconds]);

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
                <div className="music-player">
                <svg className="progress-ring" width="180" height="180">
  {/* Background Circle */}
  <circle
    className="progress-ring-bg"
    cx="90"
    cy="90"
    r="80"
    stroke="rgba(255, 255, 255, 0.2)"
    strokeWidth="8"
    fill="none"
  />
  
  {/* Progress Circle (Red Stroke) */}
  <circle
    className="progress-ring-circle"
    cx="90"
    cy="90"
    r="80"
    stroke="#ff6a6a"
    strokeWidth="8"
    fill="none"
    strokeDasharray="505"   // Full Stroke Length
    strokeDashoffset={isRunning ? (1 - progress / 100) * 471 : 0} 
    style={{
      transition: "stroke-dashoffset 1s linear"
    }}
  />
</svg>

                </div>
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
                <button className="start-btn" onClick={() => setIsRunning(true)}>
        {isRunning ? "RUNNING..." : "START"}
      </button>              </div>
            </div>
          </div>
          <div className="usernote-content-right">
            <NewsFeed className="custom-newsfeed" />
          </div>
          <button className="browse-btn">Browse</button>
        </div>
      </div>
    </>
  );
};
