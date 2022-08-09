import React from "react";
import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  /* WIP: if cart contains items, proceed to checkout*/
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      <Link to="/checkout"></Link>;
    }
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.length >= 1 && (
        <button onClick={handleCartClearance}>Clear Cart</button>
      )}
      <div className="cartItems">
        {cartItems.map((item) => (
          <div className="cartItem" key={item.id}>
            <img
              className="smallImage"
              src={process.env.PUBLIC_URL + "/images/" + item.image}
              alt={item.alt}
              title={item.alt}
            />
            <p>{item.title}</p>
            <div className="buttonGroup">
              <button onClick={() => handleAddProduct(item)}>+</button>
              <button onClick={() => handleRemoveProduct(item)}>-</button>
            </div>
            <p>
              {item.quantity} x £{item.price}
            </p>
          </div>
        ))}
      </div>
      <h3 className="total">Basket total: £{totalPrice}</h3>
      <button className="mainButton" onClick={() => handleCheckout}>
        Check Out
      </button>
    </div>
  );
};

export default Cart;
