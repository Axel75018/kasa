import React, { useState } from "react";
import up from "../../assets/images/up.png";
import down from "../../assets/images/down.png";

const Collapse2 = ({ titre, contenu, hauteurTitreCollapse }) => {
  const [collapse, setCollapse] = useState(false);
  const [classMontre, setClassMontre] = useState("cache");

  const togleCollapse = () => {
    if (!collapse) {
      setCollapse(true);
      setClassMontre("montre");
    } else {
      setCollapse(false);
      setClassMontre("cache");
    }
  };
  return (
    <div className="collapseContainer">
      <div style={{ height: hauteurTitreCollapse }} className="collapseTitre">
        <h4>{titre}</h4>
        <img src={down} alt="up" onClick={togleCollapse} />
      </div>
      <div className={`collapseContenu ${classMontre} `}>
        <p>{contenu}</p>
      </div>
    </div>
  );
};

export default Collapse2;
