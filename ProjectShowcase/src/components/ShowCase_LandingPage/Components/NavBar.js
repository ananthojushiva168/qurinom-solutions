import React, { useState } from "react";
import User from '../Images/user.svg';
import {Link, useNavigate} from "react-router-dom";
import Capture from "../Images/Capture.PNG";
import jwt from "jsonwebtoken"
import "../App.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useEffect } from "react";
const NavBar = () => {
  const [token, setToken] = useState("")
  const navigate = useNavigate();
  const [state, setState] = useState("LOGIN")
  const [arrow, setArrow] = useState(<ArrowDropDownIcon />);
  const [display2, setDisplay2] = useState("none");
  useEffect(()=>{
    console.log("Change in state")

  },[state])

  const handlelogin = () =>{
    if(token){
      localStorage.removeItem('token')
      localStorage.removeItem('val')
      setState("LOGIN")

    }
    else{
      navigate('/login')
    }

  }

  const handleprofile = () =>{
    if(token){
      var val = localStorage.getItem('val')
      if(val === 0)
      navigate('/dashboarduser')
      else{
        navigate('/dashboard')
      }
    }
    else{
      navigate('/login')
    }

  }
    
    
  
  useEffect(()=>{
    setToken(localStorage.getItem('token'))
      if(token){
        setToken(token.replace(/"/g, '/login'));
        console.log(token)
        const user = jwt.decode(token)
        setState("LOGOUT");
        if(!user){
          localStorage.removeItem('token')
          localStorage.removeItem('val')
          navigate('/')
        }
  
      } 
  },[token, navigate])
  return (
    <nav className="navbar navbar-expand-md navbar-light justify-content-between">
      <div className="container px-5">
        <a className="navbar-brand" href="#">
          <img src={Capture} className="icon-size" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarID"
          aria-controls="navbarID"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarID">
          <div className="search-box pb-2">
            <input
              type="text"
              className="input-group-text search-txt"
              placeholder="search"
            />
            <a href="#/" className="search-btn">
              <i className="bi bi-search pb-1"></i>
            </a>
          </div>

          <div className="links">
                <div className="home">HOME</div>
                <div className="services" >SUBSCRIPTION</div>
                <div className="FAQ">FAQ</div>
                <div className="CONTACT">CONTACT</div>
                 <nav className="more">
          <div onClick={()=>{
            if(display2==="none"){
              setDisplay2("block");
              
              setArrow(<ArrowDropUpIcon/>);
            }
            else{
              setDisplay2("none");
              //setColor1("black");
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
        </nav> 
            </div>
          <div className="input-group"></div>
          <ul className="navbar-nav navbar-text-size ms-auto">
            <li className="nav-item pt-2">
                <img onClick={handleprofile} src={User} alt="" />
            </li>
            <li className="nav-item pt-1 px-2">
                <button onClick={handlelogin} className="btn btn-primary btn-md btn-radius">
                  {state}
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
