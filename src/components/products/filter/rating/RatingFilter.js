import { useFilterContext } from "components/context/filterContext";
import React from "react";

const RatingFilter = () => {
  const { rating, dispatch } = useFilterContext();
  const rateNumbers = [4, 3, 2, 1];

  return (
    <div className="brand">
      <p className="bold-white-text">Customer Review</p>
      {rateNumbers.map((num) => (
        <div key={num}>
          <input
            type="radio"
            onChange={(e) =>
              dispatch({
                type: "SORT_BY_RATING",
                payload: e.target.value,
              })
            }
            id={`${num}stars`}
            name="vehicle1"
            value={num}
            checked={Number(rating)===num?true:false}
          />

          <label  htmlFor={`${num}stars`}>
            {num} <i className="fa fa-star r-color" aria-hidden="true"></i> & UP
             
          </label>
         
        </div>
      ))}
    
    </div>
  );
};

export default RatingFilter;
