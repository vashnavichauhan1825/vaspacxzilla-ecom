import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useFilterContext } from "./filterContext";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const [cartProducts, setCartProducts] = useState([]);
  const { dispatch } = useFilterContext();

  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        setCartProducts(response.data.cart);
        console.log(response)
        dispatch({ type: "SUCCESS_TOAST", payload: "Added to Cart" });
      }
      console.log(encodedToken)
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const removeFromCart = async (item) => {
    try {
      const response = await axios.delete(`/api/user/cart/${item._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        setCartProducts((oldProducts) => {
          return oldProducts.filter((obj) => obj.id !== item.id);
        });
        dispatch({ type: "ERROR_TOAST", payload: "Removed from Cart" });
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, removeFromCart, setCartProducts}}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartProvider };
