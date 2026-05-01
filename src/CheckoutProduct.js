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
        <div className='flex mt-8 mb-8'>
            <div className='pl-8'>
                <p className='text-md font-bold'>{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p className='flex'>★</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket} className='bg-[#f0c14b] border mt-4 text-[#111] border-[#a88734]'>Remove from Cart</button>
                )}
            </div>
            <img src={image} className='object-contain w-[180px] h-[180px]'/>
        </div>
  )
}

export default CheckoutProduct
