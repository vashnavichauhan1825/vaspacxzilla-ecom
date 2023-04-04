import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "components/reducer/filterReducer";
const FilterContext = createContext();

const FilterProductProvider = ({ children }) => {
  const [{  sort,badge, rating,price, categories,forToast, brands, products }, dispatch,] =
    useReducer(filterReducer, {
     
      sort: null,
      price: 10000,
      rating:0,
      categories: {},
      brands: {},
      products: [],
      forToast: { text: "", trigger: false, selector: "" },
    });

  return (
    <FilterContext.Provider
      value={{
        sort,
        rating,
        badge,
        products,
        price,
        categories,
        forToast,
        brands,
        dispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { useFilterContext, FilterProductProvider };
