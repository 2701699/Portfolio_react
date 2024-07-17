import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/project1">Projet Gestion Hotel</Link></li>
          <li><Link to="/project2">Projet Gestion Hopital</Link></li>
          <li><Link to="/contact">Contactez-moi
          </Link></li>
          <li><Link to="/testimonials">Liste des Témoignages</Link></li>
          <li><Link to="/addtestimonial">Ajouter votre Témoignage</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
