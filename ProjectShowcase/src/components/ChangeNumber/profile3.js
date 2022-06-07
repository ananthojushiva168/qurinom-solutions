import React from 'react'
import './profile3.css'
import Footer from '../Footer/index'
import NavBar from '../Navbar/index'

const Profile3 = () =>{
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
        </nav> */}

        <NavBar />
        <br />
        <br />
        <br />
        <form action="action_page.php"  className="container" id="con">
          <div className="form-group">
            <a href="#" className="back"><b>‹ Back</b></a>
          </div>
          <br />
          <div className="form-group">
            <input type="radio" id="profile" name="password" defaultValue="Profile" />
            <label className="radio">Profile</label>
            <input type="radio" id="Change password" name="password" defaultValue="Change password" />
            <label className="radio">Change password</label>
            <input type="radio" id="gps settings" name="password" defaultValue="GPS settings" />
            <label className="radio">GPS settings</label> 
          </div><br /> 
          <br /> 
          <div className="form-group">
            <label htmlFor="psw-old"><b>Old password</b></label><br />
            <input type="password" placeholder="Enter password" name="psw-old" id="psw-old" required /><br />
          </div>
          <div className="form-group">
            <label htmlFor="psw-new"><b>New password</b></label><br />
            <input type="password" placeholder="Enter password" name="psw-new" id="psw-new" required /><br />
          </div>
          <div className="form-group">
            <label htmlFor="psw-confirm"><b>Cofirm new password</b></label><br />
            <input type="password" placeholder="Enter password" name="psw-confirm" id="psw-cofirm" required />
          </div>
          <div className="form-group">
            <button type="submit" className="savebtn">Save</button>
          </div>
        </form>
        <Footer />
      </div>
    )
}
export default Profile3