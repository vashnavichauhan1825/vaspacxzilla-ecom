import React from 'react'
import './products.css'

const CatalogSort = () => {
  return (
    <div class="catalog-nav">
    
        <div class="contact-nav-btn">
            <button class="icon-button bold-grey-text"><i class="fa fa-bars" aria-hidden="true"></i></button>
            <button class="icon-button bold-grey-text"><i class="fa fa-th" aria-hidden="true"></i></button>
        </div>
   
<form>
    <select class="bold-grey-text">
      <option>Default Sorting</option>
      <option>Home Decor</option>
      <option>Telescope</option>
      <option>Other</option>
    </select>
    </form>
</div>
  )
}

export default CatalogSort