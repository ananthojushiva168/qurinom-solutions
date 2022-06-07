import React from "react";

import "./App.css";

import Footer from "./Components/Footer";
import FreeAccount from "./Components/FreeAccount";
import HIW from "./Components/HIW";
import HappyShowCase from "./Components/HappyShowCase";
import Display from "./Components/Display";
import LetShowCase from "./Components/LetShowCase";
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage";
const Landing = () => {

  return (
    <>
      <NavBar />
      
      <LetShowCase />
      <MainPage />
      <HappyShowCase />
      <Display />
      <HIW />
      <FreeAccount />
      <Footer />
    </>
  );
};

export default Landing;
