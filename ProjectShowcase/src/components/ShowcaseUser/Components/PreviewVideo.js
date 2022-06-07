import axios from "axios";
import React, { useEffect } from "react";
import "../App.css";
import Cross from "../Images/cross.png";
const PreviewVideo = (props) => {

  return (
    <div
      onClick={() => {
        props.onPreviewModal(false);
      }}
      className="Preview-wrapper"
    >
      <div className="Preview-container">
        <span
          onClick={() => {
            props.onPreviewModal(false);
          }}
        >
          <img src={Cross} />
        </span>
        <div className="Video1">
          <video src={props.Data.previewVideo} controls />
        </div>
        <div className="Video1-details">
          <div className="Video1-details-title">
            <div className="Title">
              <h1 className="TitleBold">Classic Clothing</h1>
              <div className="Price">{props.Data.ProductPrice}</div>
            </div>
            <div className="Description">
              {props.Data.ProductDescription}
            </div>
            <div className="Vid-Button">
              
                <a className="boxbtn_1" href="https://wa.me/911111111111" target="_blank">
                  Whatsapp
                </a>
              

                <a className="boxbtn_1" href="#" target="_blank">
                  GPS
                </a>
            
              
                <a className="boxbtn_1" href="#" target="_blank">
                  Save
                </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewVideo;
