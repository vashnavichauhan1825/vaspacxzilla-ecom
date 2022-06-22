export const filterReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "RANGE":
      return { ...state, price: action.payload };

    case "SORT_BY_RATING":
      return { ...state, rating: action.payload };

    case "BADGE":
      return { ...state, badge: action.payload };


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
      return {
        ...state,
        sort: null,
      };

    case "LOADING":
      return {
        ...state,
        loading: !state.loading,
      };

      
    // add to cart
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    // success toast
    case "SUCCESS_TOAST":
      return {
        ...state,
        forToast: {
          text: action.payload,
          trigger: !state.forToast.trigger,
          selector: "success",
        },
      };

    // error toast
    case "ERROR_TOAST":
      return {
        ...state,
        forToast: {
          text: action.payload,
          trigger: !state.forToast.trigger,
          selector: "error",
        },
      };

      case "CHANGE_QTY":
        return {...state,cart:[action.payload]}
        
    // toast state handler
    case "TOAST_STATE_CLEAN":
      return {
        ...state,
        forToast: {
          text: "",
          trigger: false,
          selector: "",
        },
      };


    case "RESET":
      return {...state,
        sort: null,
        price: 10000,
        brands: {},
        rating: 0,
        categories: {},
        products: state.products,
        forToast: { text: "", trigger: false, selector: "" }
      };
    default:
      throw new Error(`oops error:${action.type}`);
  }
};
