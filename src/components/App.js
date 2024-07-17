import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Project1 from './Project1';
import Project2 from './Project2';
import Contact from './Contact';
import Testimonials from './Testimonials';
import AddTestimonial from './AddTestimonial';
import './App.css';

function App() {
  const [testimonials, setTestimonials] = useState([]);

  const addTestimonial = (testimonial) => {
    setTestimonials([...testimonials, testimonial]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Testimonials" element={<Testimonials testimonials={testimonials} />} />
            <Route path="/addTestimonial" element={<AddTestimonial addTestimonial={addTestimonial} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
