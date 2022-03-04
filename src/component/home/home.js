import NavBar from "../navbar/navbar";
import React from "react";
import Classes from "../home/home.module.css";

const Home = () => {
  return (
    <div className={Classes.home}>
      <NavBar />
      <h1>This Is Home Screen</h1>
    </div>
  );
};

export default Home;
