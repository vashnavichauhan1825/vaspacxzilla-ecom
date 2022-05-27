import { useFilterContext } from "components/context/filterContext";
import React from "react";

const Price = () => {
  const { price, dispatch } = useFilterContext();

  return (
    <div className="price-range">
      <p className="bold-white-text">Price Range</p>
      <div className="slider">
        <span>₹100</span>
        <span>₹5000</span>
        <span>₹10000</span>
      </div>

      <input
        type="range"
        value={price}
        onChange={(e) =>
          dispatch({ type: "RANGE", payload: Number(e.target.value) })
        }
        min="100"
        step="100"
        max="10000"
      />
    </div>
  );
};

export default Price;
