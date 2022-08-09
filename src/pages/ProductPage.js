import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const ProductPage = ({ items }) => {
  const [filter, setFilter] = useState("");
  const [newItems, setNewItems] = useState(items);
  useEffect(() => {
    const copy = [
      ...items,
    ]; /* some filters do not update unless I use a copy array */
    if (filter === "All") {
      setNewItems(items.sort((a, b) => (a.id > b.id ? 1 : -1)));
    } else if (filter === "A to Z") {
      setNewItems(
        copy.sort((a, b) => {
          return a.title.localeCompare(b.title);
        })
      );
    } else if (filter === "Price - low to high") {
      setNewItems(
        copy.sort((a, b) => {
          return a.price - b.price;
        })
      );
    } else if (filter === "Price - high to low") {
      setNewItems(
        copy.sort((a, b) => {
          return b.price - a.price;
        })
      );
    } else if (filter === "Planets") {
      console.log("sorting by " + filter);
      setNewItems(
        items
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .filter((card) => {
            return card.category === "planet";
          })
      );
    } else if (filter === "Moons") {
      setNewItems(
        items.filter((card) => {
          return card.category === "moon";
        })
      );
    } else if (filter === "Other") {
      setNewItems(
        items.filter((card) => {
          return card.category === "other";
        })
      );
    }
  }, [filter]);

  return (
    <div className="productPage">
      <h1 className="title">All Products</h1>
      <div className="filterContainer">
        <h2 className="filterHeading">Filter Results: </h2>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>A to Z</option>
          <option>Price - low to high</option>
          <option>Price - high to low</option>
          <option>Planets</option>
          <option>Moons</option>
          <option>Other</option>
        </select>
      </div>

      <Card items={newItems} />
    </div>
  );
};

export default ProductPage;
