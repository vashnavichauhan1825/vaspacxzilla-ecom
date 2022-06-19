import React from 'react'
import './shopnow.css';
import loginImg from './../../img/Astronaut-rafiki.png';
import InfoNav from 'components/Navbar/NavbarItem/InfoNav';
import { Link } from 'react-router-dom';
const ShopNowWrapper = ({children}) => {
  return (
    <>
   <InfoNav/>
    <div className="login-box">


    <div className="login-logo-container">
      <span className="vaspacx">vaspac<i className="fa fa-xing" aria-hidden="true"></i></span>
      <div className="social-logo-cont">
        <i className="fa fa-github" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </div>
      <Link to="/"><button className="primay-btn outl-btn">Shop now </button></Link>
    </div>  
      
      <div className="astronaut-cont">
          <img src={loginImg}/>
      </div>
      {children}
      </div>
      </>
  )
}

export default ShopNowWrapper;