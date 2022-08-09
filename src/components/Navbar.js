import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartItems }) {
  return (
    <header>
      <nav className="menu">
        <div className="floatLeft">
          <Link to="/">
            <strong className="logo">TARDIS TRAVEL</strong>
          </Link>
        </div>
        <div className="floatRight">
          <Link to="/products">Products</Link>
          <Link to="/cart">
            Cart<span className="cartNumber">{cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
