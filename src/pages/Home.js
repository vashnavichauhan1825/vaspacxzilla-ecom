import React,{Fragment} from 'react'
import {Footer,FeatureProduct, ImgLayout,Newsletter,
  PopularCategory,Service, Navbar,Reviews,Slider} from '../components'
import './Home.css'

const Home = () => {
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

export default Home