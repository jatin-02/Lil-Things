import React from "react";
import "./style.css";
import LeftCol from "../../components/LeftCol/LeftCol";
import CenterCol from "./../../components/CenterCol/CenterCol";
import RightCol from "../../components/RightCol/RightCol";

const Home = () => {
  return (
    <div className="homeContainer">
      <LeftCol />
      <CenterCol />
      <RightCol />
    </div>
  );
};

export default Home;
