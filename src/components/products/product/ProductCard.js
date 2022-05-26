import axios from "axios";
import {  useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import { useFilterContext } from "components/context/filterContext";
import CatalogSort from "./CatalogSort";
import { FilterHook } from "components/hooks/FilterHook";
import './products.css'

export const ProductCard = () => {
 
  // const { products, dispatch } = useProductContext();
  const {sortedProducts} = FilterHook();
  const {dispatch } = useFilterContext();

 
  useEffect(() => {
    (async function () {
        const { data } = await axios.get("./api/products");
        dispatch({ type: "GET_PRODUCTS", payload: data.products });
      })();
  }, []);

  console.log(sortedProducts)
  return (
  
        <section>
        <CatalogSort/>
        <main>
          {sortedProducts.map((products) => {
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
               <span>{products.title}</span>
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
                  }  className="fa fa-heart-o wishlist" aria-hidden="true"></i>
           { products.badge === "true" &&
            <div className="card-bookmark">
                <i className="fa fa-bookmark bookmark-icon" aria-hidden="true"></i>
            </div>}

              </div>
              
            );
          })}
        </main>
        </section>
      )}
    
 