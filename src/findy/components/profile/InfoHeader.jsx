import React, { useEffect, useState } from "react";
import "./Profile.scss";
import { useSelector } from "react-redux";

export const InfoHeader = () => {
  
  const {displayName ,photoURL } = useSelector((state) => state.auth);
  
  
    return (
    <>
      <div className="followers-likes">
        <div className="followers">
          <h1>10.7 M</h1>
          <p>Followers</p>
        </div>
        <div className="photo-profile">
          <img
            src={photoURL}
            alt=""
          />
        </div>
        <div className="likes">
          <h1>108.3 M</h1>
          <p>Likes</p>
        </div>
      </div>
      <div className="info">
        <h1>{displayName}</h1>
        <p>J. Hello Guys</p>
        <p>Follow me and like my post</p>
      </div>
      <div className="follow-messages">
        <button className="follow-button">Follow</button>
        <button className="messages-button">Messages</button>
      </div>
    </>
  );
};