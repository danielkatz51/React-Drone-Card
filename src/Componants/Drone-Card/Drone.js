import React, { useState } from "react";
import "./Drone.css";
import drone from "./images/Drone.png";
import drone2 from "./images/Drone2.png";
import drone3 from "./images/Drone3.png";

export default function Drone() {
  //mouse state bool
  const [mouseHover, setMouseHover] = useState(true);
  //changing state function
  function mouseEnterHandler() {
    setMouseHover(!mouseHover);
  }

  return (
    <div
      className="card"
      //when mouse entering to the card changing the state
      onMouseEnter={mouseEnterHandler}
      //when mouse Leaving to the card changing the state
      onMouseLeave={mouseEnterHandler}
    >
      <div className="images-box">
        <img
          src={mouseHover ? drone : drone2}
          alt="card"
          className={mouseHover ? "img" : "img2"}
        />
        <img
          src={drone3}
          alt="drone3"
          className={`img3 ${mouseHover ? "hide" : ""}`}
        />
      </div>
      <div className="lower-box">
        <h1 className="header">Dji Mavic Air 2S</h1>
        <p className="desc">
          The DJI Mavic Air 2S is a highly portable, feature-packed drone with a
          4K camera, 3-axis gimbal, and advanced obstacle avoidance technology
          for capturing stunning aerial footage and photos.
        </p>
        <button className="button">purchase</button>
      </div>
    </div>
  );
}
