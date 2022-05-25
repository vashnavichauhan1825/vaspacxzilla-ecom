import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { makeServer } from "./server";
import { ProductCart } from "components/context/ProductContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <ProductCart>
    <App />
    </ProductCart>
  </React.StrictMode>,
  document.getElementById("root")
);
