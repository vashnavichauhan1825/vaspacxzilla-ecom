import React from 'react'
import {FourItem} from '../../../UI'
import { featureItem } from '../../../data'

const FourFeatOne = () => {
  return (
    <FourItem>
         {
             featureItem.map((item)=>
                <div className="product-display pointer">
                <img src={item.img}/>
                <small className="bold-grey-text">{item.title}</small>
                <small>{item.product}</small><br/>
                <small className="bold-white-txt">{item.price}</small>
            </div>  
             )
         }
    </FourItem>
  )
}

export default FourFeatOne