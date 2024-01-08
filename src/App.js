import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Product from "./Pages/Product"
import ProductDetails from "./Pages/ProductDetails";

import Men from "./Catagories/Men";
import Women from "./Catagories/Women";
import New from "./Catagories/New";

import './App.css';

function App() {
  const [api,setApi]= useState();
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setApi(json))
    },[])
    console.log(api);
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/new' element={<New/>} />



      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
