import React from 'react';
import './Project1.css';

function Project1() {
  return (
    <div className="project-page">
      <h1>Projets de conception d'un Back-End de gestion d'Hotel</h1>
      <div className="project-content">
      <p>Lien Vers le Repository sur : <a href="https://github.com/2701699/Exam_2_ServerWeb/tree/master">GITHUB</a></p> 
     
        
        <section className="section">
          <h2>Description</h2>
          <p>Cette application web est concu d'un API qui permet la getion de la base de donnnes de toutes les ressources de l'hotel,
            dont les employees, le personnel, les reservations, le stock...
            Le front est fait avec Vue  , il y'a beacuoups de Middlware utilisee comme l'ORM sequelize avec Express pour le serveur,
            pour l'authentification comme JWT, pour la viabilite des donnnes express-validator,...
          </p>
            
        </section>

        <section className="section">
          <h2>Technologies Utilisées</h2>
          <ul>
            <li>IDE : Visual studio Code</li>
            <li>Language : JAVASCRIPT</li>
            <li>Runtime environement : Node JS</li>
            <li>Type : Application web - API</li>
            <li>Frontend : Vuer JS</li>
            <li>Backend : Express JS</li>
            <li>Base de Données : MYSQL, avec ORM SEQUELIZE Js</li>
            <li>Version Control : Git et GITHUB</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Project1;
