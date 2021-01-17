import React from 'react';
// import SearchContainer from './SearchContainer';



const SearchMovies = ({ query, handleSubmit, handleSearchInputChange }) => {

    return (
        <div className="searchable-movie-reviews search-container justify-content-center">
            <form onSubmit={handleSubmit}>
                <label className="search-label" htmlFor="search-input">
                    <input 
                        id="search-input"
                        name="query"
                        value={query}
                        type="text"
                        style={{ width: 1000 }}
                        placeholder="Search Movies..."
                        onChange={handleSearchInputChange}
                    />
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </label>
            </form>
         
        </div>
    )
}
export default SearchMovies;