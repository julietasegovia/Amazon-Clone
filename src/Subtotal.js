import React from 'react';
import { NumericFormat } from 'react-number-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();
  
    return (
    <div className='flex flex-col w-[300px] p-6 bg-[#f3f3f3] border border-[#dddddd] rounded gap-4'>
      <p>
        Subtotal ({basket.length} items):{' '}
        <strong>
          <NumericFormat
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
            decimalScale={2}
            fixedDecimalScale
          />
        </strong>
      </p>
      <small className='flex items-center'>
        <input type="checkbox" className='mr-2'/> This order contains a gift
      </small>
      <button
        onClick={() => navigate('/payment')}
        className='bg-[#f0c14b] border border-[#a88734] w-full py-1 text-[#111] rounded'>
          Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal