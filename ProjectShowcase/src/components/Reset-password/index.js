import React from "react"
import "./index.css"
import Footer from "../Footer"
import NavBar from "../Navbar/index"

const Reset=()=>{
    return(<div className="reset_password">
        {/* <nav className="navbar navbar-expand-sm ">

            
            <div className="nav-logo">
                <a href="#/" className="navbar-brand"><img src="/ShowCase logo (1).png" className="logoimg" alt="logo" /></a>
            </div>

            
            <div className="search-box">
                <form action="" className="form-inline" id="searchbox">
                    <input className="form-control mr-sm-2" placeholder="search...." type="text" />
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
                <div className="col-2">
                    <img src="circle (2).png" className="circle2" width="200px" height="200px" />
                </div>
                <div className="col-8">
                    <div className="container-1">
                        <form action="action_page.php" className="container">
                        <div className="form-group">
                            <a href="#/" className="back a1"><b>&lsaquo; Back</b></a>
                        </div><br />
                            <div className="form-group div1" >
                            <p3 >STEP 02/03</p3><br />


                                <p4 ><b>Reset password.</b></p4>
                            </div>
                            <br />
                                <br />
                                    <br />
                                        <div className="form-group div2" >
                                        <h3><b>Reset Password !</b><br /></h3>
                                    </div>
                                    <div className="form-group div2">
                                    <p2>For the purpose of industry regulation, your details<br /> are requied.</p2>
                                </div>

                                <hr />


                                    <div className="form-group div1" >
                                    <label for="psw-new" className="label1"><b>New password</b></label><br />
                                        <input type="password" placeholder="Enter password" name="psw-new" id="psw-new" required /><br />
                                        </div>
                                            <div className="form-group div1">
                                            <label for="psw-confirm" className="label2"><b>Cofirm new password</b></label><br />
                                                <input type="password" placeholder="Enter password" name="psw-confirm" id="psw-cofirm" required />
                                                </div>

                                                <div className="form-group div1">
                                                <button type="submit" className="submitbtn">Submit</button>
                                            </div>
                                            <div className="form-group div1">
                                            <p className="p1"> <i className="material-icons">lock_outline</i> Your info is safely secured</p>



                                        </div>


                                    </form>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="circle (1).png" className="circle1" />
                            </div>
                    </div>
                </div>
<br />
<br />
<br />
<br />
<br />
    
    <Footer />
    </div>
    )
   
}

export default Reset