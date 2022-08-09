import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="left">
        <div>
          <h1 className="title">the #1 interplanetary travel agency*</h1>
          <p className="disclaimer">*Awaiting sources</p>
          <p className="aboutText">
            In the year 2103AD, space travel has become financially and
            physically viable for the public. Don't miss out on this
            opportunity, or you will have nothing to tell your grandchildren in
            the near future when civilisation collapses and space travel is no
            longer possible.
          </p>

          <div className="rating">
            <p className="author">
              <em>Ford Prefect</em>
            </p>
            <p>teh hacking worked! 5 stars i love lawful space travel</p>
            <p className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          </div>

          <Link to="/products">
            <button className="mainButton">Allons-y!</button>
          </Link>
        </div>
      </div>

      <img
        className="rightImage"
        src={process.env.PUBLIC_URL + "/images/" + "hero.jpg"}
        alt="TARDIS art"
        title="TARDIS art"
      />
    </div>
  );
}

export default About;
