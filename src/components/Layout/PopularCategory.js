import React,{Fragment} from 'react'
import { Card} from '../../UI'
import { popularItem } from '../../data'

export const PopularCategory = () => {
  return (
      <Fragment>
       <h2 className="heading-product">Popular Categories</h2>
    <Card> {
        popularItem.map((item)=>(
         <div className="pc-first" key={item.id}>
         <div className="flex-center-product">
             <img src={item.img}/>
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

