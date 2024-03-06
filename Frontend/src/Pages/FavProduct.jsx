import React, { useState } from 'react'
import Utility from '../Components/Utility'
import { useFav } from '../hooks'

const FavProduct = () => {
 const  { handleFav, favourite,inFav } = useFav();

  return (
    <>
      {
 // eslint-disable-next-line
        (favourite.length == 0 ) ?
          (<h2>No Favourate products avilable</h2>) :
          (<>
            <Utility Incomingdata={favourite} handleFav={(id, e) => handleFav(id, e)} />
          </>
          )
      }

    </>
  )
}

export default FavProduct