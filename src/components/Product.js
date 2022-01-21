import React from 'react'
import '../css/product.css';

export default function Product({id, title, price, rating, image}) {
  return (
    <div className='product'>
      <p>{title}</p>
      <p className='product_price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className='product_rating'>
          {
              Array(rating)
              .fill()
              .map((_)=>{
                  <p>⭐</p>
              })
          }
      </div>
    </div>
    
  )
}
