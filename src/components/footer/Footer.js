import styled from "styled-components"
import ContactInfo from "./details/ContactInfo"
import HelpDetail from "./details/HelpDetail"
import ShopDetail from "./details/ShopDetail"
import Vaspacx from "./details/Vaspacx"
import React from "react"

const FooterCont = styled.div`
display: grid;
margin-top:2rem;
grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
height: auto;
background-color: var(--secbg-color);
line-height: 2;
`


const Footer = () => {
  return (
    <FooterCont>
       <Vaspacx/>
        <HelpDetail/>
        <ContactInfo/>
        <ShopDetail/>
    </FooterCont>
  )
}

export default Footer;