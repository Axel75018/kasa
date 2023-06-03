import React from "react";
import Data from "../data/logements.json";
const Card = () => {
  return (
    <div className="cardListContainer">
      <ul>
        {Data.map((logement) => (
          <li className="Card" key={logement.id}>
            <article key={logement.id}>
              <h2>{logement.title}</h2>
              <img src={logement.cover} alt={logement.title} />
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
