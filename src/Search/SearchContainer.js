import React from 'react';
import MoviesDetails from './MoviesDetails';
// import { Container, Row, Col } from 'reactstrap';

const SearchContainer = ({ error, movies, query, nomination, addNomination }) => {
    return (
        // <div className=" col-sm-9 col-md-6 col-lg-8">
        <div className="search-container">
            {/* { error } */}
            { movies.filter(data => {
                if (query === null) {
                    return data
                } else if (data.Title.toLowerCase().includes(query.toLowerCase())) {
                    return data
                }
            }).map(movie => {
                    return <MoviesDetails 
                        key={movie.imdbID} 
                        movie={movie} 
                        nomination={nomination} 
                        addNomination={addNomination}  
                        // removeNomination={removeNomination}
                        /> 
            })
            }

        </div>
    )
}
export default SearchContainer;


