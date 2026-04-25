import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
   <div className="hero__container">
    <section className="hero__banner">
    <div className="magic__particles"></div>
    <div className="hero__content">
      <h2 className="hero__subtitle">The Cinematic Journey</h2>
      <h1 className="hero__title">Step Into The Pensieve</h1>
      <p className="hero__description">Relive every moment, every spell, and every triumph of the Wizarding World through our curated cinematic archive.</p>
      <div className="hero__actions">
        <Link to="/houses">
          <button className="btn__primary">Begin Journey</button>
        </Link>
        <Link to="/library">
          <button className="btn__secondary">Explore Library</button>
        </Link>
      </div>
    </div>
    </section>
   </div>
  );
};

export default Home
