import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { makeServer } from "./server";
import { ProductCart } from "components/context/ProductContext";
import { FilterProductProvider } from "components/context/filterContext";
import { CartProvider } from "components/context/cartContext";
import { useSignUp } from "components/hooks/useSignUp";
import {BrowserRouter} from 'react-router-dom';
import { WishlistProvider } from "components/context/WishlistContext";
// Call make Server
makeServer();
useSignUp();

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
  <FilterProductProvider>
  <CartProvider>
  <WishlistProvider>
    <App />
  </WishlistProvider>
  </CartProvider>
    </FilterProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
