import React from "react";
import { CardPost } from "./CardPost";
import { PostGrid } from "./PostGrid";

export const BodyProfile = () => {
  return (
    <>
      <div className="body-conteiner">
        <div className="nav-bar-conteiner">
          <ul className="nav-bar">
            <li>Photos</li>
            <li>Videos</li>
            <li>Album</li>
            <li>Tag</li>
          </ul>
        </div>
        <div className="posts-conteiner">
          <PostGrid />
        </div>
      </div>
    </>
  );
};
