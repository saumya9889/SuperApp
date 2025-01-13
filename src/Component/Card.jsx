import React from "react";

export const Card = ({ title, image, bgColor }) => {
  return (
    <>
      <div className="card">
        <div className="card-body" style={{ background: bgColor }}>
          <h5 className="card-title">{title}</h5>
          <img src={image} alt={title} className="card-img" />
        </div>
      </div>
    </>
  );
};
