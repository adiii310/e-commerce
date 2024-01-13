import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Cart = () => {
  const location = useLocation();
  const [cartItem, setCartItem] = useState([]);
  const count = 0;
  useEffect(() => {
    const localData = localStorage.getItem('cart');
    if (localData) {
      const cartItem = JSON.parse(localData);
      setCartItem(cartItem)
    }
    // eslint-disable-next-line 
  }, []);

  const removeCartItem = (id) =>{
    const removedItem = cartItem.filter(item=> item.id != id);
    localStorage.setItem('cart',JSON.stringify(removedItem))
    setCartItem(removedItem);
  }
  const result = cartItem.map(item => <li key={item.id}>
    <div className='bg-white my-1 py-1 flex '>
      <div className={`w-40 h-40 border-2 border-transparent hover:border-gray-500`}>
        <img src={item.imgUrl} alt={item.alt} className={`w-full h-full object-contain`} />
      </div>
      <div >
        <div className='flex items-center my-1'>
          <b className='font-bold text-sm inline-block text-gray-400'>
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
          <button className='bg-white hover:bg-black text-black hover:text-white p-1 text-xs font-extrabold border-[1px] border-black mx-1'>+</button>{count}
          <button className='bg-white hover:bg-black text-black hover:text-white p-1 text-xs font-extrabold border-[1px] border-black mx-1'>-</button>
        </div>
        <button className='bg-red-500 my-1 rounded-md p-1 text-xs text-white tracking-wide font-semibold' onClick={()=>removeCartItem(item.id)}>Remove Item</button>
      </div>

    </div>
  </li>);
  return (
    <>
      <div>
        <ul>
          {result}
        </ul>
      </div>
    </>


  )
}

export default Cart