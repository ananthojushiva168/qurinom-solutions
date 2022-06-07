import React from 'react'
import '../App.css'
import LogoImage from '../Images/Capture.PNG'
import ShowCase from '../Images/user.svg'
const NavBar = () => {  
  return (
    <div className="nav-container">
    <div className="wrapper">
        <nav>
            <div classNameName="logo">
                <img src={LogoImage} alt="try1" srcset="" className="logoimg"/>
            </div>
            <div className="search_area">
                <input type="text" className="search" placeholder="Search"/>
                <span className="line line0"></span>
                <span className="line line1"></span>
            </div>
       
            <div className="loginpanel">

                <a href="224" className="nav-btn-container">
                    <img src={ShowCase} alt="try2" className="user"/>
                </a>

                <a href="224">
                    <button className="loginbtn">login</button>
                </a>

            </div>

        </nav>
    </div>
</div>
  )
}

export default NavBar