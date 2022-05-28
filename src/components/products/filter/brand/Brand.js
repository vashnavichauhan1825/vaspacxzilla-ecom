import axios from "axios";
import { useState,useEffect } from "react";
import { useFilterContext } from "components/context/filterContext";


export const Brand =()=>{
    const {brands,dispatch}= useFilterContext()

    const [brandData , setBrandData] = useState([]);

    useEffect(()=>{
        (async function (){
            const {data} = await axios.get('./api/brands');
            setBrandData(data.brands)
        })();

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
             <div key={brand.key}>
            <input checked={brands[brand.value]?? false} onChange={(e)=> dispatch({type:'FILTER_BRAND', payload: e.target.value,})} type='checkbox' value={brand.value}/>
       <label >{brand.brandName}</label>
       </div>
         )
       })}
      </div> 
        </>
    )
}