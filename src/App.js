import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import ProductDetails from "./Components/ProductDetails";

import Men from "./Catagories/Men";
import Women from "./Catagories/Women";
import New from "./Catagories/New";

import './App.css';
import { Menswear } from "./Catagories/Menswear";
import { WomensWear } from "./Catagories/WomensWear";
import FavProduct from "./Pages/FavProduct";

function App() {

  const [mensWearData, setMensWearData] = useState(Menswear);
  const [womensWearData, setWomensWearData] = useState(WomensWear);


  const LOCAL_STORAGE_KEY = 'fav'
  const LOCAL_STORAGE_KEY2 = 'favWomen'


  const fav = localStorage.getItem(LOCAL_STORAGE_KEY);
  useEffect(() => {
    const localData=fav
    if (localData) {
      const storedFavs = JSON.parse(localData);
      const updatedMensWearData = mensWearData.map(item => {
        const favItem = storedFavs.find(fav => fav.id === item.id);
        return favItem ? { ...item, favorite: true } : item;
      });
      setMensWearData(updatedMensWearData);
    }
  }, [fav]);

  const womenFav = localStorage.getItem(LOCAL_STORAGE_KEY2);
  useEffect(() => {
    const localData=womenFav
    if (localData) {
      const storedFavs = JSON.parse(localData);
      const updatedWomensWearData = womensWearData.map(item => {
        const favItem = storedFavs.find(fav => fav.id === item.id);
        return favItem ? { ...item, favorite: true } : item;
      });
      setWomensWearData(updatedWomensWearData);
    }
  }, [womenFav]);

  const getMenData = (data) => {
    setMensWearData(data);
  }
  const getWomenData = (data) => {
    setWomensWearData(data);
  }

  return (
    <>
      <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/men/:id" element={<ProductDetails Localkey={LOCAL_STORAGE_KEY} Localdata={mensWearData} />} />
          <Route path='/men' element={<Men getMenData={getMenData} />} />
          <Route path='/women' element={<Women getWomenData={getWomenData} />} />
          <Route path="/women/:id" element={<ProductDetails Localkey={LOCAL_STORAGE_KEY2} Localdata={womensWearData} />} />
          <Route path='/new' element={<New />} />
          <Route path='/fav' element={<FavProduct />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
