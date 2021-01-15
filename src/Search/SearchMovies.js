import React, { useState } from 'react';
import SearchContainer from './SearchContainer';



const SearchMovies = ({ handleSubmit, handleSearchInputChange, movies, addNomination }) => {

    return (
        <div className="searchable-movie-reviews">
            <form onSubmit={handleSubmit}>
            {/* <form> */}
                <label htmlFor="search-input">Search Movie</label>
                <input 
                    id="search-input"
                    type="text"
                    style={{ width: 300 }}
                    onChange={handleSearchInputChange}
                />
                <button type="submit">Submit</button>
            </form>
         <h2>Movies By Search:</h2>
            <SearchContainer movies={movies} addNomination={addNomination}/>
       

        </div>
    )
}
export default SearchMovies;