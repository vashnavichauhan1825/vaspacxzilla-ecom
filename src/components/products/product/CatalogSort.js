import React from 'react'
import './products.css'
import SortFilter from './sorting/SortFilter'

const CatalogSort = () => {
  return (
    <div class="catalog-nav">
    
        <div class="contact-nav-btn">
            <button class="icon-button bold-grey-text"><i class="fa fa-bars" aria-hidden="true"></i></button>
            <button class="icon-button bold-grey-text"><i class="fa fa-th" aria-hidden="true"></i></button>
        </div>
   
       <SortFilter/>
</div>
  )
}

export default CatalogSort