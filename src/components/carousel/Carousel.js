import React, { useState } from "react";
import chevronGauche from "../../assets/images/chevronGauche.png";
import chevronDroite from "../../assets/images/chevronDroite.png";

const Carousel = ({ pictures }) => {
  const [indexActuel, setIndex] = useState(0);
  const nbrPhoto = pictures.length;

  return (
    <section className="carousel">
      <img
        className={`chevron gauche ${pictures.length === 0 ? "hidden" : ""}`}
        src={chevronGauche}
        alt="Précédent"
        onClick={() =>
          setIndex(indexActuel > 0 ? indexActuel - 1 : nbrPhoto - 1)
        }
      />
      <img
        className={`chevron droite ${pictures.length === 0 ? "hidden" : ""}`}
        src={chevronDroite}
        alt="Suivant"
        onClick={() =>
          setIndex(indexActuel < nbrPhoto - 1 ? indexActuel + 1 : 0)
        }
      />
      {pictures.map((image, index) => (
        <div
          key={index}
          className={`carousel__container ${
            indexActuel === index ? "active" : ""
          }`}
        >
          <img
            className="carousel__slide"
            src={image}
            alt={`carousel ${index}`}
          />
          <h4 className="compteur">
            {index + 1}/{pictures.length}
          </h4>
        </div>
      ))}
    </section>
  );
};

export default Carousel;
