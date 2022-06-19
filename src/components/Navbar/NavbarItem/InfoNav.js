import { useAuthCtx } from "components/context/authContext";
import { Link } from "react-router-dom";

const InfoNav = () => {
  const {isLoggedIn,logout} = useAuthCtx();
  return (
    <div className="contact-nav" id="hidden__cont">
      <div>
        <small className="bold-grey-text pointer">
          Call us <i className="fa fa-angle-down" aria-hidden="true"></i>
        </small>
      </div>
      <div className="contact-nav-btn">
        <a href="/">
          <button className="icon-button bold-grey-text pointer">
            <i className="fa fa-github" aria-hidden="true"></i>Github
          </button>
        </a>
       {isLoggedIn?( <a onClick={logout}>
          <button className="icon-button bold-grey-text pointer">
          <i className="fa fa-sign-out"></i> Logout
          </button>
        </a>) :(<Link to="/signup">
          <button className="icon-button bold-grey-text pointer">
          <i className="fa fa-sign-in"></i> LogIn
          </button>
        </Link>)}
      </div>
    </div>
  );
};

export default InfoNav;
