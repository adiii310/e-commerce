import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Menswear } from './Menswear'
import Utility from '../Components/Utility'

const Men = () => {
  const [mensWearData, setMensWearData] = useState(Menswear);
  const handleFav = (id, e) => {
    e.preventDefault();
    const updatedData = [...mensWearData];
    const itemIndex = updatedData.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      updatedData[itemIndex] = {
        ...updatedData[itemIndex],
        favorite: !updatedData[itemIndex].favorite,
      };
      setMensWearData(updatedData);
    }
  };


  return (
    <>
      <Utility Incomingdata={mensWearData} handleFav={(id, e) => handleFav(id, e)} />
    </>

  )
}

export default Men