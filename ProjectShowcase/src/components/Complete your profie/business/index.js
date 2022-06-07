import React from 'react'
import "./phoneotp.css"
import pic1 from "./Woman working on laptop at the desk.png"
import Footer from '../../Footer'
import {Link, useNavigate} from "react-router-dom";
import NavBar from '../../Navbar/index'
import axios from 'axios';
import jwt from "jsonwebtoken"
import {useState, useEffect} from 'react'
const CompleteProfileOTP = () => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState()
  const [msg, setMsg] = useState()

  useEffect(() =>{
    async function SendPhone(){
      try{
        var t = localStorage.getItem('token').replace(/"/g, '')
        const message = await axios.get('http://localhost:5000/user/getotp', { headers:{ 'Authorization':t}})
        console.log(message)
      } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
            console.log(msg)
        }
    }
    }
    var token = localStorage.getItem('token')
    token = token.replace(/"/g, '');
    // console.log(token)
    if(token){
      const user = jwt.decode(token)
      if(!user){
        localStorage.removeItem('token')
        navigate('/')
      }

      SendPhone();
    }
  })
  const PostPhone = async(e) =>{
    try{
    const response = await axios.post('http://localhost:5000/user/verify', {phone:phone,}, { headers:{ 'Authorization':localStorage.getItem('token').replace(/"/g, '')}})
    if (response.data){
      console.log(response.data)
    }
    setPhone('')
  }catch (error) {
    if (error.response) {
        setMsg(error.response.data.msg);
    }
}
  
  }
    return(
        <div className='OTPPage'>

        <NavBar />
        
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="container-1">
                <form onSubmit={PostPhone} className="container">
                  <div className="form-group">
                    <a href="#" className="back"><b>‹ Back</b></a>
                  </div><br />
                  <div className="form-group"  style={{textAlign: 'center'}}>
                    <p3>STEP 03/03</p3><br />
                    <p4 style={{marginLeft: '-15px'}}><b>phonenumber</b></p4>
                  </div>
                  <br />
                  <br />
                  <br />        
                  <div className="form-group"  style={{paddingLeft: '19%'}}>
                    <h3><b>Complete Your Profile!</b><br /></h3>
                  </div>
                  <div className="form-group"  style={{paddingLeft: '20%'}}>   
                    <p2>For the purpose of industry regulation, your details<br /> are requied.</p2>
                  </div>
                  <hr />
                  <div className="form-group"  style={{textAlign: 'center'}}>
                    <label htmlFor="enterotp"  style={{paddingRight: '48%'}}><b>Enter OTP</b></label><br />
                    <input type="password" placeholder="Enter otp" name="enterotp" id="enterotp" required /><br />
                  </div>
                  <br />
                  <div className="form-group" style={{textAlign: 'center'}}>
                    <Link to="/business/sc"><button type="submit" className="savebtn">Save &amp; Continue</button></Link>
                  </div>
                  <div className="form-group" style={{textAlign: 'center'}}>
                    <p> <i className="material-icons">lock_outline</i> Your info is safely secured</p>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-3">
              <img src={pic1} style={{marginTop: '75px', marginLeft: '20px'}} />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
}
export default CompleteProfileOTP;