import './App.css';
import React, { useState } from 'react';
import SearchMovies from './Search/SearchMovies';

export default function App() {
  
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [nomination, setNomination] = useState([]);
    // const [error, setError] = useState(null);
    
    // Search Movies
    const handleSearchInputChange = e => {
        setQuery(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`)
        .then(res => res.json())
        .then(res => {
            // debugger
            console.log(res.Search)
            setMovies(res.Search)
        })
    }

    // Change in nomination list
    const addNomination = movie => {
        if (nomination.length <= 5) {
            if(!nomination.include(movie)) {
                setNomination([...nomination, movie])
            }
        }
    }

    const removeNomination = movie => {
        const newNomination = [...nomination].filter(nominated => nominated !== movie);
        setNomination(setNomination);
    }


    return (
        <div>
          <SearchMovies 
            handleSearchInputChange={handleSearchInputChange}
            handleSubmit={handleSubmit}
            addNomination={addNomination}
            movies={movies}
          />

        </div>
    )
}

