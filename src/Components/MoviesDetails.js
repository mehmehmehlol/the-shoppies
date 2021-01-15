import React from 'react';

const MoviesDetails = ({ movie }) => {
    const { Title, Year, imdbID, Poster } = movie
    return (
        <div key={imdbID} className="movie">
            <img className="movie-poster" src={Poster} alt="poster"/>
            <br />
            <h3 className="title">{Title}</h3>
            <h3 className="year">{Year}</h3>
            <h3 className="imdb">{imdbID}</h3>
        </div>
    )
}

export default MoviesDetails;
