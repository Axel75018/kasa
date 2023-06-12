import React from "react";
import { NavLink } from "react-router-dom";
import Data from "../../data/logements.json";
// Importation du fichier JSON contenant les données des logements
const Card = () => {
  return (
    <div className="cardListContainer">
      <section id="listingAppart">
        <ul>
          {Data.map((logement) => (
            // Parcours des données des logements et création des thumbs
            <NavLink key={logement.id} to={`/logement/${logement.id}`}>
              <li className="Card" key={logement.id}>
                <article key={logement.id}>
                  <img src={logement.cover} alt={logement.title} />
                  <h2>{logement.title}</h2>
                </article>
              </li>
            </NavLink>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Card;
