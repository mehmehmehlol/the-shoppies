import React from 'react';
import MoviesDetails from './MoviesDetails';
// import { Container, Row, Col } from 'reactstrap';

const SearchContainer = ({ movies, nomination, addNomination }) => {
    return (
        // <div className=" col-sm-9 col-md-6 col-lg-8">
        <div className="search-container border-right">
            {/* { error } */}
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


