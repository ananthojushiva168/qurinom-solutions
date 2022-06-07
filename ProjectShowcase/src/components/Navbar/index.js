import React, { useState } from "react";
import "./index.css";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ShowCase from "./ShowCaselogo.png";
const NavBar = () => {
    const [display1, setDisplay] = useState("none");
    const [color1, setColor1] = useState("black");
    const [arrow, setArrow] = useState(<ArrowDropDownIcon />);
    const [display2, setDisplay2] = useState("none");
    return (
        <div className="navbar">
            <div className="logo">
                <img src={ShowCase} alt="imgjpg"/>
            </div>
            <div className="links">
                <div className="home">HOME</div>
                <div className="services" >SUBSCRIPTION</div>
                <div className="FAQ">FAQ</div>
                <div className="CONTACT">CONTACT-US</div>
                { <nav className="more">
          <div onClick={()=>{
            if(display2==="none"){
              setDisplay2("block");
              
              setArrow(<ArrowDropUpIcon/>);
            }
            else{
              setDisplay2("none");
              setColor1("black");
              setArrow(<ArrowDropDownIcon/>);
            }
          }} >MORE</div>
          <div>
            {arrow}
          </div>
          <div style={{display:display2}} className="links1">
              <div>Subscription</div>
              <div>Subscription</div>
              <div>Subscription</div>
          </div>
        </nav> }
            </div>
            <div className="icons">
                <div style={{ display: display1 }}>
                    <input type="text" />
                </div>
                <SearchIcon onClick={() => {
                    setColor1((prev) => {
                        if (prev === "black") {
                            setDisplay("block");
                            return "red";
                        }
                        else {
                            setDisplay("none");
                            return "black";
                        }
                    })

                }} style={{ color: color1 }} className="si" />
                <PersonIcon className="pi" />
            </div>
        </div>
    );
};

export default NavBar;