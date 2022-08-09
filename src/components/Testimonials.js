import React from "react";
import reviews from "../reviews";

function Testimonials() {
  const fullStar = "&#9733;";
  const emptyStar = "&#9734;";
  const total = 5;
  return (
    <div className="testimonials">
      <h1>Reviews</h1>
      <div className="reviewWrapper">
        {reviews.map((review) => {
          return (
            <div className="review">
              <p className="author">
                <em>{review.author}</em>
              </p>
              <p className="reviewContent">{review.content}</p>
              <p className="stars">
                <span
                  dangerouslySetInnerHTML={{
                    __html: fullStar.repeat(review.stars),
                  }}
                ></span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: emptyStar.repeat(total - review.stars),
                  }}
                ></span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
