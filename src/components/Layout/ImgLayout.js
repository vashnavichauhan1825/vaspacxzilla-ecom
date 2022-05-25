import React,{ Fragment } from "react";
import { ImgLayoutItems } from '../../data'

const ImgLayout = () => {
  return (
    <Fragment>
      <h2 class="heading-product head-margin">Popular Items</h2>
      <div class="popular-item">
        {ImgLayoutItems.map((item) => (
          <div class={item.class}>
            <h1>{item.name}</h1>
            <p class="bold-grey-text">{item.price}</p>
            <button class="primay-btn outl-btn">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ImgLayout;
