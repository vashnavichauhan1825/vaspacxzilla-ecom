import React from "react";
import Card from "../../UI/Card";
import { serviceItems } from "../../data";

const Service = () => {
  return (
    <Card>
      {serviceItems.map((item) => (
        <div className="service-conatiner">
          <div>
            <i className={item.icon} aria-hidden="true"></i>
            <h3>{item.title}</h3>
            <small className="bold-grey-text">{item.info}</small>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default Service;
