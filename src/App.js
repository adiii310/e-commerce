import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import ProductDetails from "./Components/ProductDetails";

import Men from "./Catagories/Men";
import Women from "./Catagories/Women";
import New from "./Catagories/New";
import FavProduct from "./Pages/FavProduct";
import Cart from "./Pages/Cart";

import './App.css';
import { Menswear } from "./Catagories/Menswear";
import { WomensWear } from "./Catagories/WomensWear";
import { NewWear } from "./Catagories/NewWear";


function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/men' element={<Men />} />
          <Route path="/men/:id" element={<ProductDetails Localdata={Menswear} />} />
          <Route path='/women' element={<Women />} />
          <Route path="/women/:id" element={<ProductDetails Localdata={WomensWear} />} />
          <Route path='/new' element={<New />} />
          <Route path="/new/:id" element={<ProductDetails Localdata={NewWear} />} />

          <Route path='/fav' element={<FavProduct />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
