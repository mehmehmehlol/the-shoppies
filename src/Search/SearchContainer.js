import React from 'react';
import MoviesDetails from './MoviesDetails';

const SearchContainer = ({ movies, addNomination }) => {
    return (
        movies.map(movie => <MoviesDetails movie={movie} addToNomination={addNomination}/>)
    )
}
export default SearchContainer;


