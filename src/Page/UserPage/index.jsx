import React from "react";
import Profile from "../../assets/images/profile.png";

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
                <h1>John Doe</h1>
                <p>Email</p>
                <p>username</p>
                 <span className="interest">Horror</span>
                 <span className="interest">Music</span>
                 <span className="interest">Thriller</span>
                 <span className="interest">Fiction</span>
              </div>
            </div>
            <div className="weather"></div>
          </div>
          <div className="user-page-right"></div>
        </div>
      </div>
    </>
  );
};
