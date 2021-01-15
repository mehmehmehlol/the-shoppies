import React from 'react';
import MoviesDetails from './MoviesDetails';

const SearchContainer = ({ movies }) => {
    return (
        movies.map(movie => <MoviesDetails movie={movie} />)
    )
}
export default SearchContainer;

