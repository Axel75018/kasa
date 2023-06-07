import React from "react";

const Collapse2 = ({ titre, contenu }) => {
  return (
    <div className="collapseContainer">
      <h2>{titre}</h2>
      <p>{contenu}</p>
    </div>
  );
};

export default Collapse2;
