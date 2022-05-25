import React from 'react'
import styled from "styled-components";
import { FilterPanel } from './filter/FilterPanel'
import { Product } from './product/Product';


const CatalogSection =styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 1.5rem;
`
export const ProductSection = () => {
  return (
   <CatalogSection>
        <FilterPanel/>
        <Product/>
     </CatalogSection>
  )
}
