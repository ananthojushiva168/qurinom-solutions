import React from "react"
import "./index.css"
import Footer from "../Footer"
import NavBar from "../Navbar/index"

const Subscription = () =>{
    return(<div className="subscription">

        <NavBar />

        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src="blue bubble (2).png" className="blue_bubble_2" />
                </div>
                <div className="col-8">
                    <div className="container-1">
                        <form className="container">
                        <div className="form-group">
                            <a href="#/" className="back a1"><b>&lsaquo; Back</b></a>
                        </div>
                        <br />
                            <br />
                                <br />
                                    <br />
                                        <div className="form-group div1" >
                                        <h3><b>Subscripition Account!</b><br /></h3>
                                    </div>
                                    <div className="form-group div1">
                                    <p2>For the purpose of industry regulation, your details<br /> are requied.</p2>
                                </div>
                                <hr />
                                    {/* <div className="form-group div2" >
                                    <label for="name" className="label1"><b>Your Full Name*</b></label><br />
                                        <input type="text" placeholder="Name" name="name" id="name" required /><br />
                                        </div>

                                            <div className="form-group div2">
                                            <label for="email" className="label2"><b>Email Address*</b></label><br />
                                                <input type="text" placeholder="Enter email address" name="email" id="email" required /><br />
                                                </div>

                                                    <div className="form-group div2">
                                                    <label for="ph.no" className="label2"><b>Phone Number</b></label><br />
                                                    <input type="text" placeholder="Phone number" name="ph.no" id="ph.no" required />
                                                    </div> */}
                                                    <div className="form-group div2">
                                                    <label for="subscripition" className="label3"><b>Subscripition Plans</b></label><br />
                                                    <select id="subscripition" name="subscripition"className="select1">
                                                        <option value="select">Select Per Month Plan</option>
                                                        <option value="#/">Silver 5$ Per Month</option>
                                                        <option value="#/">Gold 10$ Per Month</option>
                                                        <option value="#/">Platinum 15$ Per Month</option>
                                                    </select>
                                                </div>
                                                <div className="form-group div2">
                                <button type="submit" className="savebtn" formAction="https://rzp.io/l/YkRpwYfJqL">Continue</button>
                                            </div>
                                            <div className="form-group div2">
                                            <p  className="p1"> <i className="material-icons">lock_outline</i> Your info is safely secured</p>



                                        </div>


                                    </form>
                                </div>
                            </div>
                            <div className="col-2">
                                <img src="circle (1).png" className="circle1" />
                            </div>
                    </div>
                </div>

        <Footer />
    </div>
    )
}

export default Subscription