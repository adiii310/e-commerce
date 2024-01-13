import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Utility = ({ Incomingdata, handleFav }) => {
    const navigate = useNavigate();
    // eslint-disable-next-line
    const text = 'checking ......'



    const handleCart = (e, id, key) => {
        e.preventDefault();
        const existingCartItem = JSON.parse(localStorage.getItem(key)) || []
        const itemExsist = existingCartItem.filter(item => item.id === id).length === 1

        const selectedItem = Incomingdata.filter(item => item.id === id);

        const updatedData = [...existingCartItem, ...selectedItem];
        if (!itemExsist) {
            console.log(updatedData)
            localStorage.setItem(key, JSON.stringify(updatedData))
        }else{
            console.log('item Already Added')
        }
    }

    const data = Incomingdata.map(item => (
        <li key={item.id} className={` w-[48%] md:w-[19%] h-80 mx-[2px] md:mx-1 my-1 border-[1px] border-black `} >
            <Link to={`/${item.category}/${item.id}`}>

                <div className={`w-full h-full relative  cursor-pointer  overflow-hidden `} >
                    <i className={`fa-solid fa-heart ${item.favorite ? 'text-red-500' : 'text-black'} absolute right-0 mx-1 text-bolder  `} onClick={(e) => handleFav(item.id, e)}></i>
                    <img src={item.imgUrl} alt={item.alt} className={`w-full h-[75%] object-cover  md:object-contain`} />
                    <div className={`  h-[40%] w-full px-2 bg-white overflow-clip absolute -bottom-12 hover:-bottom-2  duration-500 `}>
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
                        <div className='flex'>
                            <div className='p-1 my-2 mx-1 bg-red-500 w-[48%] text-sm font-semibold border-2 border-transparent  hover:border-black' onClick={(e) => { handleCart(e, item.id, 'cart') }}>
                                Add to cart
                            </div>
                            <div className='my-2 mx-1 p-1 bg-blue-500 w-[48%] text-sm font-semibold border-2 border-transparent  hover:border-black'>
                                BuyNow
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

        </li>
    ))
    return (
        <div> <ul className='flex flex-wrap  my-2  w-screen h-auto'>
            {data}

        </ul></div>
    )
}

export default Utility