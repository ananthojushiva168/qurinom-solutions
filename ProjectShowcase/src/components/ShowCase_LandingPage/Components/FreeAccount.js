import React from "react";
import '../App.css'
import ShowCaseVideo from '../Images/showcase.mp4'
const FreeAccount = () => {
  return (
      <>
    <section>
      <div className="container m-sud text-center">
        <h3 className="sud-small-head">set up your account for</h3>
        <h1 className="sud-big-head">FREE</h1>
        <button className="btn btn-primary sud-btn">Sign Up</button>
      </div>
    </section>
     <a href="#"><video className="video-fluid px-3 py-2" src={ShowCaseVideo} controls autoplay loop></video></a>
    </>
  );
};

export default FreeAccount;
