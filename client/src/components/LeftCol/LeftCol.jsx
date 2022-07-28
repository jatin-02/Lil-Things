import React from "react";
import "./style.css";

import LogoSearch from "./../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "./../FollowersCard/FollowersCard";

const LeftCol = () => {
  return (
    <div className="leftCol">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default LeftCol;
