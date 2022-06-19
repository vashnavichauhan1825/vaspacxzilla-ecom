import axios from 'axios';
import { createContext, useState, useContext} from 'react';
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
    const {dispatch}=  useFilterContext();
    const {setCartProducts}= useCartContext();
    const {setWishlistItems} = useWishlistContext();
    const userInLocalStorage = localStorage.getItem('user')
    const tokenInLocalStorage = localStorage.getItem('token')
   
    const [user,setUser] = useState(userInLocalStorage?.user)
    const [token,setToken] = useState(tokenInLocalStorage?.token)

    const isUserLoggedIn = !!token
   
   
    const signUpHandler=async(formInfo)=>{
       
        const {firstName,email,password} = formInfo;
       console.log(firstName)
        try {
            const response =await axios.post("/api/auth/signup",{
                email:email,
                password:password,
                firstName:firstName,
            })
            
            if(response.status === 201){
                console.log("sucess",response);
                localStorage.setItem('token',response.data.encodedToken)
                localStorage.setItem('user',response.data.createdUser.firstName)
                setToken(response.data.encodedToken)
                setUser(response.data.createdUser)
                console.log('user',response.data.encodedToken)
            }
        } catch (error) {
            console.log(error)
        }   
     }
  
    const loginHandler =(token)=>{
        setToken(token)
     localStorage.setItem('token',token);
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