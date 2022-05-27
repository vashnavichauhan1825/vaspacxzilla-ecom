import axios from "axios";
import { useState, useEffect } from "react";
import { useFilterContext } from "components/context/filterContext";

export const CategoryFilter = () => {
  const { categories, dispatch } = useFilterContext();
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("./api/categories");
      setCategoryData(data.categories);
    })();
  }, []);

  return (
    <div className="brand">
      <p className="bold-white-text">Category</p>
      {categoryData.map((category) => {
        return (
          <div key={category.id}>
            <input
              type="checkbox"
              checked={categories[category.value] ?? false}
              name="vehicle1"
              onChange={(e) =>
                dispatch({ type: "CATEGORIES", payload: e.target.value })
              }
              value={category.value}
            />
            <label>{category.categoryName}</label>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
