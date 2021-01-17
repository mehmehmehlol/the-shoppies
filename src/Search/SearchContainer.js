import React from 'react';
import MoviesDetails from './MoviesDetails';
// import { Container, Row, Col } from 'reactstrap';

const SearchContainer = ({ error, movies, nomination, addNomination }) => {
    return (
        // <div className=" col-sm-9 col-md-6 col-lg-8">
        <div className="search-container">
            {/* { error } */}
            { movies.map(movie => <MoviesDetails 
                                        key={movie.imdbID} 
                                        movie={movie} 
                                        nomination={nomination} 
                                        addNomination={addNomination}  
                                        // removeNomination={removeNomination}
                                        />
                            )
            }

        </div>
    )
}
export default SearchContainer;


