import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img src="/avatar.png" alt="avatar du profil" />
      <h1>Bienvenue</h1>
      <p>Bonjour, je suis Bilal Elarchi, originaire du Maroc.<br></br>
         J'ai obtenu mon master en gestion de projet, puis j'ai fait des études pour devenir technicien spécialisé en diagnostic automobile.<br></br> J'ai toujours aimé la technologie et les PC, c'est pourquoi j'ai commencé un programme de programmation informatique. Je suis encore au début, mais j'ai appris les bases de la programmation et les concepts du développement orienté objet. <br></br>Les langages et compétences que j'ai pu développer sont HTML, CSS, JavaScript, Node.js, React, C#, Java, Kotlin, et Swift.<br></br> Mon domaine de prédilection et celui dans lequel je souhaite me spécialiser est la programmation web.<br></br> En dehors des études, j'aime suivre l'actualité politique et économique, et apprendre de nouvelles langues.</p>
      
         <section className="section">
        <h2> Outils et Logiciel Professionnelle</h2>
        <ul>
          <li>Langages de Programmation: C#, Java, JavaScript, Kotlin</li>
          <li>Frameworks: React, Express, Entity, Spring Boot</li>
          <li>Outils: Git, Docker, Vmware</li>
          <li>Bases de Données: MySQL, PostgreSQL, MsSQL, MongoDB</li>
          <li>Autres: Agile, Scrum, DevOps</li>
        </ul>
      </section>



      <section className="section">
        <h2>Points fort</h2>
        <ul>
          <li>Résolution de Problèmes</li>
          <li>Travail en Équipe</li>
          <li>Communication</li>
          <li>Apprentissage Continu</li>
        </ul>
      </section>

      <section className="section">
        <h2>Expérience Professionnelle</h2>
        <div className="experience">
          <h3>Superviseur - Groupe Zara</h3>
          <p>Octobre 2021 - Decembre 2022</p>
          <ul>
            <li>Supervision et gestion des employés</li>
            <li>Contrôle de la sécurité et de la santé au travail</li>
            <li>Contrôle de la qualité des matières premières</li>
            <li>Formation et entraînement du personnel</li>
            <li>Gestion des stocks et des inventaires</li>
          </ul>
        </div>

        <div className="experience">
          <h3>Responsable de diagnostic auto. - Lamin Cars S.A.R.L</h3>
          <p>Juin 2019 - Octobre 2019</p>
          <ul>
            <li>Établissement d'un diagnostic précis et exhaustif</li>
            <li>Contrôle qualité des travaux et vérification des résultats</li>
            <li>Stockage des pièces détachées utilisées et des rapports de travail</li>
            <li>Explications détaillées des travaux et des coûts associés</li>
            <li>Analyse des comportements anormaux du système mécanique pour identifier les problèmes</li>
          </ul>
        </div>

        <div className="experience">
          <h3>Responsable au service d'importation. - Reacting S.A.R.L</h3>
          <p>Janvier 2016 - Octobre 2016</p>
          <ul>
            <li>Gestion des documents d'importation (douane, formalités, etc.)</li>
            <li>Négociation des contrats et des tarifs</li>
            <li>Suivi des livraisons et des réclamations</li>
            <li>Suivi des livraisons et des réclamations</li>
            <li>Gestion des stocks de produits en transit et en stockage</li>
          </ul>
        </div>

        <div className="experience">
          <h3>Responsable au service Marketing. -KiraAqua S.A.R.L</h3>
          <p>Janvier 2015 - Decembre 2015</p>
          <ul>
            <li>Élaboration de la stratégie marketing de l'entreprise</li>
            <li>Établissement de rapports pour les gestionnaires et les décideurs</li>
            <li>Analyse du marché et des tendances concurrentielles</li>
            <li>Création de contenu pour les campagnes marketing</li>
            <li>Identification des opportunités de croissance et de développement</li>
          </ul>
        </div>


        <div className="experience">
          <h3>Agent de Transit - Cargo Casa S.A.R.L</h3>
          <p>Juin 2013 - Decembre 2013</p>
          <ul>
            <li>Établir des rapports sur l'état des expéditions et des livraisons</li>
            <li>Vérifier l'exactitude des documents de transport et des déclarations de douane</li>
            <li>Résoudre les problèmes liés aux formalités douanières</li>
            <li>Gérer les délais de stockage et de détention des marchandises à la douane</li>
            <li>Suivre les marchandises pendant le stockage ou la détention à la douane</li>
          </ul>
        </div>

      </section>

      <section className="section">
        <h2>Educations</h2>
        <ul>
          <li>Actuellement - Programmation informatique - (College La Cite)</li>
          <li>2019 - Technicien specialise en Diagnostic automobile - (OFPTT Casablanca)</li>
          <li>2013 - Master en Commerce et gestion de projet - (HEM Business school)</li>
          <li>2009 - Baccalaureat Science - (Alfachtali school)</li>
        </ul>
      </section>


      <section className="section">
        <h2>Projets Récents</h2>
        <div className="project">
          <h3>Projet Application Can: Application de Gestion de Tâches</h3>
          <p>Développement d'une application sous forme de quiz sur la CAN 2022 pour Android avec Android studio et Kotlin.</p>
        </div>

        <div className="project">
          <h3>Projet Calculatrice</h3>
          <p>Création d'une calculatrice similaire a celle d'IOS avec C# et wpf pour le bureau.</p>
        </div>

        <div className="project">
          <h3>Projet Voiture</h3>
          <p>Création d'une application qui affiche les voitures a vendre d'un consessionnaire avec les details de l'auto</p>
        </div>

        <div className="project">
          <h3>Projet page d'un restaurant</h3>
          <p>Création d'une page web pour le restaurant de La Cite</p>
        </div>
      </section>

      


      

    </div>
  );
}

export default Home;
