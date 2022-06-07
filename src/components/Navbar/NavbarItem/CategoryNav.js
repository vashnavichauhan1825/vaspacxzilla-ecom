import { useCartContext } from 'components/context/cartContext'
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const CategoryNav = () => {

  const {cartProducts} = useCartContext();

const path = useLocation();
  return (
    <div className="category-nav">
    
                <div className="left-menu">
                   <button><i className="fa fa-bars" aria-hidden="true"></i><span id='hidden__cont'>Categories</span></button>
                  <div className="dropdown-menu">
                    <a href="/">Books<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                   <a href="/">Astronomy<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                   <a href="/">Home Decor<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                   <a href="/">Specialty Lighting<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                   <a href="/">Glassware & Drinkware<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                   <a href="/">Toys and Games<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                   <a href="/">Men's Clothing<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                   <a href="/">Women's Clothing<i className="fa fa-angle-right" aria-hidden="true"></i></a> 
                   </div>
                </div>
    
            <div className="contact-nav-btn">
                <Link className="icon-button bold-white-txt" to="/wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i>Wishlist</Link> 
                <div className="badge"> 
                    <Link to="/cart"><i className="fa fa-shopping-cart x-icon" aria-hidden="true"></i></Link>
                     <span className="icon-badge icon-bell">{cartProducts.length}</span>
                     </div>
            </div>
        </div>
  )
}

export default CategoryNav