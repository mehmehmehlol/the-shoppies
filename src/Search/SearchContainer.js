import React from 'react';
import MoviesDetails from './MoviesDetails';
// import { Container, Row, Col } from 'reactstrap';

const SearchContainer = ({ query, movies, nomination, addNomination }) => {
    return (
        // <div className=" col-sm-9 col-md-6 col-lg-8">
        <div className="search-container border-right">
            <h5>Search for "{query}"</h5>
            { movies.map(movie => <MoviesDetails 
                                        key={movie.imdbID} 
                                        movie={movie} 
                                        nomination={nomination} 
                                        addNomination={addNomination}  
                                        />
                            )
            }

        </div>
    )
}
export default SearchContainer;


