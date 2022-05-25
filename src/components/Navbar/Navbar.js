import React,{Fragment} from 'react'
import CategoryNav from './NavbarItem/CategoryNav'
import InfoNav from './NavbarItem/InfoNav'
import MainNav from './NavbarItem/MainNav';

export const Navbar = () => {
  return (
      <Fragment>
         <InfoNav/>
         <MainNav/>
         <CategoryNav/>
      </Fragment>
  )
}

