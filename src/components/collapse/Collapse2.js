import React, { useState } from "react";
import up from "../../assets/images/up.png";
import down from "../../assets/images/down.png";

const Collapse2 = ({ titre, contenu, hauteurTitreCollapse }) => {
  const [collapse, setCollapse] = useState(false);

  const togleCollapse = () => {
    setCollapse((prevCollapse) => !prevCollapse);
  };

  return (
    <div className="collapseContainer">
      <div style={{ height: hauteurTitreCollapse }} className="collapseTitre">
        <h4>{titre}</h4>
        <img
          src={collapse ? up : down}
          alt={collapse ? "up" : "down"}
          onClick={togleCollapse}
          className={`chevronTogle ${collapse ? "rotateUp" : "rotateDown"}`} // change la classe en fonction de l'état du collapse
        />
      </div>
      <div className={`collapseContenu ${collapse ? "montre" : "cache"}`}>
        <p>{contenu}</p>
      </div>
    </div>
  );
};

export default Collapse2;
