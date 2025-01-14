import React from "react";

export const Card = ({ title, image, bgColor, onClick, isSelected }) => {
  return (
    <>
      <div
        className="card"
        onClick={onClick}
      >
        <div className={`card-body ${isSelected ? "selected-card" : ""}`} style={{ background: bgColor ,border: isSelected ? "4px solid #20cd0f" : "1px solid #ccc", }}>
          <h5 className="card-title">{title}</h5>
          <img src={image} alt={title} className="card-img" />
        </div>
      </div>
    </>
  );
};
