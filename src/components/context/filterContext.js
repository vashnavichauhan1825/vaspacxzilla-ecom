import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "components/reducer/filterReducer";
const FilterContext = createContext();

const FilterProductProvider = ({ children }) => {
  const [{ sidebar, sort, price, categories, brands, products }, dispatch] =
    useReducer(filterReducer, {
      sidebar: false,
      sort: null,
      price: 10000,
      categories: {},
      brands: {},
      products: [],
    });

  return (
    <FilterContext.Provider
      value={{
        sidebar,
        sort,
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
