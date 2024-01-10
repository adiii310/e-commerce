import React,{useState} from 'react'
import Utility from '../Components/Utility'

const FavProduct = () => {
  const LOCAL_STORAGE_KEY = 'fav'
  const LOCAL_STORAGE_KEY2 = 'favWomen'
  const [localData1,setLocalData1]= useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
  const [localData2,setLocalData2]= useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2)))

  // const localData2= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2))
  console.log(localData1.length)
  console.log(localData2)

  const handleFav = (id, e) => {
    e.preventDefault();
    const updatedData = [...localData1];
    const itemIndex = updatedData.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      updatedData[itemIndex] = {
        ...updatedData[itemIndex],
        favorite: !updatedData[itemIndex].favorite,
      };
      const fav= updatedData.filter(item=> item.favorite)
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(fav))
      setLocalData1(updatedData);
      
    }
  };
  const handleFav2 = (id, e) => {
    e.preventDefault();
    const updatedData = [...localData2];
    const itemIndex = updatedData.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      updatedData[itemIndex] = {
        ...updatedData[itemIndex],
        favorite: !updatedData[itemIndex].favorite,
      };
      const fav= updatedData.filter(item=> item.favorite)
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(fav))
      setLocalData2(updatedData);
      
    }
  };

  return (
    <>
    
     <Utility Incomingdata={localData2} handleFav={(id, e) => handleFav2(id, e)} />
     <Utility Incomingdata={localData1} handleFav={(id, e) => handleFav(id, e)} />
    </>
  )
}

export default FavProduct