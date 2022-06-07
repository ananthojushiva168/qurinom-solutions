import React from 'react'
import Capture from '../Images/Capture.PNG'
import '../App.css'
const Footer = () => {
  return (
    <footer className="foot pb-5">
    <div className="container text-start">
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="card foot border-0">
            <img src={Capture} alt="Logo" />
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card foot border-0">
            <div className="card-body">
              <h5 className="card-title footer-ct">Contact</h5>
              <h6 className="card-subtitle mb-2 text-muted ">
                Card subtitle
              </h6>
              <p className="card-text footer-ctext">
                Mail Us: works@creatt.in <br /> Call Us: +1800 000 0001
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card foot border-0">
            <div className="card-body">
              <h5 className="card-title footer-ct">Visit Us</h5>
              <h6 className="card-subtitle mb-2 text-muted ">
                Card subtitle
              </h6>
              <p className="card-text footer-ctext">
                123 Alberta St, San Francisco <br /> California 94114
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card foot border-0">
            <div className="card-body">
              <h5 className="card-title footer-ct">Legal</h5>
              <h6 className="card-subtitle mb-2 text-muted ">
                Card subtitle
              </h6>
              <p className="card-text footer-ctext">
                Copyright &copy; 2021Creatt Wire UI Kit All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content-between row p-5">
        <h5 className="col-sm-2">FAQ'S</h5>
        <h5 className="col-sm-2">About Us</h5>
        <h5 className="col-sm-2">Cookie Policy</h5>
        <h5 className="col-sm-2">Contact Us</h5>
        <h5 className="col-sm-2">Media & Press</h5>
      </div>
      <div className="text-center">
        <i className="bi bi-facebook px-3"></i>
        <i className="bi bi-facebook px-3"></i>
        <i className="bi bi-facebook px-3"></i>
      </div>
    </div>
  </footer>
  )
}

export default Footer