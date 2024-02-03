import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Footer, Navbar, ProductDetails,Utility} from "./Components/index"
import {Cart,FavProduct,Home} from "./Pages/index"

import { Menswear } from "./Data/Menswear";
import { WomensWear } from "./Data/WomensWear";
import { NewWear } from "./Data/NewWear";
import Men from './Catagories/Men';
import Women from './Catagories/Women';
import New from './Catagories/New';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/men' element={<Men Incomingdata={Menswear} />} />
          <Route path="/men/:id" element={<ProductDetails Localdata={Menswear} />} />

          <Route path='/women' element={<Women Incomingdata={WomensWear} />} />
          <Route path="/women/:id" element={<ProductDetails Localdata={WomensWear} />} />

          <Route path='/new' element={<New Incomingdata={NewWear} />}/>
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
