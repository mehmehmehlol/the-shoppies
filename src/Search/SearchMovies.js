import React from 'react';
// import SearchContainer from './SearchContainer';



const SearchMovies = ({ handleSubmit, handleSearchInputChange }) => {

    return (
        <div className="searchable-movie-reviews">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search-input">Search Movie</label>
                <input 
                    id="search-input"
                    type="text"
                    style={{ width: 300 }}
                    onChange={handleSearchInputChange}
                />
                <button type="submit">Submit</button>
            </form>
         
        </div>
    )
}
export default SearchMovies;