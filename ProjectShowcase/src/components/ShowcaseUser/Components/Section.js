import React,{useState} from "react";
import Photo from "../Images/pic.png";
import Icon from "../Images/Icon.png";
import EditProfile from "../Images/edit_profile.svg";
import {Link} from "react-router-dom"
import "../App.css";
const Section = (props) => {
  const [profilePic,setProfilePic]=useState(Photo);
  return (
    <>
      <div className="header-container">
        <header>
          <div className="hero-container">
            <img src={profilePic} alt="123"  id="photo" />
            <input type="file" className="my_file"onChange={(e)=>{
              setProfilePic(URL.createObjectURL(e.target.files[0]))
            }}  name="" id="my_file" />
          </div>
          <section className="bio">
            <p className="username">Classic clothing</p>
            <div className="videoicon">
              <img src={Icon} alt="123" /> VIDEOS {props.TotalVids}
            </div>
            <div className="bio-container">
              <h5>our shop sells all the things you want</h5>
            </div>
          </section>
          <section className="edit_profile">
            <button>
              <img src={EditProfile} alt="356" />
            </button>
            <Link to="/business/profile/p1"><div className="hid">Update profile</div></Link>
          </section>
          <section className="whatsapp">
            <div className="box1">
              <button className="boxbtn1">
                <a id="sp" href="https://wa.me/911111111111" target="_blank">
                  Whatsapp
                </a>
                <br />
                <span id="sp">contact on whatsapp</span>
              </button>
            </div>
          </section>
          <section className="gps">
            <div className="box2">
              <button className="boxbtn2">
                <a id="sp" href="https://www.google.com/maps" target="_blank">
                  GPS
                </a>
                <br />
                <span id="sp">Look for Direction</span>
              </button>
            </div>
          </section>
          <div className="post_videobtn">
            <button onClick={props.onModalClose} className="button button2">Post Video</button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Section;
