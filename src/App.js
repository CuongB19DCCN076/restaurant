import "./App.css";

import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Products from "./component/Products";
import About from "./component/About";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Cart from "./component/Cart";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
        
              <Products />
          
          }
        />
        <Route
          path="/products/:id"
          element={
        
              <Product />
          
          }
        />
        <Route
          path="/about"
          element={
              <About />
          }
        />
        <Route
          path="/contact"
          element={
              <Contact />
          }
        />
        <Route
          path="/cart"
          element={
        
              <Cart />
          
          }
        />
      </Routes>
    </>
  );
}

export default App;
