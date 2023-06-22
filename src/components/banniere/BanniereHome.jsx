import React from "react";

const BanniereHome = ({ h2banniere, imageBanniere }) => {
  //props h2 pour le texte et image
  return (
    <div
      className="banniere"
      style={{ backgroundImage: `url(${imageBanniere})` }}
    >
      <h2 className="banniere__h2">{h2banniere}</h2>
    </div>
  );
};

export default BanniereHome;
