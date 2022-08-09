import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Products = ({ items }) => {
  const slicedItems = [];
  const min = 0;
  const max = items.length;
  let rand = 0;
  for (let i = min; i < 3; i++) {
    rand = parseInt(min + Math.random() * (max - min));
    if (!slicedItems.includes(items[rand])) {
      slicedItems.push(items[rand]);
    } else {
      i--;
    }
  }
  return (
    <div className="productContainer">
      <h1>Featured Products</h1>
      <Card items={slicedItems}></Card>

      <Link to="/products">
        <button>See All {">"}</button>
      </Link>
    </div>
  );
};

export default Products;
