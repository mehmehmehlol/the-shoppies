import React from 'react';
import MoviesDetails from './MoviesDetails';

const SearchContainer = ({ movies, nomination, addNomination }) => {
    return (
        movies.map(movie => <MoviesDetails key={movie.imdbID} movie={movie} nomination={nomination} addNomination={addNomination}  />)
    )
}
export default SearchContainer;


