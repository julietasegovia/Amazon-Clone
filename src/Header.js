import React from 'react';

function Header() {
  return (
    <div className='bg-gray-900 w-full h-4'>
        <img src="./assets/amazon-logo.png"/>
        <div>
            <input type="text"/>
        </div>
        <div>
            <div>
                <span>Hello</span>
                <span>Sing In</span>
            </div>
            <div>
                <span>Returns</span>
                <span>& Orders</span>
            </div>
            <div>
                <span>Your</span>
                <span>Prime</span>
            </div>
        </div>
    </div>
  )
}

export default Header
