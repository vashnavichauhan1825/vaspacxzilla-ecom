import ShopNowWrapper from "UI/vaspacxlogo/ShopNowWrapper";
import {  useState } from "react";
import "./login.css";
import { useAuthCtx } from "components/context/authContext";
import {Link } from "react-router-dom";
import { useFilterContext } from "components/context/filterContext";
import { Toast } from "components/Toast/Toast";
import { useVaspacxTitle } from "components/DocumentTitle/useVaspacxTitle";

const Signup = () => {
useVaspacxTitle('Sign Up')
    // const inputPassword = useRef();
    // const inputEmailRef = useRef();
    // const inputName = useRef();
 
    const {dispatch} = useFilterContext();
    const {signup} = useAuthCtx();
    const [formInfo , setFormInfo]= useState({
        firstName:"",
        email:"",
        password:""
    })

   const submitHandler=(e,formInfo)=>{
        e.preventDefault();
        console.log(formInfo)
        if(formInfo.email !== "" && formInfo.password !== ""){
          signup(formInfo);
        }else{
          dispatch({
            type: "ERROR_TOAST",
            payload: "🤦‍♀️ fill all fields !",
          });
        }
     
    }

   

  return (
    <>
    <Toast/>
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
            <button type="click" onClick={(e)=>submitHandler(e,formInfo)} className="btn-create">Create an account</button>
          </div>
          <small className="text-grey">
            @vaspacx-Privacy Policy and Terms of Service apply.
          </small>
        </div>
      </form>
    </ShopNowWrapper>
    </>
  );
};

export default Signup;
