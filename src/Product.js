import React from 'react'

function Product({ id, title, image, price, rating }) {
  return (
    <div className="flex flex-col items-center justify-end w-full bg-white z-10">
      <div className="h-12">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} className='w-full object-contain'/>

      <button className='bg-yellow-300 text-gray-900'>Add to Basket</button>
    </div>
  );
}

export default Product
