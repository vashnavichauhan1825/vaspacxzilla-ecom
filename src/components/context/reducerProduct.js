export const reducerProduct = (state, action) => {
    switch (action.type) {
     
      case "GET_PRODUCT":
        return {
          ...state,
          products: action.payload,
        };
  
      default:
        throw new Error(`${action.type}`);
    }
  };