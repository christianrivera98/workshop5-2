import React from "react";
import "./Profile.scss";

export const CardPost = ({imageURL, id}) => {
  return (
    <div className="card">
      <img src={imageURL} alt={id} />
    </div>
  );
};
