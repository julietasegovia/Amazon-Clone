import React from 'react'
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();
  
  const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

  return (
    <div className="z-100 flex flex-col items-center justify-between bg-white z-10 p-5" style={{ width: '600px' }}>
      <div className="w-full">
        <p>{title}</p>
        <p className="mt-1">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>★</p>
            ))}
        </div>
      </div>

      <img src={image} className="w-full object-contain mb-4" style={{ maxHeight: '300px' }} />

      <button onClick={addToBasket} className="bg-[#f0c14b] text-gray-900 border border-[#a88734] mt-3 w-full py-1" style={{maxWidth: '250px'}}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product