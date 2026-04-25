import React from 'react'
import './MovieDescription.css';


const MovieDescription = ({ movie, onClose}) => {
  if (!movie) return null;
  
    return (
    <div className="lore__overlay" onClick={onClose}>
        <div className="lore__scroll" onClick={(e) => e.stopPropagation()}>
            <button className="close__scroll" onClick={onClose}>&times;</button>
            <div className="lore__layout">
                <div className="lore__poster--section">
                    <img src={movie.poster} alt="" className="lore__img" />
                    <div className="poster__frame--edge"></div>
                </div>
                <div className="lore__text--section">
                    <h2 className="Cinzel-font">{movie.title}</h2>
                    <p className="lore__year-stamp">Circa {movie.year}</p>
                    <div className="ink__divider"></div>
                    <p className="lore__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, at nesciunt, ut fuga nostrum velit repellat laborum explicabo omnis in sequi quasi laudantium voluptates consequatur quae deleniti quos, provident quibusdam!</p>
                    <div className="lore__metadata">
                        <p><strong>Status:</strong>Catalogued in Library</p>
                        <p><strong>Department:</strong>Magical Cinema</p>
                    </div>
                </div>
            </div>
            <div className="scroll__footer">
                <span>&#x1F5F2;</span>
                <span className="seal__text">Official Pensieve Record</span>
                <span>&#x1FA84;</span>
            </div>
        </div>
    </div>
    
  );
};

export default MovieDescription
