import './App.css';
import React, { useState, useEffect } from 'react';
import SearchMovies from './Search/SearchMovies';
// import SearchContainer from './Search/SearchContainer';
import NominationContainer from './Nomination/NominationContainer';


export default function App() {
  
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [nomination, setNomination] = useState([]);
    // const [error, setError] = useState(null);
    
    // empty array/list to only fire the callback once
    useEffect(() => {
        let nominations = localStorage.getItem('nomination');
        if (nominations !== null) {
            setNomination(JSON.parse(nominations))
        }
    }, [])
    
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
        // debugger
        if (nomination.length <= 5 && !nomination.includes(movie)) {
            setNomination([...nomination, movie])
            localStorage.setItem("nomination", JSON.stringify([...nomination, movie]))       
        }
    }

    const removeNomination = movie => {
        debugger
        const newNomination = [...nomination].filter(nominated => nominated !== movie)
        setNomination(newNomination)
        localStorage.setItem("nomination", JSON.stringify(newNomination))
    }


    return (
        <div>
          <SearchMovies 
            handleSearchInputChange={handleSearchInputChange}
            handleSubmit={handleSubmit}
            addNomination={addNomination}
            movies={movies}
            nomination={nomination}
          />
          {/* <SearchContainer /> */}
          <NominationContainer 
            removeNomination={removeNomination}
            nomination={nomination}
            movies={movies}
          />

        </div>
    )
}

