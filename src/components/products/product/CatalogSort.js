import React from 'react'
import './products.css'
import SortFilter from './sorting/SortFilter'

const CatalogSort = () => {
  return (
    <div className="catalog-nav">
    
        <div className="contact-nav-btn">
            <button className="icon-button bold-grey-text"><i className="fa fa-bars" aria-hidden="true"></i></button>
            <button className="icon-button bold-grey-text"><i className="fa fa-th" aria-hidden="true"></i></button>
        </div>
   
       <SortFilter/>
</div>
  )
}

export default CatalogSort