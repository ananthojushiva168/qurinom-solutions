import React from "react";
import "../App.css";
import Saly31 from '../Images/Saly-31.jpg';
import M11 from '../Images/11.jpg'
const HappyShowCase = () => {
  return (
    <section className="stats">
      <div className="container justify-content-between">
        <div className="text-center">
          <h1 className="stats-heading mb-5 py-5">Happy to Showcase</h1>
          <p className="stats-info pb-5">
            All the local stores are now on showcase <br /> Grow your business
            by showcasing your products online.
          </p>
        </div>
        <div className="row text-center">
          <div className="col-sm-4">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title  stats-card-heading">5K</h5>
                <p className="card-text stats-card-para">New Visitors</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title  stats-card-heading">270+</h5>
                <p className="card-text stats-card-para">Seller accounts</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title  stats-card-heading">100%</h5>
                <p className="card-text stats-card-para">Business growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#"><img src={Saly31} alt="img3" class="img-fluid img3"/></a>
        <a href="#"><img src={M11} alt="img4" class="img-fluid img4"/></a>
   
    </section>
  );
};

export default HappyShowCase;
