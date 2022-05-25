import React from 'react'
import './Card.css'

const SpecialProduct = (props) => {
  return (
    <div className='three-grid__cont'>{props.children}</div>
  )
}

export default SpecialProduct