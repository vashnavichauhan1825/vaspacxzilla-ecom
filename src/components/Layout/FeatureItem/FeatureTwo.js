import React from 'react'
import{ FourItem }from '../../../UI'
import { SecfeatItem } from '../../../data'

const FeatureTwo = () => {
  return (
   <FourItem>
        {
             SecfeatItem.map((item)=>
                <div className="product-display pointer">
                <img alt="image" src={item.img}/>
                <small className="bold-grey-text">{item.title}</small>
                <small>{item.product}</small><br/>
                <small className="bold-white-txt">{item.price}</small>
            </div>  
             )
         }
   </FourItem>
  )
}

export default FeatureTwo