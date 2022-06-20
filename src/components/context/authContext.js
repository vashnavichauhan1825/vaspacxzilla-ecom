import axios from 'axios';
import { createContext, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from './cartContext';
import { useFilterContext } from './filterContext';
import { useWishlistContext } from './WishlistContext';


const authContext = createContext({
    token:'',
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{},
    signup:()=>{},
});

const AuthProvider =({children})=>{
    const navigate = useNavigate();
    const {dispatch}=  useFilterContext();
    const {setCartProducts}= useCartContext();
    const {setWishlistItems} = useWishlistContext();
    const userInLocalStorage = localStorage.getItem('user')
    const tokenInLocalStorage = localStorage.getItem('token')
   
    const [user,setUser] = useState(userInLocalStorage?.user)
    const [token,setToken] = useState(tokenInLocalStorage?.token)

    const isUserLoggedIn = !!token
   
   
    const signUpHandler=async(formInfo)=>{
       
     
       console.log(formInfo)
        try {
            const response =await axios.post("/api/auth/signup",{
              ...formInfo
            })
            
            if(response.status === 201){
               
                 navigate('/signin')
                 console.log(response)
               
            }
        } catch (error) {
            console.log(error)
        }   
     }
  
    const loginHandler =async(formInfo)=>{
        console.log("logiiin",formInfo);
        try {
          
            const responseData  = await axios.post('/api/auth/login', {
            ...formInfo
            });
            console.log(responseData)
          if(responseData.status === 200){
            localStorage.setItem("token", responseData.data.encodedToken);
            localStorage.setItem("user", responseData.data.foundUser.firstName);
            dispatch({ type: "SUCCESS_TOAST", payload: "Log In Successful" });
          }
            
          } catch (error) {
            dispatch({ type: "ERROR_TOAST", payload: error.response.data.errors });
            console.log(error)
          }
  }
    const logoutHandler=()=>{
        
        localStorage.clear();
        setToken(null);
        dispatch({ type: "ERROR_TOAST", payload: "Logged Out" });
        setCartProducts([]);
        setWishlistItems([]);
    }

    const contextValue={
        token:token,
        isLoggedIn:isUserLoggedIn,
        login:loginHandler,
        signup:signUpHandler,
        logout:logoutHandler,
        user:user,
    }

   
    return(
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>
    )
}

const useAuthCtx =()=>useContext(authContext);

export {useAuthCtx,AuthProvider}