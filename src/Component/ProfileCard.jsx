import React, { useContext, useEffect } from "react";
import { UserContext } from "../Component/UserContext";
import Profile from "../assets/images/profile.png";

export const ProfileCard = () => {
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
    <>
      <div className="profile-card">
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
      </div>
    </>
  );
};
