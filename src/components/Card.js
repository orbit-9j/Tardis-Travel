import React from "react";
import { Link } from "react-router-dom";

const Card = ({ items }) => {
  return (
    <div className="card-collection">
      {items.map((dest) => {
        var imagePath = process.env.PUBLIC_URL + "/images/" + dest.image;
        return (
          <div>
            <Link to={`/products/${dest.id}`}>
              <div className="items" key={dest.id}>
                <div className="imageContainer">
                  <img
                    className="productImage"
                    src={imagePath}
                    alt={"Poster of " + dest.title}
                    title={"Poster of " + dest.title}
                  />
                </div>
                <h3>
                  <strong>{dest.title}</strong>
                </h3>
                <p className="productDesc">
                  {dest.category === "planet"
                    ? dest.description + " planet from the Sun"
                    : dest.description}
                </p>
                <p className="priceDesc">
                  <span className="price">
                    <b>£{dest.price}</b>
                  </span>
                  / person / day
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
