import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShopNowWrapper from "UI/vaspacxlogo/ShopNowWrapper";
import { useAuthCtx } from "components/context/authContext";
import "./login.css";
import { Toast } from "components/Toast/Toast";
import { useFilterContext } from "components/context/filterContext";
import { useVaspacxTitle } from "components/DocumentTitle/useVaspacxTitle";
const Signin = () => {
  useVaspacxTitle('Sign In')
  const { login } = useAuthCtx();
  const {dispatch} = useFilterContext();
  const navigate = useNavigate();
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
  });
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    if(formInfo.email !== "" && formInfo.password !== ""){
      login(formInfo);
      navigate('/')
    }else{
      dispatch({
        type: "ERROR_TOAST",
        payload: " 🤦‍♀️ Fill All Fields !",
      });
    }
    
  };

  const guestHandler = () => {
    setFormInfo({...formInfo,email: "vaspacxguest1821@gmail.com", password: "1821"} );
  };

  return (
    <>
    <Toast/>
    <ShopNowWrapper>
      <form  onSubmit={loginSubmitHandler} className="container-login">
        <div className="cont-left">
          <h1>Hi, Welcome Back!</h1>
          <div>
            <small className="text-grey">
              Don't have an account ?
              <Link to="/signup">
                <u className="bold-white-txt"> Sign up</u>
              </Link>
            </small>
          </div>
          <label>E-mail</label>
          <br />
          <input
            className="input"
            onChange={(data) =>
              setFormInfo({ ...formInfo, email: data.target.value })
            }
            type="email" 
            placeholder="E-mail"
          />
          <label>Password</label>
          <br />
          <input
            className="input"
            onChange={(data) =>
              setFormInfo({ ...formInfo, password: data.target.value })
            }
            type="password" 
            placeholder="Password"
          />
          <small>
           
            <u className="text-grey pointer">Forgot Password?</u>
          </small>
          <div className="btn-container-login">
            <button onClick={(e)=>loginSubmitHandler(e,formInfo)} type="click" className="btn-create">
              Sign In
            </button>
            <button
              onClick={() => guestHandler()}
              type="submit"
              className="btn-sign"
            >
              <i className="fa fa-address-book" aria-hidden="true"></i>
              Sign in as GUEST
            </button>
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

export default Signin;
