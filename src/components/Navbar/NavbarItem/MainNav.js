import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="search-nav">
      <span className="vaspacx">
        <span className="clr-white">vas</span>
        <span className="clr-primary">pac</span>
        <i className="fa fa-xing clr-primary" aria-hidden="true"></i>
        <span className="clr-primary">zilla</span>
      </span>
      <div className="search-cont">
        <form id="hidden__cont">
          <select className="bold-grey-text">
            <option>All</option>
            <option>Home Decor</option>
            <option>Telescope</option>
            <option>Other</option>
          </select>
        </form>
        <input id="input" className="bold-grey-text" placeholder="Search..." />
      </div>
      <div className="search-cont">
        <small className="bold-grey-text pointer" id="hidden__cont">
          Help <i className="fa fa-angle-down" aria-hidden="true"></i>
        </small>
        <div className="cart-nav-cont">
          <Link to="/signup">
            <i className="fa fa-shopping-basket pointer" aria-hidden="true"></i>
          </Link>
          <small id="hidden__cont">My Account</small>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
