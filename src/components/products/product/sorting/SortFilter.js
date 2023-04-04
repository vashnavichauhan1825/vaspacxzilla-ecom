import { useFilterContext } from "components/context/filterContext";
import React from "react";

const SortFilter = () => {
  const { sort, badge, dispatch } = useFilterContext();

  const sortChangeHandler = (e) => {
    if (e.target.value === "high-to-low") {
      dispatch({ type: "PRICE_HIGH_TO_LOW" });
    } else if (e.target.value === "Low-to-high") {
      dispatch({ type: "PRICE_LOW_TO_HIGH" });
    } else if (e.target.value === "reset") {
      dispatch({ type: "DEFAULT_SORT" });
    }
    return;
  };

  return (
    <form>
      <select className="bold-grey-text" onChange={sortChangeHandler}>
        <option disabled selected>Sort By Price</option>
        <option value="high-to-low" selected={sort === "High-to-low"}>
          Price: High to Low
        </option>
        <option value="Low-to-high" selected={sort === "Low-to-high"}>
          Price: Low to High
        </option>
        <option value="reset">Default sorting</option>
      </select>
    </form>
  );
};

export default SortFilter;
