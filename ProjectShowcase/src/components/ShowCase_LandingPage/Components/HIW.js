import React from "react";
import '../App.css'
import Laptop from '../Images/laptop.png';
const HIW = () => {
  return (
    <section className="hiw">
      <div className="container py-5 hiw-text">
        <div className="row">
          <div className="col-md-6 my-3">
            <img src={Laptop} alt="" className="img-fluid hiw-img" />
          </div>
          <div className="col-md-6 my-3">
            <h2 className="m-3 pb-3">How it Works</h2>
            <div className="m-3">
              <div className="">
                <h3>
                  <span className="px-3 py-1 bg-primary rounded-circle me-2 mt-2 hiw-steps">
                    1
                  </span>
                  Sign up
                </h3>
                <p className="px-5 ms-2">
                  Click on the sign up button. Choose business account to set up
                  a shop.
                </p>
                <br />
              </div>
              <div className="">
                <h3>
                  <span className="px-3 py-1 bg-primary rounded-circle me-2 mt-2 hiw-steps">
                    2
                  </span>
                  Create Business account
                </h3>
                <p className="px-5 ms-2">
                  Enter all details and verify the account.
                </p>
                <br />
              </div>
              <div className="">
                <h3>
                  <span className="px-3 py-1 bg-primary rounded-circle me-2 mt-2 hiw-steps">
                    3
                  </span>
                  Start uploading videos
                </h3>
                <p className="px-5 ms-2">
                  go to profile and choose upload videos. Start showcasing your
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HIW;
