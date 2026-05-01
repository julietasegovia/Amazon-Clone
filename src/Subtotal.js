import React from 'react';
import { NumericFormat } from 'react-number-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
  
    return (
    <div className='flex flex-col justify-between w-[300px] h-[100px] p-8 bg-[#f3f3f3] border border-[#dddddd] rounded-3'>
      <NumericFormat
      renderText={(value) => (
        <>
        <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
        </p>
        <small className='flex items-center'>
            <input type="checkbox" className='mr-2'/> This order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />

      <button className='bg-[#f0c14b] border border-[#a88734] w-full h-[30px] text-[#111] rounded-2'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
