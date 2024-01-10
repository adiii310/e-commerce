import React, { useState ,useEffect} from 'react'
import { Menswear } from './Menswear'
import Utility from '../Components/Utility'

const Men = ({getMenData}) => {
  const [mensWearData, setMensWearData] = useState(Menswear);
  
  const LOCAL_STORAGE_KEY ='fav'


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
      const fav= updatedData.filter(item=> item.favorite)
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(fav))
      setMensWearData(updatedData);
      sendData(updatedData)
      
    }
  };

  const sendData = (mensWearData) =>{
    getMenData(mensWearData);
  }


  return (
    <>
      <Utility Incomingdata={mensWearData} handleFav={(id, e) => handleFav(id, e)} />
    </>

  )
}

export default Men