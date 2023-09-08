import React from "react";
import logoFindy from "../../../assets/navBar-icons/LOGOLOGO 3.png"
import notifications from "../../../assets/navBar-icons/likes.svg"
import chats from "../../../assets/navBar-icons/chats.svg"
import './styles/Home.scss'

const HeaderHome = () => {
  return (
    <div className="logo-notifications-container">
      <figure className="logo">
        <img src={logoFindy} alt="logoFindy" />
      </figure>
      <figure className="notifications">
        <img src={notifications} alt="notifications" />
        <img src={chats} alt="" />
      </figure>
    </div>
  );
};

export default HeaderHome;
