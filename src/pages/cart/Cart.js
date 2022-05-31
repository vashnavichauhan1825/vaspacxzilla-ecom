
import { useCartContext } from 'components/context/CartContext'
import { useFilterContext } from 'components/context/filterContext'
import React from 'react'
import { WrapperNav } from 'UI'
import './cart.css'

export const Cart = () => {

  const {dispatch}= useFilterContext();
  const {cartItems,removeCartHandler,changeQtyHandler}= useCartContext()
  return (
    <WrapperNav>
    <section class="cart-section">
    <small>Main/ shopping cart</small>
    <h1>Shopping Cart</h1>
   
    <div class="cart-cont">
    <div class="cart-label">
        <p>Item</p>
        <p>Qty</p>
        <p>Subtotal</p>
    </div>
        <div class="cart-item">
        {cartItems.map((products)=>{
          <div class="cartitem-one" key={products.key}>
               <div class="item-name">
                   <img src={products.image} alt={products.alt}/>
                   <ul>
                       <li>{products.title}</li>
                       <li><small class="bold-grey-text">Quantity: 650ml</small></li>
                   </ul>
               </div>
               <span>20 <i class="fa fa-caret-up up" aria-hidden="true"></i><i class="fa fa-caret-down down" aria-hidden="true"></i></span>
              <div class="item-flex">
               <small>$180.00</small>
               <i class="fa fa-times pointer" aria-hidden="true"></i>
              </div>
            </div>
        })}
        </div>
        <div class="cart-sum">
            <div class="border-bottom">
                <h1>SUMMARY</h1>
            </div>
            <div class="border-bottom">
                <div class="cart-sum-flex">
                    <small>Subtotal</small>
                    <small>$171.99</small>
                </div>
                <div class="cart-sum-flex">
                    <small>Shipping Cost</small>
                    <small>$7.99</small>
                </div>
                <div class="cart-sum-flex">
                    <small>Discount(15%)</small>
                    <small>-$21.00</small>
                </div>
                <div class="cart-sum-flex">
                    <small>Tax</small>
                    <small>7%</small>
                </div>
            </div>
            <div class="border-bottom">
                <div class="cart-sum-flex">
                    <small>Apply Discount Code</small>
                    <small><i class="fa fa-arrow-right" aria-hidden="true"></i></small>
                </div>
            </div>
            <div>
                <div class="cart-sum-flex">
                    <small>Total</small>
                    <small>$150.99</small>
                </div>
                <button class="primay-btn label-btn pointer">Checkout</button> 
            </div>
        </div>
    </div>
<a href="catelog.html"><button class="button-shopping"><i class="fa fa-arrow-left" aria-hidden="true"></i> Continue Shoppping</button></a>
</section>
</WrapperNav>
  )
}
