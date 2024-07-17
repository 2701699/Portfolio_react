import React from 'react';
import './Testimonials.css';

function Testimonials({ testimonials }) {
  return (
    <div className="testimonials-page">
      <h1>Témoignages</h1>
      {testimonials.length > 0 ? (
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Il n'y a aucun témoignage pour le moment, <br></br> Allez sur Ajoutez votre témoignage pour en ajoutez</p>
      )}
    </div>
  );
}

export default Testimonials;
