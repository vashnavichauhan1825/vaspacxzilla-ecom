import React from 'react'
import './filter.css'

export const FilterPanel = () => {
  return (
    <aside>
   <small>Main/<small>Catelog</small></small>
   <h1>Catalog</h1>
   <div className="brand">
       <p className="bold-white-text">Brand</p>
       <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
       <label for="vehicle1"> Celestron</label><br/>
       <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
       <label for="vehicle2"> Generic</label><br/>
       <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
       <label for="vehicle3"> Meade</label><br/>
       <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
       <label for="vehicle3"> Aomeike</label>
   </div>
   <div className="price-range">
    <p className="bold-white-text">Price Range</p>
    <div className="countdown bold-white-txt">
        <span>$30</span>
        <small>-</small>
        <span>$1200</span>
    </div>
  
  <input type="range" id="vol" name="vol" min="0" max="50"/>

</div>
<div className="brand">
    <p className="bold-white-text">Customer Review</p>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    <label for="vehicle1"> <i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label><br/>

    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
    <label for="vehicle2"> <i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label><br/>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle3"> <i className="fa fa-star r-color" aria-hidden="true"></i><i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label><br/>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle3"> <i className="fa fa-star r-color" aria-hidden="true"></i> & UP</label>
</div>
<div className="brand">
    <p className="bold-white-text">Category</p>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    <label for="vehicle1"> Books</label><br/>
    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
    <label for="vehicle2"> Astronomy</label><br/>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle3"> Home decor</label><br/>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle3"> clothes</label>
</div>
</aside>
  )
}
