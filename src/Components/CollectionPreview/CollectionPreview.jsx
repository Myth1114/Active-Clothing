import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
const CollectionPreview = ({ items, title, id }) => {
  return (
    <section className='CollectionPreview' key={id}>
      <h1>{title}</h1>
      <div className='CollectionPreview__Items'>
        {items
          .filter((el, idx) => idx < 4)
          .map(({ id, ...OtherData }) => {
            return (
              <div className='CollectionPreview__Card'>
                <ProductCard key={id} {...OtherData} />
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default CollectionPreview
