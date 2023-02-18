import React from 'react'
import {PRODUCTS} from '../../products'
import {Product} from './Product'
import './shop.css'
function Shop() {
  return (
    <div className='shop'>
        <div className='shopeTitle'>
            <h1>AlexTech Shope</h1>
        </div>
        <div className='products'>{ PRODUCTS.map((product)=><Product data={product} key={product.id} />)}</div>

        <button className='addToCartBttn'>Add to Cart</button>
    </div>
  )
}

export default Shop