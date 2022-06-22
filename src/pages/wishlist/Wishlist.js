import { Link } from 'react-router-dom';
import { useCartContext } from 'components/context/cartContext';
import { useWishlistContext } from 'components/context/WishlistContext'
import { WrapperNav } from 'UI'
import './wishlist.css'
import { Toast } from 'components/Toast/Toast';
import { useVaspacxTitle } from 'components/DocumentTitle/useVaspacxTitle';
export const Wishlist = () => {
   useVaspacxTitle('Wishlist')
  const {wishlistItems,removeFromWishlist}= useWishlistContext();
  const {cartProducts, addToCart ,removeFromCart} = useCartContext();
  return (
    <>
    <Toast/>
  <WrapperNav>
      <div className="margin-left-11x">
    <small className="bold-white-text">Main/<small>wishlist</small></small>
    <h1 >Wishlist <small className="bold-grey-text">{wishlistItems.length}</small></h1>
    {wishlistItems.length ? <div className="wishlist-item-container" >
   {wishlistItems.map((products)=>(
      <div className="product-display">
            <img src={products.image}/>
            <small className="bold-grey-text">{products.categoryName}</small>
            <small>{products.title}</small><br/>
            <small><s className="bold-grey-text margin-right-5px">$18.00 </s> <span className="r-color"> 50% off</span></small>
            <small className="bold-white-txt">{products.price}</small>
            {cartProducts.some((item) => item.id === products.id) ?( <button  onClick={() => {
                    removeFromCart(products);
                  }} className="primay-btn label-btn remove-cart-btn">Remove From Cart</button>
          ):( <button  onClick={() => {
                    addToCart(products);
                  }} className="primay-btn label-btn">MOVE TO CART</button>
           )}
            <i  onClick={() => {
                removeFromWishlist(products);
              }} className="fa fa-times" aria-hidden="true"></i>
        </div>
       
    ))} </div>:(<h1 className='not-found-data'>your wishlist is empty !</h1>)}
    <Link to="/catalog"><button className="button-shopping"><i className="fa fa-arrow-left" aria-hidden="true"></i> Continue Shoppping</button></Link>

</div>

  </WrapperNav>
  </>
  )
}
