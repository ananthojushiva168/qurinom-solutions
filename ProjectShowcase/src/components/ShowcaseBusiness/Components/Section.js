import React,{useState} from "react";
import Photo from "../Images/pic.png";
import Icon from "../Images/Icon.png";
import EditProfile from "../Images/edit_profile.svg";
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
            <div className="hide">Update profile</div>
          </section>
         
         

          
        </header>
      </div>
    </>
  );
};

export default Section;
