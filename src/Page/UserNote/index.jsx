import React, { useContext } from "react";
import { NewsFeed } from "../../Component/NewsFeed";
import WeatherCard from "../../Component/WeatherCard";
import { UserContext } from "../../Component/UserContext";
import { ProfileCard } from "../../Component/ProfileCard";

export const UserNote = () => {
  const { user, userSelect } = useContext(UserContext);

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
                    placeholder="Write your note here"></textarea>
                </div>
              </div>
            </div>
            <div className="usernote-content-left-bottom">
              <div className="music-player"></div>
              <div className="music-wrapper-table"></div>
            </div>
          </div>
          <div className="usernote-content-right">
            <NewsFeed className="custom-newsfeed" />
          </div>
        </div>
      </div>
    </>
  );
};
