import React from 'react'
import{ FourItem }from '../../../UI'
import { SecfeatItem } from '../../../data'
import { Link } from 'react-router-dom'

const FeatureTwo = () => {
  return (
   <FourItem>
        {
             SecfeatItem.map((item)=>

             <Link to="/catalog">
                <div key={item.id} className="product-display pointer">

                <div className="product-display pointer" key={item.id}>

                <img alt="image" src={item.img}/>
                <small className="bold-grey-text">{item.title}</small>
                <small>{item.product}</small><br/>
                <small className="bold-white-txt">{item.price}</small>
            </div> 
            </div>
            </Link> 
             )
         }
   </FourItem>
  )
}

export default FeatureTwo