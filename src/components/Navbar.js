import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartItems }) {
  return (
    <header>
      <nav className="menu">
        <div className="floatLeft">
          <Link to="/Tardis-Travel">
            <strong className="logo">TARDIS TRAVEL</strong>
          </Link>
        </div>
        <div className="floatRight">
          <Link to="/Tardis-Travel/products">Products</Link>
          <Link to="/Tardis-Travel/cart">
            Cart<span className="cartNumber">{cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
