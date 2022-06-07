import { Link } from 'react-router-dom'
import { WrapperNav } from 'UI'
import './cart.css'
import CartItems from './cartComponents/CartItems'

export const Cart = () => {

  

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
      <CartItems/>
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
                <button  class="primay-btn label-btn pointer">Checkout</button> 
            </div>
        </div>
    </div>
<Link to="/catalog"><button class="button-shopping"><i class="fa fa-arrow-left" aria-hidden="true"></i> Continue Shoppping</button></Link>
</section>
</WrapperNav>
  )
}
