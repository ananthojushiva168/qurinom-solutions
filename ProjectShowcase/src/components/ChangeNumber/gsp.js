import React from 'react'
import './gsp.css'
import Footer from "../Footer/index"
import NavBar from "../Navbar/index"

const GSP = () =>{
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
        <form action="action_page.php" className="container" id="con">
          <div className="form-group">
            <a href="#" className="back"><b>‹ Back</b></a>
          </div>
          <br />
          <div className="form-group">
            <input type="radio" id="profile" name="password" defaultValue="Profile" />
            <label className="radio">Profile</label>
            <input type="radio" id="Change password" name="password" defaultValue="Change password" />
            <label className="radio">Change password</label>
            <input type="radio" id="gps" name="password" defaultValue="GPS" />
            <label className="radio">GPS</label> 
          </div><br /> 
          <div className="form-group">
            <label htmlFor="paste link address"><b>GPS location link</b></label><br />
            <input type="text" placeholder="Paste here" name="paste link address" id="paste link address" required />
          </div><br />
          <div className="form-group">
            <p>OR</p>
          </div><br />
          <div className="form-group">
            <p1><b>Add the following information,</b><br />
              We will set it up for you</p1>
          </div><br />
          <div className="form-group">
            <label htmlFor="address"><b>Your Shop Address</b></label><br />
            <input type="text" placeholder="Please enter complete address" name="address" id="address" required />
          </div><br />
          <div className="form-group">
            <label htmlFor="country"><b>Country of residence</b></label><br />
            <select id="country" name="country">
              <option value="please">Please</option>
              <option value="#">India</option>
              <option value="#" />
              <option value="#" />
            </select>
          </div><br />
          <div className="form-group">
            <label htmlFor="state"><b>State</b></label><br />
            <select id="state" name="state">
              <option value="please">Please</option>
              <option value="#">Andhra pradesh</option>
              <option value="#">Telangana</option>
              <option value="#">Karnataka</option>
            </select>
          </div><br />
          <div className="form-group">
            <label htmlFor="district"><b>District</b></label><br />
            <select id="district" name="district">
              <option value="please">Please</option>
              <option value="#">Anantapur</option>
              <option value="#">Ranga reddy</option>
              <option value="#">Bangalore</option>
            </select>   
          </div><br />
          <div className="form-group">
            <label htmlFor="code"><b>Pincode</b></label><br />
            <input type="text" placeholder="Enter the code" name="code" id="code" required /><br />
          </div><br />
          <div className="form-group">
            <button type="submit" className="savebtn">Save</button>
          </div>
        </form>
        <Footer/>
        </div>
    )
}
export default GSP;