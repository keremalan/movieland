import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img className="movie-image" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            <div className="movie-card-bottom">
                <span className='movie-type'>{movie.Type}</span>
                <div className="movie-card-row">
                <h3 className="movie-title">{movie.Title}<p className="movie-year">({movie.Year})</p></h3>
            </div>
            </div>
        </div>
    );
};

export default MovieCard;