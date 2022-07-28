import React from "react";
import "./style.css";
import ProfileLeft from "./../../components/ProfileLeft/ProfileLeft";
import ProfileCard from "./../../components/ProfileCard/ProfileCard";
import Posts from "./../../components/Posts/Posts";
import PostShare from "./../../components/PostShare/PostShare";
import RightCol from "./../../components/RightCol/RightCol";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />

      <div className="profileCenter">
        <ProfileCard />
        <PostShare />
        <Posts />
      </div>

      <RightCol />
    </div>
  );
};

export default Profile;
