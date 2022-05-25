import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Footer, Navbar, Slider } from '../../components'

 export const WrapperNav = ({children}) => {
  return (
    <Fragment>
      <Navbar/>
      {children}
      <Footer/>
    </Fragment>
  )
}

