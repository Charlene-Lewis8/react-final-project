import React from 'react';
import './MovieCard.css';
import { movieData} from '../data';
import { Link } from 'react-router-dom';
import MovieDescription from './MovieDescription';

const MovieCard = ({ movie, onViewLore }) => {
  return (
    <div className="movies">
   <div className="movie__card--frame">
    <div className="poster__wrapper">
      <img src={movie.poster} alt="" className="movie__poster" />
    </div>
    <div className="movie__lore">
      <h3 className="cinzel-font">{movie.title}</h3>
      <p className="movie__year">{movie.year}</p>
      <hr className="parchment__divider" />
     <button className="examine__btn" onClick={onViewLore}>Examine Lore</button>
    </div>
   </div>
   </div>
  );
};

export default MovieCard
