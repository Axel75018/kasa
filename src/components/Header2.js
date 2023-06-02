import React from 'react';
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <div>
      <h2>Header</h2>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
      </nav>
    </div>
  );
};

export default Header2;
