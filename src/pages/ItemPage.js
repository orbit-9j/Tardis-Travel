import React from "react";
import { useParams } from "react-router-dom";

const ItemPage = ({ items, handleAddProduct }) => {
  const { id } = useParams();

  return (
    <div className="itemDetail">
      {items
        .filter((card) => card.id === parseInt(id))
        .map((card, index) => (
          <div className="productWrapper" key={index}>
            <img
              className="largerImage"
              src={process.env.PUBLIC_URL + "/images/" + card.image}
              alt={"Poster of " + card.title}
              title={"Poster of " + card.title}
            />
            <div className="itemDetails">
              <h1 className="productTitle">{card.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: card.content }}></p>
              <p className="price">
                <b>£{card.price}</b> / person / day
              </p>
              <button onClick={() => handleAddProduct(card)}>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemPage;
