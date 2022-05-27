import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "components/reducer/filterReducer";
const FilterContext = createContext();

const FilterProductProvider = ({ children }) => {
  const [{ sidebar, sort,badge, rating,price, categories, brands, products }, dispatch,] =
    useReducer(filterReducer, {
      sidebar: false,
      sort: null,
      price: 10000,
      rating:0,
      categories: {},
      brands: {},
      products: [],
    });

  return (
    <FilterContext.Provider
      value={{
        sidebar,
        sort,
        rating,
        badge,
        products,
        price,
        categories,
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
