import {useState,useEffect} from 'react'
import { useCartContext } from 'components/context/cartContext';
const CartSummary = () => {
    const { cartProducts } = useCartContext();

    const [amount, setAmount] = useState();
  
    useEffect(() => {
      setAmount(
        cartProducts.reduce((acc, curr) => (acc + Number(curr.price) * curr.qty), 0)
      );
    }, [cartProducts]);
  return (
    <div className="cart-sum">
    <div className="border-bottom">
        <h1>SUMMARY</h1>
    </div>
    <div className="border-bottom">
        <div className="cart-sum-flex">
            <small>SubTotal</small>
            <small>₹ {amount}</small>
        </div>
        <div className="cart-sum-flex">
            <small>amount Items</small>
            <small>{cartProducts.length}</small>
        </div>
        <div className="cart-sum-flex">
            <small>shipping cost</small>
            <small>₹ 0.00</small>
        </div>
        <div className="cart-sum-flex">
            <small>Discount <span className='r-color'>(20%)</span></small>
            <small className='r-color'>- ₹ {(amount*0.2).toFixed(2)}</small>
        </div>
    </div>
    <div className="border-bottom">
        <div className="cart-sum-flex">
            <small>Apply Discount Code</small>
            <small><i className="fa fa-arrow-right" aria-hidden="true"></i></small>
        </div>
    </div>
    <div>
        <div className="cart-sum-flex">
            <p>amount</p>
            <p className='r-color'>₹ {amount-(0.2*amount)}</p>
        </div>
        <button  className="primay-btn label-btn pointer">Checkout</button> 
    </div>
</div>
  )
}

export default CartSummary