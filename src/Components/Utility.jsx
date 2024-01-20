import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useFav , useCart} from '../hooks';



const Utility = ({ Incomingdata} ) => {
    const navigate = useNavigate();
    const [zoomedId, setZoomedId] = useState(null);

    const {handleFav,inFav} = useFav()
    const {inCart,handleCart} = useCart()



    const data = Incomingdata.map(item => (
        <li key={item.id} className={` w-[48%] md:w-[19%] h-80 mx-[2px] md:mx-1 my-1 border-[1px] border-black `} >
            <Link to={`/${item.category}/${item.id}`}>

                <div className={`w-full h-full relative  cursor-pointer  overflow-hidden `} >
                    <div className='bg-white w-full  relative top-0 flex justify-between'>
                    <i
                        className={`fa-solid ${inCart(item.id) ? 'fa-check ' : 'fa-plus '} duration-1000    mx-1 text-bolder transform ${zoomedId === item.id ? 'scale-125' : ''}`}
                        onClick={(e) => {
                            handleCart(e, item.id,Incomingdata);
                            setZoomedId(item.id); 
                            setTimeout(() => setZoomedId(null), 500);
                        }}
                    ></i>


                    <i
                        className={`fa-solid fa-heart ${inFav(item.id) ? 'text-red-500' : 'text-black'}  mx-1 text-bolder  `}
                        onClick={(e) => handleFav(e,item.id,item)}

                    ></i>
                    </div>

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
                            <div className={`p-1 my-2 mx-1 ${inCart(item.id) ? 'bg-red-300' : 'bg-red-500'} w-[48%] text-sm sm:text-xs font-semibold border-2 border-transparent  hover:border-black`} onClick={(e) => { handleCart(e, item.id, 'cart') }}>
                                {inCart(item.id) ? "Added In Cart" : "Add To Cart"}
                            </div>
                            <div className='my-2 mx-1 p-1 bg-blue-500 w-[48%] text-sm sm:text-xs font-semibold border-2 border-transparent  hover:border-black'>
                                BuyNow
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

        </li>
    ))
    return (
        <div> <ul className='flex flex-wrap  my-2  w-full min-h-screen'>
            {data}

        </ul></div>
    )
}

export default Utility