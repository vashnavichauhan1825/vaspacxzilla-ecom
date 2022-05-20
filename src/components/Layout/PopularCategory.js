import React,{Fragment} from 'react'
import Card from '../../UI/Card'
import { popularItem } from '../../data'

const PopularCategory = () => {
  return (
      <Fragment>
       <h2 class="heading-product">Popular Categories</h2>
    <Card> {
        popularItem.map((item)=>(
         <div className="pc-first">
         <div className="flex-center-product">
             <img src={item.img}/>
             {console.log(item.img)}
         </div>
         
             <ul>
                 <li>{item.title}</li>
                 <li className="bold-grey-text pointer"><small>{item.listOne}</small></li>
                 <li className="bold-grey-text pointer"><small>{item.listTwo}</small></li>
                 <li className="bold-grey-text pointer"><small>{item.listThree}</small></li>
                 <li className="bold-grey-text pointer"><small>{item.listFour}</small></li>
                 <li className='pointer'><small>Show All <i className="fa fa-angle-right" aria-hidden="true"></i></small></li>
             </ul>
         
     </div>
        ))
    }</Card>
    </Fragment>
  )
}

export default PopularCategory