import React from "react"
import "./index.css"
import NavBar from "../../Navbar"
import Footer from "../../Footer"

const Normal_profile=()=>{
    return(
        <div className="Normal_profile">
            {/* <nav className="navbar navbar-expand-sm ">

                
                <div className="nav-logo">
                    <a href="#/" className="navbar-brand"><img src="/asserts/img/Showcase Logo.png" alt="logo" style="width: 40px;"></a>
                </div>

               
                <div className="search-box">
                    <form action="" className="form-inline" id="searchbox">
                        <input className="form-control mr-sm-2" placeholder="search...." type="text" >
                            <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>

                
                <ul className="navbar-nav" id="navbar-ul">
                    <li className="nav-item">
                        <a href="#/" className="nav-link">All Videos</a>
                    </li>

                    
                    <li className="nav-item dropdown">
                        <a href="#/" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Men</a>
                        <div className="dropdown-menu">
                            <a href="#/" className="dropdown-item">T-shirts</a>
                            <a href="#/" className="dropdown-item">Shirts</a>
                            <a href="#/" className="dropdown-item">Shoes</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#/" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Women</a>
                        <div className="dropdown-menu">
                            <a href="#/" className="dropdown-item">T-shirts</a>
                            <a href="#/" className="dropdown-item">Shirts</a>
                            <a href="#/" className="dropdown-item">Shoes</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#/" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Kids</a>
                        <div className="dropdown-menu">
                            <a href="#/" className="dropdown-item">T-shirts</a>
                            <a href="#/" className="dropdown-item">Shirts</a>
                            <a href="#/" className="dropdown-item">Shoes</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#/" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Home & Kitchen</a>
                        <div className="dropdown-menu">
                            <a href="#/" className="dropdown-item">T-shirts</a>
                            <a href="#/" className="dropdown-item">Shirts</a>
                            <a href="#/" className="dropdown-item">Shoes</a>
                        </div>
                    </li>
                </ul>


                
                <div className="nav-right">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#/" className="nav-link"><i className="material-icons">account_circle</i></a>
                        </li>
                        <li className="nav-item">
                            <a href="#/"><button className="btn btn-success" type="login" id="login-btn">Login</button></a>
                        </li>
                    </ul>
                </div>




            </nav> */}

            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="container-1">
                            <form action="action_page.php" className="container" >
                            <div className="form-group">
                                <a href="#/" className="back"><b>&lsaquo; Back</b></a>
                            </div>
                            <br />
                                <div className="form-group" >
                                    <input type="radio" id="profile" name="password" value="Profile" />
                                        <label className="radio">Profile</label>


                                        <input type="radio" id="Change_password" name="password" value="Change password" />
                                            <label className="radio" >Change password</label>


                                        </div><br />
                                            <div className="form-group div1">
                                                <img src="img_shopkeeper.png" ait="Photo" width="200px;" height="140px;" />
                                            </div><br />
                                                <div className="form-group div2">
                                                    <a href="#/" className="pic a1">Add pic</a>
                                                </div>

                                                <div className="form-group">
                                                    <p className="p1">People visiting your profile will see the following info</p>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" placeholder="User name" required />
                                                </div><br />
                                                    <div className="form-group">
                                                        <label for="about me" className="label1"><b>About Me</b></label><br />
                                                            <textarea id="about-me" name="about me">
                                                            </textarea>
                                                    </div>

                                                    <div className="form-group">
                                                        <button type="button" className="temporarilybtn btn1" >Temporarily disable my account</button>
                                                        <button type="button" className="deletebtn btn2">Delete my account</button>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="savebtn">Save</button>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <img src="image 1183.png" width="550px" height="550px" className="img2" />
                                        </div>
                                </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />

                        <Footer/>

        </div>
    )
}

export default Normal_profile