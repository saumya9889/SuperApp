import React, { useState, useContext } from "react";
import { Logo } from "../Logo";
import { Card } from "../../Component/Card";
import { cardData } from "../../Component/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Component/UserContext";

const HomePage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();
  const { user, setUser, setUserSelect } = useContext(UserContext); // Access context functions

  // Function to handle card selection
  const handleCardClick = (title) => {
    if (!selectedCategories.includes(title)) {
      setSelectedCategories([...selectedCategories, title]);
    }
  };

  // Function to remove a selected category
  const handleRemoveCategory = (title) => {
    setSelectedCategories(selectedCategories.filter((category) => category !== title));
  };

  // Function to navigate to the next page
  const handleNextPage = () => {
    const updatedUser = {
      ...user, // Preserve existing user details
      choices: selectedCategories, // Add selected categories
    };

    // Save updated data to context and local storage
    setUserSelect({ choices: selectedCategories }); // Update choices in context
    localStorage.setItem("userData", JSON.stringify(updatedUser)); // Save full user data in local storage

    navigate("/user"); // Navigate to the /user route
  };

  return (
    <>
      <div className="container">
        <div className="home-page">
          <div className="home-page-left">
            <Logo />
            <h1>
              Choose your
              <br /> entertainment
              <br /> category
            </h1>

            <div className="selected-category">
              {selectedCategories.length > 0 ? (
                selectedCategories.map((category, index) => (
                  <div className="sub-category" key={index}>
                    <span>{category}</span>
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{ cursor: "pointer", color: "#63E6BE" }}
                      onClick={() => handleRemoveCategory(category)}
                    />
                  </div>
                ))
              ) : (
                <p>No categories selected.</p>
              )}
            </div>

            {/* Show minimum categories required message */}
            {selectedCategories.length < 3 && (
              <p style={{ color: "red", marginTop: "10px" }}>
                Minimum 3 categories are required!
              </p>
            )}
          </div>

          <div className="home-page-right">
            {cardData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                image={item.image}
                bgColor={item.bgColor}
                isSelected={selectedCategories.includes(item.title)} // Pass isSelected prop
                onClick={() => handleCardClick(item.title)} // Handle card click
              />
            ))}
          </div>

          {/* Conditionally render the Next Page button */}
          {selectedCategories.length >= 3 && (
            <button className="btn" onClick={handleNextPage}>
              Next Page
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
