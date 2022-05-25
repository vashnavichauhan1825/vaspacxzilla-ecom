import React,{Fragment} from 'react'
import SpecialProduct from '../../UI/SpecialProduct'
import FeatureTwo from './FeatureItem/FeatureTwo'
import FourFeatOne from './FeatureItem/FourFeatOne'
import SpecialCountdown from './FeatureItem/SpecialCountdown'

const FeatureProduct = () => {
  return (
   <Fragment>
   <h2 className="heading-product">Featured Products</h2>
   <SpecialProduct>
       <FourFeatOne/>
       <SpecialCountdown/>
       <FeatureTwo/>
   </SpecialProduct>
   </Fragment>
  )
}

export default FeatureProduct