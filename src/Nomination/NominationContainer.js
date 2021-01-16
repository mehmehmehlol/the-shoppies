import React from 'react';
import MoviesDetails from '../Search/MoviesDetails';



const NominationContainer = ({ movies, nomination, removeNomination }) => {
    return (
        movies.map(movie => <MoviesDetails key={movie.imdbID} movie={movie} nomination={nomination} removeNomination={removeNomination}/>)
    )
}
export default NominationContainer;
