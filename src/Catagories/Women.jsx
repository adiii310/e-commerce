import React, { useState ,useEffect} from 'react'
import Utility from '../Components/Utility'
import { WomensWear } from './WomensWear';

const Women = ({getWomenData}) => {
  const [womensWearData, setWomensWearData] = useState(WomensWear);
  
  const LOCAL_STORAGE_KEY ='favWomen'

  useEffect(() => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localData) {
      const storedFavs = JSON.parse(localData);
      const updatedWomensWearData = womensWearData.map(item => {
        const favItem = storedFavs.find(fav => fav.id === item.id);
        return favItem ? { ...item, favorite: true } : item;
      });
      setWomensWearData(updatedWomensWearData);
    }
    // eslint-disable-next-line 
  }, []);

  const handleFav = (id, e) => {
    e.preventDefault();
    const updatedData = [...womensWearData];
    console.log('thisisi  id' + id)
    const itemIndex = updatedData.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      updatedData[itemIndex] = {
        ...updatedData[itemIndex],
        favorite: !updatedData[itemIndex].favorite,
      };
      const fav= updatedData.filter(item=> item.favorite)
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(fav))
      setWomensWearData(updatedData);
      sendData(updatedData)
    }
  };
  const sendData = (womensWearData) =>{
    getWomenData(womensWearData);
  }


  return (
    <>
      <Utility Incomingdata={womensWearData} handleFav={(id, e) => handleFav(id, e)} />
    </>

  )
}

export default Women