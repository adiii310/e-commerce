import React, { useState ,useEffect} from 'react'
import Utility from '../Components/Utility'
import { WomensWear } from '../Data/WomensWear';

const Women = () => {
  
  return (
    <>
      <Utility Incomingdata={WomensWear} />
    </>

  )
}

export default Women