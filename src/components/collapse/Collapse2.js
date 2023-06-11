import React, { useState } from "react";
import up from "../../assets/images/up.png";

const Collapse2 = ({ titre, contenu, hauteurTitreCollapse }) => {
  const [collapse, setCollapse] = useState(false);

  const togleCollapse = () => {
    setCollapse((prevCollapse) => !prevCollapse);
  };

  return (
    <div className="collapseContainer">
      <div className="collapseTitre">
        <h4>{titre}</h4>
        <img
          src={up}
          alt={collapse ? "up" : "down"}
          onClick={togleCollapse}
          className={`chevronTogle ${collapse ? "rotateUp" : "rotateDown"}`} // change la classe en fonction de l'état du collapse
        />
      </div>
      <div className={`collapseContenu ${collapse ? "montre" : "cache"}`}>
        <div> {contenu}</div>
      </div>
    </div>
  );
};

export default Collapse2;
