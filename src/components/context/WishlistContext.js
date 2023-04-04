import axios from "axios";
import { createContext,useContext,useState } from "react";
import { useFilterContext } from "./filterContext";


const WishlistContext = createContext();

const WishlistProvider =({children})=>{
    const encodedToken = localStorage.getItem("token");
    const [wishlistItems, setWishlistItems] = useState([]);
    const {dispatch} = useFilterContext();

    const addToWishlist = async(item)=>{
        try {
            const response = await axios.post("/api/user/wishlist",
            {product:item},
            {
                headers:{
                    authorization:encodedToken,
                },
            });
            if(response.status === 201){
                setWishlistItems(response.data.wishlist);
                dispatch({type:"SUCCESS_TOAST", payload:"Added To Wishlist"});

            }
        } catch (error) {
            console.log(error)
        }
    }

    const removeFromWishlist = async(item)=>{
       try{
           const response = await axios.delete(`/api/user/wishlist/${item._id}`,{
               headers:{
                   authorization:encodedToken,
               },
           })
           if(response.status === 200){
               setWishlistItems(response.data.wishlist);
               dispatch({type:"ERROR_TOAST",payload:"Removed from wishlist"})
           }
       } catch(error){
           console.log(error);
       }
    }

    return(
        <WishlistContext.Provider value={{wishlistItems,setWishlistItems, addToWishlist , removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlistContext =()=> useContext(WishlistContext);

export{WishlistProvider,useWishlistContext};