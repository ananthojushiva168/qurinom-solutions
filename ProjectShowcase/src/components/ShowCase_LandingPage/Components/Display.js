import React from "react";
import '../App.css'
import Cloth from '../Images/cloth.png';
import Shoe from '../Images/unsplash_-shoe.png'
import ShoeCloth from '../Images/unsplash_shoe_and_clothes.png'
import Profile from '../Images/ps.png'
const Display = () => {
  return (
    <section className="ads my-5">
      <div className="container text-center">
        <p className="h4">New stores on Showcase</p>
        <p className="lead my-2 py-5">
          Check out the stores that recently joined
        </p>
        <div  className="container">
          <div id="mr" className="col1 ps-5">
            <div className="card card-1">
              <div className="card-body">
                <h5 className="card-subtitle c1subtitle">Showcase now</h5>
                <h3 className="card-title c1title mb-2 h3">
                  240 stores & More
                </h3>
                <button className="btn btn-primary bg-light btn-lg rounded-pill c1btn">
                  Get Started
                </button>
              </div>
            </div>

            <div className="card card-2">
              <img
                
                src={Cloth}
                className="card-img-top c2img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title c2title">classic Clothing</h5>
                <p className="card-subtitle c2subtitle mb-2 text-muted ">
                  Videos 56
                </p>
              </div>
            </div>
          </div>

          <div className="col2 mt-3 ps-5">
            <div className="card card-3">
              <img
                
                src={Shoe}
                className="card-img-top c3img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title c2title">classic Clothing</h5>
                <p className="card-subtitle c2subtitle mb-2 text-muted ">
                  Videos 56
                </p>
              </div>
            </div>

            <div className="card card-3">
              <img
        
                src={Profile}
                className="card-img-top c3img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title c2title">classic Clothing</h5>
                <p className="card-subtitle c2subtitle mb-2 text-muted ">
                  Videos 56
                </p>
              </div>
            </div>
          </div>

          <div  id="cb" className="col3 mt-3">
            <div className="card card-2">
              <img
                
                src={ShoeCloth}
                className="card-img-top c2img"
                alt="..."
              />
              <div  className="card-body">
                <h5 className="card-title c2title">classic Clothing</h5>
                <p className="card-subtitle c2subtitle mb-2 text-muted ">
                  Videos 56
                </p>
              </div>
            </div>

            <div className="card card-1 last-card">
              <div className="card-body">
                <h5 className="card-subtitle pt-5 pb-4 c1subtitle">
                  Showcase now
                </h5>
                <h3 className="card-title new-text-ad-card mb-2 h3">
                  For FREE
                </h3>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Display;
