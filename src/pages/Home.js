import React,{Fragment} from 'react'
import FeatureProduct from '../components/Layout/FeatureProduct'
import ImgLayout from '../components/Layout/ImgLayout'
import PopularCategory from '../components/Layout/PopularCategory'
import Service from '../components/Layout/Service'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
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
    </Fragment>
  )
}

export default Home