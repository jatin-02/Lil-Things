import React from "react";
import "./style.css";
import LogoSearch from "./../LogoSearch/LogoSearch";
import FollowersCard from "./../FollowersCard/FollowersCard";
import InfoCard from "./../InfoCard/InfoCard";

const ProfileLeft = () => {
  return (
    <div className="profileLeft">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
