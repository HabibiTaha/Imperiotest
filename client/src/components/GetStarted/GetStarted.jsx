import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with ImperioPM</span>
          <span className="secondaryText">
            Choose us and Find or manage your property
            <br />
            Find your dream home soon!
          </span>
          <button className="button" href>
            <a href="mailto:kumarpraduman904@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
