import React from "react";
import { Logo } from "../Logo";

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="home-page">
          <div className="home-page-left">
            <Logo />
            <h1>Choose your entertainment category</h1>
            <div className="selected-category">
              <div>
                romance
              </div>
              <div>
                sad
              </div>
              <div>
                film
              </div>
            </div>
          </div>
          <div className="home-page-right">njskjdcns csjn kcj</div>
        </div>
      </div>
    </>
  );
};

