import React from 'react';

const Movies = ({ Title, Year, imdbID, Poster }) => {
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

const MoviesSearch = ({ movies }) => <div className="movie-list">{movies.map(Movies)}</div>

export default MoviesSearch;