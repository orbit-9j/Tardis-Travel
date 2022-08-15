import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/style.css";
import { useState } from "react";

import destinations from "./destinations";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const items = destinations;
  const [cartItems, setCartItems] = useState([]);

  /* shopping cart code adapted from https://www.youtube.com/watch?v=xjwDEmZdQ2M */
  const handleAddProduct = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exists, quantity: exists.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exists, quantity: exists.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCartClearance = () => {
    setCartItems([]);
  };
  return (
    <div className="App">
      <Router>
        <Navbar cartItems={cartItems} />
        <div className="everything">
          <Routes>
            <Route exact path="/" element={<Home items={items} />} />
            <Route
              exact
              path="/products"
              element={<ProductPage items={items} />}
            />
            <Route
              path="/products/:id"
              element={
                <ItemPage items={items} handleAddProduct={handleAddProduct} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  items={items}
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  handleCartClearance={handleCartClearance}
                />
              }
            />
            {/* <Route exact path="/checkout" element={<Checkout />} /> */}
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
