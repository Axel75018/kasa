import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logementjson from "../../data/logements.json";

const Logements = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isValidId = logementjson.find((logement) => logement.id === id);

  useEffect(() => {
    if (!isValidId) {
      navigate("/404");
    }
  }, [isValidId, navigate]);

  if (!isValidId) {
    return null; // Cette ligne reste importante pour éviter un rendu avant la redirection
  } else {
    // rendre le composant normalement
    return (
      <div>
        <h1>Logements ok</h1>
      </div>
    );
  }
};

export default Logements;
