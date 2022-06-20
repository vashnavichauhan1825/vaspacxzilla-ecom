import ShopNowWrapper from "UI/vaspacxlogo/ShopNowWrapper";
import { useRef, useState } from "react";
import "./login.css";
import { useAuthCtx } from "components/context/authContext";
import {Link, useNavigate } from "react-router-dom";

const Signup = () => {
    // const inputPassword = useRef();
    // const inputEmailRef = useRef();
    // const inputName = useRef();
    const navigate =useNavigate();
    const {signup} = useAuthCtx();
    const [formInfo , setFormInfo]= useState({
        firstName:"",
        email:"",
        password:""
    })

   const submitHandler=(e)=>{
        e.preventDefault();
      signup(formInfo);
      navigate('/');
    }

  


  return (
    <ShopNowWrapper>
      <form onSubmit={submitHandler} className="container-login">
        <div className="cont-left">
          <h1>Sign Up</h1>
          <div>
            <small className="text-grey">
              Already a member?<Link to="/signin"><u className="bold-white-txt"> Log In</u></Link>
            </small>
          </div>
          <label>First Name</label>
          <input className="input" type="text"  onChange={(e) =>
          setFormInfo({ ...formInfo, firstName: e.target.value })} name="firstName"  placeholder="First Name" />
          <label>E-mail</label>
          <input className="input" type="email"  onChange={(e) =>
          setFormInfo({ ...formInfo, email: e.target.value })} name="email"  placeholder="E-mail" />
          <label>Password</label>
          <input className="input" type="password"  onChange={(e) =>
          setFormInfo({ ...formInfo, password: e.target.value })} name="password" placeholder="Password" />
          <div className="btn-container-login">
            <button className="btn-create">Create an account</button>
            <button  className="btn-sign">
              <i className="fa fa-google-plus-square" aria-hidden="true"></i>Sign up
              with Google
            </button>
          </div>
          <small className="text-grey">
            @vaspacx-Privacy Policy and Terms of Service apply.
          </small>
        </div>
      </form>
    </ShopNowWrapper>
  );
};

export default Signup;
