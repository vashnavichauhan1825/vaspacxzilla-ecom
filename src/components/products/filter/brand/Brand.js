import axios from "axios";
import { useState,useEffect } from "react";
import { useFilterContext } from "components/context/filterContext";
import { useLocation } from "react-router-dom";

export const Brand =()=>{
    const {brands,dispatch}= useFilterContext()

    const [brandData , setBrandData] = useState([]);
const currentPath = useLocation();
    useEffect(()=>{
        (async function (){
            const {data} = await axios.get('./api/brands');
            setBrandData(data.brands)
        })();
     if(currentPath.hash !== ""){
        dispatch({type:"RESET"})
        dispatch({
            type:"FILTER_BRAND",
            payload:currentPath.hash.substring(1),
        })
     }

    },[])


    return (
        <>
        <div className="brand">
        <div className="contact-nav-btn">
        <p className="bold-white-text">Brand</p>
        <button className="bold-grey-text clear-btn" onClick={()=> dispatch({type:"RESET"})}><u>Clear All</u></button>
        </div>
      
       {brandData.map((brand)=>{
         return(
             <div key={brand._id}>
            <input checked={brands[brand.value]?? false} onChange={(e)=> dispatch({type:'FILTER_BRAND', payload: e.target.value,})} type='checkbox' value={brand.value}/>
       <label >{brand.brandName}</label>
       </div>
         )
       })}
      </div> 
        </>
    )
}