import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Product from "./Pages/Product"
import ProductDetails from "./Components/ProductDetails";

import Men from "./Catagories/Men";
import Women from "./Catagories/Women";
import New from "./Catagories/New";

import './App.css';
import { Menswear } from "./Catagories/Menswear";

function App() {
  const [mensWearData,setMensWearData] = useState(Menswear)

  const LOCAL_STORAGE_KEY = 'fav'
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
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path="/men/:id" element={<ProductDetails handleFav={(id,e)=>handleFav(id,e)}/>} />
        <Route path='/men' element={<Men handleFav={(id,e)=>handleFav(id,e)}/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/new' element={<New/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
