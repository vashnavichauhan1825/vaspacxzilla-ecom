import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "./cartContext";
import { useFilterContext } from "./filterContext";
import { useWishlistContext } from "./WishlistContext";

const authContext = createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  signup: () => {},
  user: "",
  email: "",
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { dispatch } = useFilterContext();
  const { setCartProducts } = useCartContext();
  const { setWishlistItems } = useWishlistContext();
  const userLocalStorage = localStorage.getItem("user");
  const tokenLocalStorage = localStorage.getItem("token");
  const emailLocalStorage = localStorage.getItem("email");
  const [user, setUser] = useState(userLocalStorage);
  const [token, setToken] = useState(tokenLocalStorage);
  const [email, setEmail] = useState(emailLocalStorage);
  const isUserLoggedIn = !!token;

  const signUpHandler = async (formInfo) => {
    console.log(formInfo);
    try {
      const response = await axios.post("/api/auth/signup", {
        ...formInfo,
      });

      if (response.status === 201) {
        navigate("/signin");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (formInfo) => {
    console.log("logiiin", formInfo);
    try {
      const responseData = await axios.post("/api/auth/login", {
       email:formInfo.email,
       password:formInfo.password
      });

      if (responseData.status === 200) {
        localStorage.setItem("token", responseData.data.encodedToken);
        localStorage.setItem("user", responseData.data.foundUser.firstName);
        localStorage.setItem("email", responseData.data.foundUser.email);
        setToken(responseData.data.encodedToken);
        setUser(responseData.data.foundUser.firstName);
        setEmail(responseData.data.foundUser.email);

        dispatch({
          type: "SUCCESS_TOAST",
          payload: `${responseData.data.foundUser.firstName} logged in !`,
        });
        console.log(email);
      }
    } catch (error) {
      dispatch({ type: "ERROR_TOAST", payload: error });
    }
  };
  const logoutHandler = () => {
    localStorage.clear();
    setToken(null);
    setUser("");
    setEmail("");
    dispatch({ type: "ERROR_TOAST", payload: "Logged Out" });
    setCartProducts([]);
    setWishlistItems([]);
    navigate("/");
  };

  const contextValue = {
    token: token,
    isLoggedIn: isUserLoggedIn,
    login: loginHandler,
    signup: signUpHandler,
    logout: logoutHandler,
    user: user,
    email: email,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

const useAuthCtx = () => useContext(authContext);

export { useAuthCtx, AuthProvider };
