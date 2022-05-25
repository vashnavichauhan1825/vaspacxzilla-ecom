import React,{ Fragment } from "react";
import { ImgLayoutItems } from '../../data'

export const ImgLayout = () => {
  return (
    <Fragment>
      <h2 className="heading-product head-margin">Popular Items</h2>
      <div className="popular-item">
        {ImgLayoutItems.map((item) => (
          <div className={item.class}>
            <h1>{item.name}</h1>
            <p className="bold-grey-text">{item.price}</p>
            <button className="primay-btn outl-btn">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};


