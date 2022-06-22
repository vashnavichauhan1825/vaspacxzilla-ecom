import React from 'react'
import {FourItem} from '../../../UI'
import { featureItem } from '../../../data'
import { Link } from 'react-router-dom'

const FourFeatOne = () => {
  return (
    <FourItem>
         {
             featureItem.map((item)=>

             <Link to="/catalog">
                <div key={item.id} className="product-display pointer">

                <div className="product-display pointer" key={item.id}>

                <img src={item.img}/>
                <small className="bold-grey-text">{item.title}</small>
                <small>{item.product}</small><br/>
                <small className="bold-white-txt">{item.price}</small>
            </div>  
            </Link>
             )
         }
    </FourItem>
  )
}

export default FourFeatOne