import './login.css';
import loginImg from './../../img/Astronaut-rafiki.png';

const Signin = () => {
  return (
    <div class="login-box">


    <div class="login-logo-container">
      <span class="vaspacx">vaspac<i class="fa fa-xing" aria-hidden="true"></i></span>
      <div class="social-logo-cont">
        <i class="fa fa-github" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
      <a href="https://vaspacx-ecommerce.netlify.app/mainpage.html"><button class="primay-btn outl-btn">Shop now </button></a>
    </div>  
      
      <div class="astronaut-cont">
          <img src={loginImg}/>
      </div>
      <div class="container-login">
          <div class="cont-left">
              <h1>Hi, Welcome Back!</h1>
              <div>
                  <small class="text-grey">Don't have an account ?<a href="signup.html"> Sign up</a></small>
              </div>
              <label>E-mail</label><br/>
              <input id="input" type="email" required placeholder="E-mail"/>
              <label>Password</label><br/>
              <input id="input" type="email" required placeholder="Password"/>
              <small> <u class="text-grey pointer">Forgot Password?</u></small>
              <div class="btn-container-login"><button class="btn-create">Sign In</button>
              <button class="btn-sign"><i class="fa fa-google-plus-square" aria-hidden="true"></i>Sign in with Google</button>
              </div>
              <small class="text-grey">@vaspacx-Privacy Policy and Terms of Service apply.</small>
            </div>
           
      </div>
      <img src="./img/sun.png" id="icon-login"/>
  
  </div>
  )
}

export default Signin