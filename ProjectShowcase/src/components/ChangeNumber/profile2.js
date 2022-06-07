import React from 'react'
import './profile2.css'
import Footer from '../Footer/index'
import NavBar from '../Navbar/index'

const Profile2 = () =>{
    return(
        <div>
        {/* <nav className="navbar navbar-expand-sm " id="nav">
          
          <div className="nav-logo">
            <a href="#" className="navbar-brand"><img src="/asserts/img/Showcase Logo.png" alt="logo" style={{width: '40px'}} /></a>
          </div>
          
          <div className="search-box">
            <form action className="form-inline" id="searchbox">
              <input className="form-control mr-sm-2" placeholder="search...." type="text" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
         
          <ul className="navbar-nav" id="navbar-ul">
            <li className="nav-item">
              <a href="#" className="nav-link">All Videos</a>
            </li>
           
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Men</a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">T-shirts</a>
                <a href="#" className="dropdown-item">Shirts</a>
                <a href="#" className="dropdown-item">Shoes</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Women</a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">T-shirts</a>
                <a href="#" className="dropdown-item">Shirts</a>
                <a href="#" className="dropdown-item">Shoes</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Kids</a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">T-shirts</a>
                <a href="#" className="dropdown-item">Shirts</a>
                <a href="#" className="dropdown-item">Shoes</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Home &amp; Kitchen</a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">T-shirts</a>
                <a href="#" className="dropdown-item">Shirts</a>
                <a href="#" className="dropdown-item">Shoes</a>
              </div>
            </li>
          </ul>
         
          <div className="nav-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link"><i className="material-icons">account_circle</i></a>
              </li>
              <li className="nav-item">
                <a href="#"><button className="btn btn-success" type="login" id="login-btn">Login</button></a>
              </li>
            </ul>
          </div>
        </nav>&gt; */}

        <NavBar />
        <form action="action_page.php" className="container">
          <div className="form-group">
            <a href="#" className="back"><b>‹ back</b></a>
          </div>
          <br />
          <div className="form-group">
            <input type="radio" id="verification" name="verification" defaultValue="verification" />
            <label className="radio">Verification</label>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="enterotp"><b>Enter OTP</b></label><br />
            <input type="password" placeholder="Enter otp" name="enterotp" id="enterotp" required /><br />
          </div>
          <br />
          <button type="submit" className="verifybtn">Verify</button><br />
          <div className="form-group">
            <p> <i className="material-icons">lock_outline</i> Your info is safely secured</p>
          </div>
        </form>
        <Footer />
      </div>
    )
}
export default Profile2;