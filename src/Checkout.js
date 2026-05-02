import React from 'react'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='flex p-8 bg-gray-100 min-h-screen gap-6'>
            {/* Left — cart items */}
            <div className='flex-1'>
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    className='w-full mb-4'
                />
                <div className='bg-white p-4 rounded border border-gray-200'>
                    <h3 className='text-sm text-gray-600'>Hello, {user?.email ?? 'Guest'}</h3>
                    <h2 className='text-2xl font-bold border-b border-gray-200 pb-4 mb-2'>Your Shopping Cart</h2>
                    {basket.length === 0 ? (
                        <p className='text-gray-500 mt-4'>Your cart is empty.</p>
                    ) : (
                        basket.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    )}
                </div>
            </div>
            {/* Right — subtotal */}
            <div className='mt-[220px]'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout