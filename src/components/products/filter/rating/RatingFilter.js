import { useFilterContext } from "components/context/filterContext";
import React from "react";

const RatingFilter = () => {
  const { rating, dispatch } = useFilterContext();
  const rateNumbers = [4, 3, 2, 1];

  return (
    <div className="brand">
      <p className="bold-white-text">Customer Review</p>
      {rateNumbers.map((num) => (
        <div>
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
          {console.log(typeof num)}
          {console.log(typeof rating)}
          {console.log(Number(rating)===num)}

          <label  htmlFor={`${num}stars`}>
            {num} <i className="fa fa-star r-color" aria-hidden="true"></i> & UP
             
          </label>
         
        </div>
      ))}
      {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    <label htmlFor="vehicle1"> <i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label><br/>

    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
    <label htmlFor="vehicle2"> <i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label><br/>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label htmlFor="vehicle3"> <i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label><br/>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label htmlFor="vehicle3"> <i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label> */}
    </div>
  );
};

export default RatingFilter;
