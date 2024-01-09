import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Menswear } from '../Catagories/Menswear'

const ProductDetails = () => {
  const param = useParams();

  const LOCAL_STORAGE_KEY = 'fav'

  const [mensWearData, setMensWearData] = useState(Menswear);
  useEffect(() => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localData) {
      const storedFavs = JSON.parse(localData);
      const updatedMensWearData = mensWearData.map(item => {
        const favItem = storedFavs.find(fav => fav.id === item.id);
        return favItem ? { ...item, favorite: true } : item;
      });
      setMensWearData(updatedMensWearData);
    }
  }, []);

  const handleFav = (id, e) => {
    e.preventDefault();
    const updatedData = [...mensWearData];
    const itemIndex = updatedData.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      updatedData[itemIndex] = {
        ...updatedData[itemIndex],
        favorite: !updatedData[itemIndex].favorite,
      };
      const fav = updatedData.filter(item => item.favorite)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(fav))
      setMensWearData(updatedData);

    }
  };

  const data = mensWearData.filter(item => item.id === param.id)
  const result = data.map(item => (
    <li key={item.id} className={` w-[100%] md:w-[19%] h-90   md:mx-1 my-1 border-[1px] `} >
      <div className={`w-full h-full relative  cursor-pointer overflow-hidden  `} >
        <i className={`fa-solid fa-heart ${item.favorite ? 'text-red-500' : 'text-black'} text-2xl absolute right-2 top-2 mx-1 text-bolder `} onClick={(e) => handleFav(item.id, e)} ></i>

        <img src={item.imgUrl} alt={item.alt} className={`w-full h-[75%] object-contain `} />

      </div>
      <div className={`  h-[30%] w-full px-2 bg-white overflow-clip hover:bottom-0  duration-500 `}>
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
      </div>

    </li>
  ))
  console.log(data)
  return (
    <div>
      <ul>
        {result}
      </ul>
    </div>
  )
}

export default ProductDetails