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
       <p className="bold-white-text">Brand</p>
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