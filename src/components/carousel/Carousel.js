import React, { useState } from "react";
import chevronGauche from "../../assets/images/chevronGauche.png";
import chevronDroite from "../../assets/images/chevronDroite.png";
const Carousel = ({ pictures }) => {
  // on utilise pictures qui vient des props
  const [index, setIndex] = useState(0);

  return (
    <section className="carousel">
      <img className="chevron gauche" src={chevronGauche} alt="Précédent" />
      <img className="chevron droite" src={chevronDroite} alt="Suivant" />
      {pictures.map((image, index) => (
        <div className="carousel__container">
          <img
            key={index}
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
