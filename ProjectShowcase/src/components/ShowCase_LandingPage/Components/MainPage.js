import React from "react";
import '../App.css'
import Saly39 from '../Images/Saly-39.jpg';
import LC from '../Images/left-circle.png'
import RC from '../Images/right-circle.png'
const MainPage = () => {
  return (
    <>
    <div style={{position:"relative"}}>
     
      <svg
       
        width="305"
        height="633"
        viewBox="0 0 305 633"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.46"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M286.512 222.02C346.852 378.729 248.398 545.01 91.6885 605.35C-71.4513 668.166 -268.907 623.207 -331.723 460.067C-399.362 284.399 -309.083 88.3708 -133.415 20.7311C36.2975 -44.6155 221.166 52.3071 286.512 222.02Z"
          fill="#3371F2"
        />
      </svg>
      <img
        src={LC}
        alt="circle"
        className="img-fluid img-pos"
      />
      <img
        src={RC}
        alt="ellipse"
        className="ellipse d-none d-lg-block"
      />
      <svg width="1440" height="700">
        <circle cx="250" cy="230" r="314" fill="#3371F2" />
        <circle cx="-200" cy="-500" r="314" fill="#EEEEEE" />
      </svg>
</div>
      <section className="video-carousel  mb-3">
        <div
          id="carouselVideos"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselVideos"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselVideos"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselVideos"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="100000">
              <video
                onclick="VideoToggle()"
                src="videos/BrBa.S05E01.720p.BrRip.x264.300MB-Pahe.in.mkv"
                autoplay
                muted
                controls="controls"
              ></video>
            </div>
            <div className="carousel-item" data-bs-interval="100000">
              <video
                onclick="VideoToggle()"
                src="videos/BrBa.S05E02.720p.BrRip.x264.350MB-Pahe.in.mkv"
                muted
                controls="controls"
              ></video>
            </div>
            <div className="carousel-item" data-bs-interval="100000">
              <video
                onclick="VideoToggle()"
                src="videos/BrBa.S05E03.720p.BrRip.x264.350MB-Pahe.in.mkv"
                muted
                controls="controls"
              ></video>
            </div>
          </div>
          <button
            className="checking"
            type="button"
            data-bs-target="#carouselVideos"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="checking1"
            type="button"
            data-bs-target="#carouselVideos"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
        <div className="accordionHide" id="accordionExample">
          <div className="innerBox">
            <div className="inner1">
              <div className="innerLabels">
                <div>classNameic:Clothing</div>
                <div className="TShirtLabel">ColourBlock Slim Fit T-Shirt</div>
              </div>
              <div className="Price">Rs 1249.0</div>
            </div>
            <div className="inner2">
              <p className="paraLabel">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="inner3">
              <button>WHATSAPP</button>
              <button>GPS</button>
              <button>SAVE</button>
            </div>
          </div>
        </div>

        <br />
        <a href="#">
          <img src={Saly39} alt="img2" className="img-fluid img2" />
        </a>
      </section>
    </>
  );
};

export default MainPage;
