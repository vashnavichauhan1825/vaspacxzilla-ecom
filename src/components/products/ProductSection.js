import React from 'react'
import styled from "styled-components";
import { FilterPanel } from './filter/FilterPanel'
import { ProductCard } from './product/ProductCard';


const CatalogSection =styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: 1.5rem;
`
export const ProductSection = () => {
  return (
   <CatalogSection>
        <FilterPanel/>
        <ProductCard/>
     </CatalogSection>
  )
}
