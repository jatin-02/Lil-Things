import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./style.css";

const CenterCol = () => {
  return (
    <div className="centerCol">
      <PostShare />
      <Posts />
    </div>
  );
};

export default CenterCol;
