import React from 'react'
import '../App.css'
import {useNavigate, Link} from 'react-router-dom';
import LogoImage from '../Images/Capture.PNG'
import ShowCase from '../Images/user.svg'
const NavBar = () => {  
    const navigate = useNavigate();
    const handlelogout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('val')
        navigate('/')
    }
  return (
    <div className="nav-container">
    <div className="wrapper">
        <nav>
            <div classNameName="logo">
                <Link to="/"><img src={LogoImage} alt="try1" srcset="" className="logoimg"/></Link>
            </div>
            <div className="search_area">
                <input type="text" className="search" placeholder="Search"/>
                <span className="line line0"></span>
                <span className="line line1"></span>
            </div>
       
            <div className="loginpanel">


                    <img src={ShowCase} alt="try2" className="user"/>

 
                    <button onClick={handlelogout} className="loginbtn">logout</button>


            </div>

        </nav>
    </div>
</div>
  )
}

export default NavBar