
import { Link } from 'react-router-dom'
import { WrapperNav } from 'UI'
import './cart.css'
import CartItems from './cartComponents/CartItems'
import CartSummary from './cartComponents/CartSummary'
import { useCartContext } from 'components/context/cartContext'
import { Toast } from 'components/Toast/Toast'
import { useVaspacxTitle } from 'components/DocumentTitle/useVaspacxTitle'

export const Cart = () => {

  useVaspacxTitle('Cart')

  return (
    <WrapperNav>
    <Toast/>
    <section className="cart-section">
    <small>Main/ shopping cart</small>
    <h1>Shopping Cart</h1>
   
    <div className="cart-cont">
    <div className="cart-label">
        <p>Item</p>
        <p>Qty</p>
        <p>Subtotal</p>
    </div>
   <CartItems/>
      <CartSummary/>
    </div>
<Link to="/catalog"><button className="button-shopping"><i className="fa fa-arrow-left" aria-hidden="true"></i> Continue Shoppping</button></Link>
</section>
</WrapperNav>
  )
}
