import React from 'react'

const ProductCard = ({ id, imageUrl, name, price }) => {
  return (
    <section className='ProductSection'>
      <div className='ProductItems' key={id}>
        <div className='ProductItems__Image'>
          <img src={imageUrl} alt='yyy' />
        </div>
        <span className='ProductItems__name'>{name}</span>
        <span className='ProductItems__price'>{price}</span>
      </div>
    </section>
  )
}

export default ProductCard
