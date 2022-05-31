import axios from 'axios';
import { ratingSorter } from 'components/reducer/filterFunctionality';
import { createContext,useContext,useState} from 'react';
import { useFilterContext } from './filterContext';


const cartContext = createContext();

const CartProvider =({children})=>{
    const encodedToken = localStorage.getItem("token")
    const [cartItems , setCartItems] = useState([]);
    const {dispatch}= useFilterContext();
    
    const addToCartHandler = async (item)=>{
        try {
            const response = await axios.post("/api/user/cart",
            {product: item},
            {
                headers:{
                    authorization:encodedToken,
                },
            });
            // if(response.status === 201){
            //     setCartItems(response.data.cart);
            //     dispatch({type:"ADD_TOAST",payload:"Added to Cart"})
            // }
        } catch (error) {
            console.log(error.response.data);
            
        }
    };

    const removeCartHandler = async (item)=>{
        try{
           const response = await axios.delete(`/api/user/cart/${item._id}`,{
               headers:{
                   authorization:encodedToken,
               }
           }) 
           if(response.status === 200){
               setCartItems((leftProducts)=>{
                   return leftProducts.filter((obj)=> obj.id !== item.id);

               })
               dispatch({type:"FAILED_TOAST",payload:"Removed from Cart"})
           }
        }catch(error){
            console.log(error);
        }
    };

    const changeQtyHandler = async (qty,id)=>{
        try {
            const response = await axios.post(
                `/api/user/cart/${id}`,
                {qty:qty,},
                {headers:{
                    authorization:encodedToken
                },}
            );
            if(response.status === 200){
                setCartItems(response.data.cart);
                dispatch({type:"ADD_TOAST",payload:"successful!"})
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
    <cartContext.Provider value={{cartItems,addToCartHandler,removeCartHandler,changeQtyHandler}}>
        {children}
    </cartContext.Provider>);
}

const useCartContext =()=> useContext(cartContext);

export{useCartContext,CartProvider};