import React from 'react';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const[{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='flex mt-8 mb-8 border-b border-gray-200 pb-8 gap-4'>
            <img src={image} className='object-contain w-[180px] h-[180px]'/>
            <div>
                <p className='text-md font-bold'>{title}</p>
                <p className='mt-1'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='flex mt-1'>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <span key={i}>★</span>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket} className='bg-[#f0c14b] border mt-4 px-3 py-1 text-sm text-[#111] border-[#a88734] rounded'>
                        Remove from Cart
                    </button>
                )}
            </div>
        </div>
  )
}

export default CheckoutProduct