import React from "react";
import Data from "../data/logements.json";
const Card = () => {
  return (
    <div>
      <ul>
        {Data.map((logement) => (
          <li key={logement.id}>
            <article key={logement.id}>
              <h2>{logement.title}</h2>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
