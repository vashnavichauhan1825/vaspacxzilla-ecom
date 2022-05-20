import React from 'react'

const CategoryNav = () => {
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
                <a className="icon-button bold-white-txt" href="/"><i className="fa fa-heart-o" aria-hidden="true"></i>Wishlist</a> 
                <div className="badge"> 
                    <a href="/"><i className="fa fa-shopping-cart x-icon" aria-hidden="true"></i></a>
                     <span className="icon-badge icon-bell">+11</span>
                     </div>
            </div>
        </div>
  )
}

export default CategoryNav