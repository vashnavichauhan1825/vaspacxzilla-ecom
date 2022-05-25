import React,{Fragment} from 'react'
import {Footer,FeatureProduct, ImgLayout,Newsletter,
  PopularCategory,Service, Navbar,Reviews,Slider} from '../../components'
import WrapperNav from '../../UI/wrapperNav/WrapperNav'

import './Home.css'

export const Home = () => {
  return (
   
   <WrapperNav>
        <Slider/>
        <Service/>
        <FeatureProduct/>
        <PopularCategory/>
        <ImgLayout/>
        <Reviews/>
        <Newsletter/>
        <Footer/>
    </WrapperNav>
    
  )
}

