import React from 'react'
import Footer from '../Footer/index';
import './registerpersonal.css' 
import NavBar from '../Navbar/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const RegisterPersonal = () =>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const RegisterIn = async (e) => {
      e.preventDefault();
      
      try {
          const response = await axios.post('http://localhost:5000/user/register', {
              name,
              email,
              role:123456,
              password,
          });
          setEmail(e.target.value)
          setName(e.target.value)
          setPassword(e.target.value)
          setCheck(false)
         
          localStorage.setItem('token',JSON.stringify(response.data.accesstoken));
          navigate("/");
          
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }




    return (
      <div className='RP'>

        <NavBar />
        <br />
        <br />
        <br />
        <form onSubmit={RegisterIn} className="container">
          <div className="form-group">
            <a href="#" className="back"><b>‹ Back</b></a>
          </div><br />
          <div className="form-group"  style={{textAlign: 'center'}}>
            <p3>STEP 01/03</p3><br />
            <p4><b>Personal Info.</b></p4>
          </div>
          <br />
          <br />
          <br />        
          <div className="form-group" style={{paddingLeft: '30%'}}>
            <h3><b>Register Individual Account!</b><br /></h3>
          </div>
          <div className="form-group"  style={{paddingLeft: '30%'}}>   
            <p2>For the purpose of industry regulation, your details<br /> are requied.</p2>
          </div>
          <hr />
          <div className="form-group"  style={{textAlign: 'center'}}>
            <label htmlFor="name" style={{paddingRight: '28%'}}><b>Your fullname*</b></label><br />
            <input type="text" placeholder="Invictus Innocent" name="name" id="name" required  value={name} onChange={(e) => setName(e.target.value)} /><br />
          </div>
          <div className="form-group"  style={{textAlign: 'center'}}>
            <label htmlFor="email" style={{paddingRight: '28%'}}><b>Email address*</b></label><br />
            <input type="text" placeholder="Enter email address" name="email" id="email" required  value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          </div>
          <div className="form-group" style={{textAlign: 'center', paddingRight: '19%'}}>
            <input type="checkbox" defaultChecked="checked" name="terms & conditions"  value={check} onChange={(e) => setCheck(e.target.value)} /> 
            <label htmlFor="terms and conditions">I agree to terms &amp; conditions</label>
          </div>  
          <div className="form-group"  style={{textAlign: 'center'}}>
            <label htmlFor="create" style={{paddingRight: '28%'}}><b>Create password*</b></label><br />
            <input type="password" placeholder="Enter password" name="create" id="create" required  value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          </div>
          <div className="form-group"  style={{textAlign: 'center'}}>
            <button  type="submit" className="registerbtn">Register Account</button>
          </div>
          <p style={{textAlign: 'center'}}>Or</p>
          <div className="form-group"  style={{textAlign: 'center'}}>
            <button type="button" className="googlebtn">Register with Google</button>
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
        <Footer/>
      </div>

    );
  }


export default RegisterPersonal;