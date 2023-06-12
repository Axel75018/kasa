import React, { useState } from "react";
import chevronGauche from "../../assets/images/chevronGauche.png"; // Importe l'image du chevron
import chevronDroite from "../../assets/images/chevronDroite.png";

const Carousel = ({ pictures }) => {
  // prends un un tableau pictures  en prop.
  const [indexActuel, setIndex] = useState(0); // Hook useState l'état du indexActuel initialement  à 0.
  const nbrPhoto = pictures.length; // Obtient le nombre total d'images dans le tableau pour comparer à l'index.

  return (
    <section className="carousel">
      <img
        // Affiche le chevron de gauche. Si il n'y a qu'une seule image, le chevron est caché.
        className={`chevron gauche ${pictures.length === 1 ? "hidden" : ""}`}
        src={chevronGauche}
        alt="Précédent"
        onClick={() =>
          // Ssi nous ne sommes pas à la première image, déplacez-vous vers l'image précédente.
          // Si nous sommes à la première image, déplacez-vous vers la dernière image. index -1
          setIndex(indexActuel > 0 ? indexActuel - 1 : nbrPhoto - 1)
        }
      />
      <img
        // Affiche le chevron de droite. Si il n'y a qu'une seule image, le chevron est caché.
        className={`chevron droite ${pictures.length === 1 ? "hidden" : ""}`}
        src={chevronDroite}
        alt="Suivant"
        onClick={() =>
          // Si nous ne sommes pas à la dernière image, déplacez-vous vers l'image suivante.
          // Si nous sommes à la dernière image, retournez à la première image.
          setIndex(indexActuel < nbrPhoto - 1 ? indexActuel + 1 : 0)
        }
      />
      {
        // map  div qui contient l'image et un compteur d'images.
        pictures.map((image, index) => (
          <div
            key={index}
            // Ajoute la classe 'active' si l'index de l'image actuelle correspond à indexActuel.
            // Cela permet de faire apparaître l'image actuelle et de masquer les autres en jouant
            // sur la height et width plutot que de les faire disparaitre avec display:none pour pouvoir l'animer.
            className={`carousel__container ${
              indexActuel === index ? "active" : ""
            }`}
          >
            <img
              className="carousel__slide"
              src={image}
              alt={`carousel ${index}`}
            />
            {/* Affiche le compteur d'images. Si il n'y a qu'une seule image, le compteur est caché */}
            <h4 className={`compteur ${pictures.length === 1 ? "hidden" : ""}`}>
              {index + 1}/{pictures.length}
            </h4>
          </div>
        ))
      }
    </section>
  );
};

export default Carousel;
