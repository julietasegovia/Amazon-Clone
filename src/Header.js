import React from 'react';
import loupe from './assets/loupe.png';
import cart from './assets/cart.png';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='bg-gray-900 w-full h-16 flex justify-around items-center'>
        <Link to="/">
            <img src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png" className='mt-2 h-10 cursor-pointer'/>
        </Link>
        <div className='w-3/5 flex items-center place-content-center'>
            <input type="text" className='pl-3 h-10 w-full rounded-l-md' placeholder="Search on Amazon"/>
            <div className='hover:bg-orange-400 rounded-r-md bg-orange-300 w-10 h-10 flex place-content-around cursor-pointer items-center'>
                <img src={loupe} className='w-7 h-7' />
            </div>
        </div>
        <div className='flex gap-10'>
            <div className='flex flex-col justify-center cursor-pointer'>
                <span className='text-gray-100 text-xs'>Hello Guest</span>
                <span className='text-gray-100 font-bold'>Sing In</span>
            </div>
            <div className='flex flex-col justify-center cursor-pointer'>
                <span className='text-gray-100 text-xs'>Returns</span>
                <span className='text-gray-100 font-bold'>& Orders</span>
            </div>
            <div className='flex flex-col justify-center cursor-pointer'>
                <span className='text-gray-100 text-xs'>Your</span>
                <span className='text-gray-100 font-bold'>Prime</span>
            </div>
            <Link to="/checkout">
                <div className='relative cursor-pointer w-9 h-9'>
                    <img src={cart} className='invert w-11 h-11' />
                    <span className='absolute top-1 left-4 text-orange-400 font-bold'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header