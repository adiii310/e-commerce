import React from 'react'
import { useCart } from '../hooks';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItem, removeCartItem } = useCart()

  let count = 0;
  const result = cartItem.map(item => <li key={item.id}>
    <div className='bg-white my-1 py-1 flex '>
      <div className={`w-40 h-40 border-2 border-transparent hover:border-gray-500`}>
        <img src={item.imgUrl} alt={item.alt} className={`w-full h-full object-contain`} />
      </div>
      <div >
        <div className='flex items-center my-1'>
          <b className='font-bold text-sm inline-block '>
            {item.brand}
          </b>
          {
            item.verified ?
              <img src="https://freepngimg.com/thumb/facebook/107727-verified-badge-facebook-png-image-high-quality.png" alt='hii' className='w-5 h-5  object-cover' /> :
              <div className='w-5 h-5 mx-1'></div>
          }
        </div>
        <p className={`my-1 text-xs text-nowrap font-normal  font-['Roboto']  overflow-clip text-clip`}>{item.productName}</p>
        <div>
          <span className={`text-xs`}>${item.SellingPrice}</span>
          <span className={`text-xs mx-2 text-gray-500 `}><strike>${item.OrignalPrice}</strike> </span>
          <span className={`text-xs  text-green-700 font-bold `}>{Math.floor(((item.OrignalPrice - item.SellingPrice) / item.OrignalPrice) * 100)}% Off </span>

        </div>
        <div >
          <span className=''>Qnt</span>
          <button className='bg-white hover:bg-black text-black hover:text-white p-1 text-xs font-extrabold border-[1px] border-black mx-1 drop-shadow-2xl'>+</button>{count}
          <button className='bg-white hover:bg-black text-black hover:text-white p-1 text-xs font-extrabold border-[1px] border-black mx-1 drop-shadow-2xl'>-</button>
        </div>
        <button className='bg-red-500 my-1 rounded-md p-1 text-xs text-white tracking-wide font-semibold' onClick={() => removeCartItem(item.id)}>Remove Item</button>
      </div>

    </div>
  </li>);
  const sum = cartItem.reduce((acc, item) => acc + parseInt(item.SellingPrice, 10), 0);
  const Orignal = cartItem.reduce((acc, item) => acc + parseInt(item.OrignalPrice, 10), 0);

  return (
    <>
      <div>
        <ul>
          {result}
        </ul>
        {sum !== 0 ?
          <div className='bg-orange-600 sticky bottom-1 left-full w-1/2 text-center text-white font-semibold tracking-wider p-1'>Place order ({cartItem.length})</div> :
          <Link to='/'>
            <div className='bg-orange-600 mt-1 sticky bottom-1 left-full w-full text-center text-white font-semibold tracking-wider p-1'>Go For Shopping(cart empty)</div>

          </Link>

        }
      </div>
      <div id='bill' className='w-full bg-gray-200 my-2 p-2 '>
        <div className=''>Orignal Pice {Orignal}</div>
        <div className=''>Saved Money -{Orignal-sum}</div>

        <div className=''>Your Bill {sum}</div>


      </div>
    </>


  )
}

export default Cart