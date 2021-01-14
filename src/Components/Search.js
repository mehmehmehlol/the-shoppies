import React, { useState } from 'react'

export default function Search() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState('');

    const handleSearchInputChange = e => {
        setQuery(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`)
        .then(res => res.json())
        .then(res => console.log(res))
    }

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