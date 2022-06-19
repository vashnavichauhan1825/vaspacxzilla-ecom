import './login.css';
import { useRef, useState} from 'react';
import {useNavigate}from 'react-router-dom'
import ShopNowWrapper from 'UI/vaspacxlogo/ShopNowWrapper';
import { useAuthCtx } from 'components/context/authContext';
import axios from 'axios';
import { Navbar } from 'components';

const Signin = () => {
    // const redirect = useHistory();
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const [formInfo, setFormInfo]= useState({
      email:"",
      password:""
    })
    const navigate = useNavigate();
    const{ login,isLoggedIn} =useAuthCtx();

    const submitHandler = async (event) => {
        event.preventDefault();
    
        const emailInputValue = inputEmailRef.current.value;
        const passwordRef = inputPasswordRef.current.value;
       
        // try {
        //   const responseData =await
      await axios
          .post("/api/auth/login", {
            email: emailInputValue,
            password: passwordRef,
          })
          .then((res) => {
           
            login(res.data.encodedToken);
            console.log(res)
            console.log(res.data.encodedToken) 
            navigate('/catalog', { replace: true })
             alert("logged in")
          })
          .catch((error) => {
           alert(error);
           console.log(error)
          });
        };
  return (
   <ShopNowWrapper>
   
      <form onSubmit={submitHandler} className="container-login">
          <div className="cont-left">
              <h1>Hi, Welcome Back!</h1>
              <div>
                  <small className="text-grey">Don't have an account ?<a href="signup.html"><u className='bold-white-txt'> Sign up</u></a></small>
              </div>
              <label>E-mail</label><br/>
              <input id="input" type="email" required ref={inputEmailRef}  placeholder="E-mail"/>
              <label>Password</label><br/>
              <input id="input" type="password" required ref={inputPasswordRef} placeholder="Password"/>
              <small> <u className="text-grey pointer">Forgot Password?</u></small>
              <div className="btn-container-login"><button className="btn-create">Sign In</button>
              <button  className="btn-sign"><i className="fa fa-google-plus-square" aria-hidden="true"></i>Sign in with Google</button>
              </div>
              <small className="text-grey">@vaspacx-Privacy Policy and Terms of Service apply.</small>
            </div>
           
      </form>
      </ShopNowWrapper>
  
  )
}

export default Signin