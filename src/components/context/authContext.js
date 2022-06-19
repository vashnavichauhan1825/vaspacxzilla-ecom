import { createContext, useState, useContext} from 'react';



const authContext = createContext({
    token:'',
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{},
});

const AuthProvider =({children})=>{
    const [token , setToken ]= useState(null);

    const isUserLoggedIn = !!token
    const loginHandler =(token)=>{
          setToken(token)
    }

    const logoutHandler=()=>{
        setToken(null)
    }

    const contextValue={
        token:token,
        isLoggedIn:isUserLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
    }

    return(
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>
    )
}

const useAuthCtx =()=>useContext(authContext);

export {useAuthCtx,AuthProvider}