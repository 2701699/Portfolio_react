import React from 'react';
import './Project2.css';

function Project2() {
  return (
    <div className="project-page">
      <h1>Projet gestion d'Hopital</h1>
      <div className="project-content">
    
        <p>Lien Vers le Repository sur : <a href="https://github.com/2701699/Gestion-Hopital/tree/master">GITHUB</a></p> 
        <section className="section">
          <h2>Description du projet</h2>
          <p>Ce projet consiste a une application desktop, elle permet la getion d'un hopital et des acteurs qui y traivaillent, 
            on peut gerer les medecins on ajoutant et supprimant et modofiant leurs informations, meme chode pour les patients.
            Cette applications permet de gerer les rendez-vous, et ce selon la specialites de chaque medecins et on tenant
            compte de la diponibilites et du calendrier. Les patients doivent subscrires a des regles pour voir les medecins.</p>
        </section>

        <section className="section">
          <h2>Outils et logiciels utilises</h2>
          <ul>
            <li>IDE : Visual studio 2022</li>
            <li>Language : C#</li>
            <li>Type : Application bureau</li>
            <li>Frontend : WPF</li>
            <li>Backend : Entity Framework</li>
            <li>Base de Données : MsSQl</li>
            <li>Version Control : Git et GITHUB</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Project2;
