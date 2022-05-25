import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Navbar, Slider } from '../../components'

 const WrapperNav = ({children}) => {
  return (
    <Fragment>
      <Navbar/>
      {children}
    </Fragment>
  )
}


export default WrapperNav;