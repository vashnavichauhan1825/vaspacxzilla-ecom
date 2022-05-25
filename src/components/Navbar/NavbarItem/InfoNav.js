import React from "react";

const InfoNav = () => {
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
        <a href="/">
          <button className="icon-button bold-grey-text pointer">
            <i className="fa fa-twitter" aria-hidden="true"></i>Twitter
          </button>
        </a>
      </div>
    </div>
  );
};

export default InfoNav;
