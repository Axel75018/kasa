import React, { useState } from "react";
import up from "../../assets/images/up.png";

const Collapse2 = ({ titre, contenu }) => {
  const [collapse, setCollapse] = useState(false);
  // Utilisation du hook useState pour gérer l'état du collapse

  const togleCollapse = () => {
    setCollapse((prevCollapse) => !prevCollapse);
    // Inversion de la valeur de l'état du collapse
  };

  return (
    <div className="collapseContainer">
      <div className="collapseTitre">
        <h4>{titre}</h4>
        <img
          src={up}
          alt={collapse ? "up" : "down"}
          onClick={togleCollapse}
          className={`chevronTogle ${collapse ? "rotateUp" : "rotateDown"}`}
          // change la classe en fonction de l'état du collapse pour faire tourner le chevron
        />
      </div>
      <div className={`collapseContenu ${collapse ? "montre" : "cache"}`}>
        {/* // change la classe en fonction de l'état du collapse pour afficher ou masquer le contenu */}
        <div> {contenu}</div>
      </div>
    </div>
  );
};

export default Collapse2;
