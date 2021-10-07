import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
const CollectionPreview = ({ items, title }) => (
  <section className='CollectionPreview'>
    <h1>{title}</h1>
    <div className='CollectionPreview__Items'>
      {items
        .filter((el, idx) => idx < 4)
        .map((item) => {
          return (
            <div className='CollectionPreview__Card'>
              <ProductCard key={item.id} item={item} />
            </div>
          )
        })}
    </div>
  </section>
)

export default CollectionPreview
