import React from 'react'
import './FourItem.css'
const FourItem = (props) => {
  return (
    <div className='four__item'>
        {props.children}
    </div>
  )
}

export default FourItem