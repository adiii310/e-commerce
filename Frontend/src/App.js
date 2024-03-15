import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar, ProductDetails } from "./Components";
import { Cart, FavProduct, Home } from "./Pages";
import { Men, Women, New } from "./Catagories";
import { DataProvider, useData } from "./context/data.context";

function App() {
  const { AllProductData } = useData();
  return (
    <>
      <DataProvider value={{ AllProductData }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/men" element={<Men />} />
            <Route path="/men/:id" element={<ProductDetails />} />

            <Route path="/women" element={<Women />} />
            <Route path="/women/:id" element={<ProductDetails />} />

            <Route path="/new" element={<New />} />
            <Route path="/new/:id" element={<ProductDetails />} />

            <Route path="/fav" element={<FavProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
