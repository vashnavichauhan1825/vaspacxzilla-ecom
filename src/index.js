import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { makeServer } from "./server";
import { FilterProductProvider } from "components/context/filterContext";
import { CartProvider } from "components/context/cartContext";
import { useSignUp } from "components/hooks/useSignUp";
import {BrowserRouter} from 'react-router-dom';
import { WishlistProvider } from "components/context/WishlistContext";
import { AuthProvider } from "components/context/authContext";
// Call make Server
makeServer();
// useSignUp();

ReactDOM.render(
  <React.StrictMode>
  
   <BrowserRouter>
   
  <FilterProductProvider>
  <CartProvider>
  <WishlistProvider>
  <AuthProvider>
    <App />
    </AuthProvider>
  </WishlistProvider>
  </CartProvider>
    </FilterProductProvider>
   
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById("root")
);
