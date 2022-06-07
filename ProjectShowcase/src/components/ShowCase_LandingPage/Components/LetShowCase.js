import React from "react";
import {Link} from "react-router-dom"
import img7 from '../Images/7.jpg';
import '../App.css'
const LetShowCase = () => {
  return (
    <section className="intro text-center p-5">
      <div className="container">
        <h1 className="h1 text-secondary intro-heading m-5">Let's Showcase</h1>
      </div>
      <p className="intro-para lead">
        Bringing your product online is now easy and brezzy. <br /> You have
        something to sell, show is online.
      </p>
      <Link to="/joinus">
      <button className="btn btn-lg btn-primary btn-intro mt-5">
        Get Started
      </button>
      </Link>
      <br />
      <a href="#">
        <img className="img1 img-fluid" src={img7} alt="img1" />
      </a>
    </section>
  );
};

export default LetShowCase;
