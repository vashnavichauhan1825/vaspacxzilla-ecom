import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Navbar, Slider } from '../../components'

 export const WrapperNav = ({children}) => {
  return (
    <Fragment>
      <Navbar/>
      {children}
    </Fragment>
  )
}

