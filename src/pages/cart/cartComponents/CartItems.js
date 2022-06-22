import { useCartContext } from "components/context/cartContext";
import { useFilterContext } from "components/context/filterContext";
import axios from "axios";

const CartItems = () => {
  const encodedToken = localStorage.getItem("token");
  const { cartProducts, removeFromCart, setCartProducts } = useCartContext();
  const { dispatch } = useFilterContext();

  const setCartQuantity = async (_id, operation) => {
    if (operation === "Increment") {
      try {
        const response = await axios.post(
          `/api/user/cart/${_id}`,
          {
            action: {
              type: "increment",
            },
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        if (response.status === 200) {
          console.log(response);
          setCartProducts(response.data.cart);
          dispatch({ type: "SUCCESS_TOAST", payload: "Updated !" });
          dispatch({ type: "CHANGE_QTY", payload: response.data.cart });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post(
          `/api/user/cart/${_id}`,
          {
            action: {
              type: "decrement",
            },
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        console.log(response.data.cart);
        setCartProducts(response.data.cart);
        dispatch({ type: "SUCCESS_TOAST", payload: "Updated !" });
        dispatch({ type: "CHANGE_QTY", payload: response.data.cart });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="cart-item">
      {cartProducts.map((products) => (
        <div className="cartitem-one" key={products._id}>
          <div className="item-name">
            <img src={products.image} alt={products.alt} />
            <ul>
              <li>{products.title}</li>
              <li>
                <small className="bold-grey-text">{products.category}</small>
              </li>
            </ul>
          </div>
          <span>

            {products.qty}

            <i
              onClick={() => setCartQuantity(products._id, "Increment")}
              className="fa fa-caret-up up"
              aria-hidden="true"
            ></i>
            {products.qty > 1 ? (
              <i
                onClick={() => setCartQuantity(products._id, "decrement")}
                className="fa fa-caret-down down"
                aria-hidden="true"
              ></i>
            ) : (
              <i
                className="fa fa-caret-down down"
                aria-hidden="true"
              ></i>
            )}
          </span>

          <div className="item-flex">
            <small>₹ {products.price*products.qty}</small>
            <i
              onClick={() => {
                removeFromCart(products);
              }}
              className="fa fa-times pointer remove-btn"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
