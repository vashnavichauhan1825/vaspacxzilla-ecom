export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SIDEBAR":
      return { ...state, sidebar: !state.sidebar };

    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "RANGE":
      return { ...state, price: action.payload };

      case "SORT_BY_RATING":
        return{...state,rating:action.payload}
      
        case "BADGE":
          return{...state}

    case "CATEGORIES":
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload]: !state.categories[action.payload],
        },
      };
    case "FILTER_BRAND":
      return {
        ...state,
        brands: {
          ...state.brands,
          [action.payload]: !state.brands[action.payload],
        },
      };
    case "PRICE_HIGH_TO_LOW":
      return {
        ...state,
        sort: "High-to-low",
      };
    case "PRICE_LOW_TO_HIGH":
      return {
        ...state,
        sort: "Low-to-high",
      };
     
      case "DEFAULT_SORT":
          return{
              ...state,
              sort:null,
          }

   
          
    case "RESET":
      return {
        sidebar: false,
        sort: null,
        price: 10000,
        brands: {},
        categories: {},
        products: state.products,
      };
    default:
      throw new Error(`oops error:${action.type}`);
  }
};
