
import { Toast } from 'components/Toast/Toast'
import {FeatureProduct, ImgLayout,Newsletter,
  PopularCategory,Service,Reviews,Slider} from '../../components'
import{ WrapperNav} from '../../UI'
import './Home.css'

export const Home = () => {

  return (
   <>
   <Toast/>
   <WrapperNav>
        <Slider/>
        <Service/>
        <FeatureProduct/>
        <PopularCategory/>
        <ImgLayout/>
        <Reviews/>
        <Newsletter/>
    </WrapperNav>
    </>
  )
}

