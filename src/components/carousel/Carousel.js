import React, { useState } from "react";

const Carousel = ({ pictures }) => {
  // on utilise pictures qui vient des props
  const [index, setIndex] = useState(0);

  return (
    <section className="carousel">
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
