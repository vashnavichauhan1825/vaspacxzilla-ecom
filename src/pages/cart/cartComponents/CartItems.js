import { useCartContext } from "components/context/cartContext";

const CartItems = () => {
    
  const { cartProducts, removeFromCart, changeCartQty } = useCartContext();
  return (
    <div class="cart-item">
    {cartProducts.map((products)=>(
      <div class="cartitem-one" key={products.key}>
           <div class="item-name">
               <img src={products.image} alt={products.alt}/>
               <ul>
                   <li>{products.title}</li>
                   <li><small class="bold-grey-text">{products.category}</small></li>
               </ul>
           </div>
           <span>20 <i class="fa fa-caret-up up" aria-hidden="true"></i><i class="fa fa-caret-down down" aria-hidden="true"></i></span>
          <div class="item-flex">
           <small>₹{products.price}</small>
           <i  onClick={() => {
                removeFromCart(products);
              }} class="fa fa-times pointer remove-btn" aria-hidden="true"></i>
          </div>
        </div>
    ))}
    </div>
  )
}

export default CartItems;