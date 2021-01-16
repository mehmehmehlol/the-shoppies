import React from 'react';
import MoviesDetails from './MoviesDetails';

const SearchContainer = ({ movies, nomination, addNomination, removeNomination }) => {
    return (
        movies.map(movie => <MoviesDetails 
                                key={movie.imdbID} 
                                movie={movie} 
                                nomination={nomination} 
                                addNomination={addNomination}  
                                removeNomination={removeNomination}
                                />
                    )
    )
}
export default SearchContainer;


