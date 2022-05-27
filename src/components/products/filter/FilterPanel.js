import { useFilterContext } from 'components/context/filterContext'
import React from 'react'
import { Brand } from './brand/Brand'
import CategoryFilter from './category/CategoryFilter'
import './filter.css'
import Price from './Price/Price'
import RatingFilter from './rating/RatingFilter'

export const FilterPanel = () => {
 
  return (
    <aside>
   <small>Main/<small>Catelog</small></small>
   <h1>Catalog</h1>
  <Brand/>
  <Price/>
  <RatingFilter/>
  <CategoryFilter/>
</aside>
  )
}
