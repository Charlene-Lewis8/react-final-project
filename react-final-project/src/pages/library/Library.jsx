import React, {useState} from 'react';
import { movieData } from '../../data';
import './Library.css';
import MovieCard from '../../components/MovieCard';
import MovieDescription from '../../components/MovieDescription';


const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] =  useState("default");
  const [selectedMovie, setSelectedMovie] = useState(null);


  const filteredMovies = movieData.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const sortedMovies = [...filteredMovies].sort((a,b) => {
    if (sortBy === "year") {
      return b.year - a.year;
    }
    else if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });


  return (
    <div className="library__container">
      <div className="library__header">
        <h1>The Great Library</h1>
        <div className="magic__search">
          <div className="controls__row">
          <input className="magic__search-bar" type="text" placeholder='Search the archives...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          <span className="wand__sparkle">&#129668;</span>
          </div>
          <select className="magic__select" onChange={(e)=> setSortBy(e.target.value)}>
                        <option value="default" disabled selected>Sort</option>
                        <option value="year">Release Year</option>
                        <option value="title">Alphabetical (A-Z)</option>                        
          </select>
        </div>
      </div>
      <div className="movie__grid">
        {sortedMovies.map((movie) => {
         return <MovieCard key={movie.id} movie={movie} 
         onViewLore={() => setSelectedMovie(movie)}/>
       })}
      </div>
      <MovieDescription movie={selectedMovie} onClose={() => setSelectedMovie(null)}/>
    </div>
  );
};

export default Library


