import React from 'react'
import Product from './Product/page';
import './Products.scss';
const Products = ({Title}) => {
  return (
    <div className="products-container">
        {<div className="section-heading">{Title}</div>}
        <div className="products">

          {  ( [0,1,2,4,5,6,7].map(()=>(
              
                
            <Product
            />
            
         
            
          )
          )) 
          }
        </div>
    </div>
  )
}

export default Products
