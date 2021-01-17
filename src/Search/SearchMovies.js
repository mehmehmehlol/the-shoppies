import React from 'react';
// import SearchContainer from './SearchContainer';



const SearchMovies = ({ query, handleSubmit, handleSearchInputChange }) => {

    return (
        <div className="searchable-movie-reviews search-container">
            <form className="form-inline" onSubmit={handleSubmit}>
                <label className="search-label" htmlFor="search-input">
                    <input 
                        className="form-control mr-sm-2"
                        id="search-input"
                        name="query"
                        value={query}
                        type="search"
                        style={{ width: 1000 }}
                        placeholder="Search Movies..."
                        aria-label="Search"
                        onChange={handleSearchInputChange}
                    />
                    <button type="submit" className="btn btn-outline-dark my-2 my-sm-0">Search</button>
                </label>
            </form>
         
        </div>
    )
}
export default SearchMovies;