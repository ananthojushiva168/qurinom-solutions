import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import jwt from "jsonwebtoken"
import NavBar from '../Navbar';
import axios from "axios"
const CYP2 = () =>{
  const navigate = useNavigate()
  const [phone, setphone] = useState("")
  const [address, setaddress] = useState("")
  const [country, setcountry] = useState("")
  const [msg, setMsg] = useState('');
  useEffect(()=>{
    var token = localStorage.getItem('token')
    token = token.replace(/"/g, '');
    console.log(token)
    if(token){
      const user = jwt.decode(token)
      if(!user){
        localStorage.removeItem('token')
        navigate('/')
      }

    }
  })
  const CompleteDetail = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.patch('http://localhost:5000/user/compdetail', {
            phone: phone,
            address: address,
            country: country,
        },{
          headers:{
            'Authorization':localStorage.getItem('token').replace(/"/g, '')
          }
        });
        setphone(e.target.value)
        setaddress(e.target.value)
        setcountry(e.target.value)
        navigate("/business/otp");

    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  } 
    return(
        <div id="cyp2">
          <NavBar/>
        <br />
        <br />
        <br />
        <form onSubmit={CompleteDetail}  className="container">
          <div className="form-group">
            <Link to="/joinus"> Back </Link>
          </div><br />
          <div className="form-group"  style={{textAlign: 'center'}}>
            <p4>STEP 02/03</p4>
            <p3><b>Residency Info.</b></p3>
          </div>
          <br />
          <br />
          <br />        
          <div className="form-group"  style={{paddingLeft: '30%'}}>
            <h3><b>Complete Your Profile!</b><br /></h3>
          </div>
          <div className="form-group"  style={{paddingLeft: '30%'}}>   
            <p2>For the purpose of industry regulation, your details<br /> are requied.</p2>
          </div>
          <hr />
          <div className="form-group"  style={{textAlign: 'center'}}>
            <label htmlFor="ph.no"  style={{paddingRight: '30%'}}><b>Phone number</b></label><br />
            <input type="text" placeholder="Phone number" name="ph.no" id="ph.no" required  value={phone} onChange={(e) => setphone(e.target.value)} />
          </div>
          <div className="form-group"  style={{textAlign: 'center'}}>
            <label htmlFor="address"  style={{paddingRight: '31%'}}><b>Your address</b></label><br />
            <input type="text" placeholder="Please enter address" name="address" required  value={address} onChange={(e) => setaddress(e.target.value)} />
          </div>
          <div className="form-group"  style={{textAlign: 'center'}}>
            <label htmlFor="country"  style={{paddingRight: '26%'}}><b>Country of residence</b></label><br />
            <select id="country" name="country"  value={country} onChange={(e) => setcountry(e.target.value)} >
              <option value="please">Please Select</option>
              <option value="#">+91</option>
              <option value="#" />
              <option value="#" />
            </select>
          </div>
          <br />
          <div className="form-group"  style={{textAlign: 'center'}}>
            <button type="submit" className="savebtn">Save &amp; Continue</button>
          </div>
          <div className="form-group"  style={{textAlign: 'center'}}>
            <p> <i className="material-icons">lock_outline</i> Your info is safely secured</p>
          </div>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer className="footer-area" style={{backgroundColor: '#f4f4f2'}}>
          <div className="footer-big">
            {/* start .container */}
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  <div className="footer-widget">
                    <div className="widget-about">
                      <h4> logo</h4>
                    </div>
                  </div>
                  {/* Ends: .footer-widget */}
                </div>
                {/* end /.col-md-4 */}
                <div className="col-md-3 col-sm-4">
                  <div className="footer-widget">
                    <div className="footer-menu footer-menu--1">
                      <h4 className="footer-widget-title">Contact</h4>
                      <p>mails@crat.in</p>
                      <p>Callus:+90023445788</p>
                    </div>
                    {/* end /.footer-menu */}
                  </div>
                  {/* Ends: .footer-widget */}
                </div>
                {/* end /.col-md-3 */}
                <div className="col-md-3 col-sm-4">
                  <div className="footer-widget">
                    <div className="footer-menu">
                      <h4 className="footer-widget-title">Visit us</h4>
                      <p>123 st.sanFranscioo</p>
                      <p>Calfornia 966773</p>
                    </div>
                    {/* end /.footer-menu */}
                  </div>
                  {/* Ends: .footer-widget */}
                </div>
                {/* end /.col-lg-3 */}
                <div className="col-md-3 col-sm-4">
                  <div className="footer-widget">
                    <div className="footer-menu no-padding">
                      <h4 className="footer-widget-title">Legal</h4>
                      <p>Copyright@2022we are Ui kit All right reserved</p>
                    </div>
                    {/* end /.footer-menu */}
                  </div>
                  {/* Ends: .footer-widget */}
                </div>
                {/* Ends: .col-lg-3 */}
              </div>
              {/* end /.row */}
            </div>
            {/* end /.container */}
          </div>
          {/* end /.footer-big */}
          {/* Footer */}
          <footer className="page-footer font-small special-color-dark pt-4">
            {/* Footer Elements */}
            <div className="container">
              {/* Social buttons */}
              <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                  <a className="btn-floating btn-fb mx-1">
                  </a><a href="http://www.facebook.com"><i className="fa fa-3x fa-facebook-square" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="http://www.twitter.com"><i className="fa fa-3x fa-twitter-square" /></a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-li mx-1">
                  </a><a href="http://www.fa-linkedin.com"><i className="fa fa-3x fa-linkedin-square" /></a>
                </li>
                <li className="list-inline-item">
                </li>
              </ul>
              {/* Social buttons */}
            </div>
            {/* Footer Elements */}
          </footer>
          {/* Footer */}
        </footer>
      </div>

    )
}
export default CYP2;