import React from "react";
import "../App.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Logo</h4>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="#">Mail Us: works@creatt.in</a>
                </li>
                <li>
                  <a href="#">Call Us: +1800 000 0001</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Visit Us</h4>
              <ul>
                <li>
                  <a href="#">123 Alberta St, San Francisco,</a>
                </li>
                <li>
                  <a href="#">California 94114</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="">
                    Copyright © 2021 Creatt Wire UI Kit All rights reserved
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-row">
            <ul>
              <li>
                <a href="">FAQS</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Cookie Policy</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Media & Press</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
