import { useFilterContext } from 'components/context/filterContext'
import React from 'react'
import { Brand } from './brand/Brand'
import CategoryFilter from './category/CategoryFilter'
import './filter.css'
import Price from './Price/Price'

export const FilterPanel = () => {
  // const {sidebar} = useFilterContext();
  return (
    <aside>
   <small>Main/<small>Catelog</small></small>
   <h1>Catalog</h1>
  <Brand/>
  <Price/>
<div className="brand">
    <p className="bold-white-text">Customer Review</p>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    <label htmlFor="vehicle1"> <i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label><br/>

    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
    <label htmlFor="vehicle2"> <i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label><br/>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label htmlFor="vehicle3"> <i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label><br/>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label htmlFor="vehicle3"> <i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label>
</div>
  <CategoryFilter/>
</aside>
  )
}
