import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { getProductList } from "api";
function App() {
  // const [products, setProducts] = useState([]);
  // console.log(products);
  // const getProducts = async () => {
  //   const data = await getProductList();
  //   setProducts(data);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
