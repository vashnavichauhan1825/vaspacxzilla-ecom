import React, { Fragment } from "react";
import { Card } from "../../UI";
import { popularItem } from "../../data";
import { Link } from "react-router-dom";

export const PopularCategory = () => {
  return (
    <Fragment>
      <h2 className="heading-product">Popular Categories</h2>
      <Card>
       
        {popularItem.map((item) => (
          <div key={item.id} className="pc-first">
            <div className="flex-center-product">
              <img src={item.img} />
            </div>

            <ul>
              <li>{item.title}</li>
              <li className="bold-grey-text pointer">
                <small>{item.listOne}</small>
              </li>
              <li className="bold-grey-text pointer">
                <small>{item.listTwo}</small>
              </li>
              <li className="bold-grey-text pointer">
                <small>{item.listThree}</small>
              </li>
              <li className="bold-grey-text pointer">
                <small>{item.listFour}</small>
              </li>
              <Link to="/catalog">
                <li className="pointer">
                  <small>
                    Show All{" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </small>
                </li>
              </Link>
            </ul>
          </div>
        ))}
      </Card>
    </Fragment>
  );
};
