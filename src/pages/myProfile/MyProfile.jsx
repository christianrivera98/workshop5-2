import React from "react";

import "./MyProfile.scss";
import HeaderProfile from "../../findy/components/profile/HeaderProfile";
import { BodyProfile } from "../../findy/components/profile/BodyProfile";

function profile() {
  return (
    <>
      <div className="profile-container">
        <HeaderProfile />
        <BodyProfile />
      </div>
    </>
  );
}

export default profile;
