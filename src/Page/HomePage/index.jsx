import React from "react";
import { Logo } from "../Logo";
import { Card } from "../../Component/Card";
import { cardData } from "../../Component/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
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
              <div className="sub-category">
                <span>romance</span>
                <FontAwesomeIcon
                  icon={faXmark}
                  beat
                />
              </div>
              <div className="sub-category">
                <span>Action</span>
                <FontAwesomeIcon
                  icon={faXmark}
                  beat
                />
              </div>
              <div className="sub-category">
                <span>Music</span>
                <FontAwesomeIcon
                  icon={faXmark}
                  beat 
                />
              </div>
            </div>
          </div>
          <div className="home-page-right">
            {cardData.map(
              (item, index) => (
                console.log(item, "index++"),
                (
                  <Card
                    key={index}
                    title={item.title}
                    image={item.image}
                    bgColor={item.bgColor}
                  />
                )
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
