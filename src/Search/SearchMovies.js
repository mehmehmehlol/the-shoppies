import React from 'react';
// import SearchContainer from './SearchContainer';



const SearchMovies = ({ query, handleSubmit, handleSearchInputChange }) => {

    return (
        <div className="searchable-movie-reviews search-container">
            <form onSubmit={handleSubmit}>
                <label className="search-label" htmlFor="search-input">
                    <input 
                        id="search-input"
                        name="query"
                        value={query}
                        type="text"
                        style={{ width: 300 }}
                        placeholder="Search Movies..."
                        onChange={handleSearchInputChange}
                    />
                    <i className="fas fa-search search-icon" aria-hidden="true" />
                    {/* <button type="submit">Submit</button> */}
                </label>
            </form>
         
        </div>
    )
}
export default SearchMovies;