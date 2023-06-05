import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logementJson from "../../data/logements.json";

const Logements = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isValidId = logementJson.find((logement) => logement.id === id);

  useEffect(() => {
    //exécuté au "mount" du composant
    if (!isValidId) {
      navigate("/404");
    }
  }, [isValidId, navigate]);

  if (!isValidId) {
    return null; // Cette ligne reste importante pour éviter un rendu avant la redirection
  } else {
    // rendre le composant normalement
    const ficheLogement = logementJson.find((logement) => logement.id === id);

    return (
      <div>
        <h1>Logements ok</h1>
        <article>
          <img src={ficheLogement.cover} alt={ficheLogement.title} />
          <h2>{ficheLogement.title}</h2>
        </article>
      </div>
    );
  }
};

export default Logements;
