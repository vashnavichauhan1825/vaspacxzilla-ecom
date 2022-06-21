import { Catalog } from "pages";
import React,{ Fragment } from "react";
import { ImgLayoutItems } from '../../data'
import { Link } from "react-router-dom";
export const ImgLayout = () => {
  return (
    <Fragment>
      <h2 className="heading-product head-margin">Popular Items</h2>
      <div className="popular-item">
        {ImgLayoutItems.map((item) => (
          <div className={item.class} key={item.id}>
            <h1>{item.name}</h1>
            <p className="bold-grey-text">{item.price}</p>
            <Link
                    to={`/catalog#${item.name}`}
                    element={<Catalog />}
                  >
                   <button className="primay-btn outl-btn">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
                  </Link>
           
          </div>
        ))}
      </div>
    </Fragment>
  );
};


