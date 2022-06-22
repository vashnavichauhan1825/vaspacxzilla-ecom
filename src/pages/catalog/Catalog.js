import { useVaspacxTitle } from 'components/DocumentTitle/useVaspacxTitle'
import { Toast } from 'components/Toast/Toast'
import React from 'react'
import { ProductSection } from '../../components'
import{ WrapperNav} from '../../UI'
import './catalog.css'

export const Catalog = () => {
  useVaspacxTitle('Catalog')
  return (
   <WrapperNav>
   <Toast/>
    <ProductSection/>
   </WrapperNav>
  )
}
