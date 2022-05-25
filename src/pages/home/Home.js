import React,{Fragment} from 'react'
import {Footer,FeatureProduct, ImgLayout,Newsletter,
  PopularCategory,Service, Navbar,Reviews,Slider} from '../../components'
import './Home.css'

export const Home = () => {
  return (
    <Fragment>
        <Navbar/>
        <Slider/>
        <Service/>
        <FeatureProduct/>
        <PopularCategory/>
        <ImgLayout/>
        <Reviews/>
        <Newsletter/>
        <Footer/>
    </Fragment>
  )
}

