import axios from "axios";
import {  useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import CatalogSort from "./CatalogSort";
import './products.css'

export const ProductCard = () => {
 
  const { products, dispatch } = useProductContext();

 
  useEffect(() => {
    (async function () {
        const { data } = await axios.get("./api/products");
        dispatch({ type: "GET_PRODUCT", payload: data.products });
      })();
  }, );

  return (
  
        <section>
        <CatalogSort/>
        <main>
          {products.map((products) => {
            console.log(products.title)
            return (
              
              <div
                key={products.id}
                className="product-display"
              >
                
                  <img
                    className="card-img"
                    src={products.image}
                    alt={products.alt}
                  />
                  <small className="bold-grey-text">{products.category}</small>
               <div>
               <span>Coca-cola</span>
               </div>
              
               <small className="discount-cont"><s class="bold-grey-text margin-right-5px">{products.discountPrice}</s> <span class="r-color">{products.discount}</span></small>
                
                <span className="bold-white-txt">{products.price}</span>
                
                  
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: products })
                    }
                    className="primay-btn label-btn">  Add Cart </button>
                   
                  
                 
                  <i  onClick={() =>
                    dispatch({ type: "ADD_TO_WISHLIST", payload: products })
                  }  className="fa fa-heart-o" aria-hidden="true"></i>
           { products.badge === "true" &&
            <div class="card-bookmark">
                <i class="fa fa-bookmark bookmark-icon" aria-hidden="true"></i>
            </div>}

              </div>
              
            );
          })}
        </main>
        </section>
      )}
    
 