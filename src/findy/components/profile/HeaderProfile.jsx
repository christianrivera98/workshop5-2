import React, { useEffect, useState } from "react";
import "./Profile.scss";
import { ButtonsHeader } from "./ButtonsHeader";
import { InfoHeader } from "./InfoHeader";
import { getUsers } from "../../../helpers/getPosts";


const HeaderProfile = () => {
 
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
      const fetchUsersData = async () => {
        const fetchedUsersData = await getUsers();
        setUsersData(fetchedUsersData);
      };
    
      fetchUsersData();
    }, [])
    
    const user = usersData[0] || {};
 
    return (
    <>
      <div className="foto-portada">
        <img
          src= {user.frontpage}
          alt=""
        />
      </div>
      <ButtonsHeader/>
      <InfoHeader user = {user}/>
      
    </>
  );
};

export default HeaderProfile;