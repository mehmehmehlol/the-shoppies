import './App.css';
import React, { useState, useEffect } from 'react';
import SearchMovies from './Search/SearchMovies';
import SearchContainer from './Search/SearchContainer';
import NominationContainer from './Nomination/NominationContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
import {Container, Row, Col } from 'react-bootstrap';



export default function App() {
  
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [nomination, setNomination] = useState([]);
    const [error, setError] = useState(null);

    
    // const cancel = '';

    // empty array/list to only fire the callback once
    useEffect(() => {
        let nominations = localStorage.getItem('nomination');
        if (nominations !== null) {
            setNomination(JSON.parse(nominations))
        }
    }, [])
    
    // Search Movies
    const handleSearchInputChange = e => {
        e.preventDefault();
        setQuery(e.target.value);
        
    }

    // const fetchSearchResults = ( query ) => {
    //     const searchUrl = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`;

    //     if (cancel) {
    //         cancel.cancel();
    //     } 

    //     cancel = axios.CancelToken.source();

    //     axios.get(searchUrl, {
    //         cancelToken: cancel.token
    //     })
    //     .then(res => {
    //         const resultNotFoundMsg = !res.Search.length ? 'There are no more search results.' : '';
    //         setMovies(res.Search)
    //         setMessage(resultNotFoundMsg)
    //         setLoading(false)
    //     })
    //     .catch( error => {
    //         if (axios.isCancel(error) || error) {
    //             setLoading(false)
    //             setMessage('Failed to fetch the data. Please check network')
    //         }
    //     })
    // }

    // if (query.length > 0) {
    //     const movie = movie.filter((i) => {
    //         return i.Title.match(query);
    //     });
    // }


    const handleSubmit = e => {
        e.preventDefault();
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`)
        .then(res => res.json())
        .then(res => {
            // debugger
            // console.log(res.Search)
            if (res.Response === "True") {
                setMovies(res.Search)
            } else if (res.Error === "Movie Not Found"){
                setError("Movie not Found.")
            } else if (res.Error === "Too many results") {
                setError("Too many results. Type a few more letters.")
            }
        })
    }

    // Change in nomination list
    const addNomination = movie => {
        // debugger
        if (nomination.length < 5 && !nomination.includes(movie)) {
            setNomination([...nomination, movie])
            localStorage.setItem("nomination", JSON.stringify([...nomination, movie]))       
        } else {
            alert('You can only nominate five movies! Delete one of them and nominate again ;)')
        }
    }

    const removeNomination = movie => {
        // debugger
        const newNomination = [...nomination].filter(nominated => nominated !== movie)
        setNomination(newNomination)
        localStorage.setItem("nomination", JSON.stringify(newNomination))
    }

    // handle error
    // const handleError = () => {
    //     error;
    // }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} sm={6} md={9} lg={9} xl={9}>
                        <SearchMovies 
                            handleSearchInputChange={handleSearchInputChange}
                            handleSubmit={handleSubmit}
                            query={query}
                        />
                        <br />
                        <h2>Movies By Search:</h2>
                        <SearchContainer 
                            movies={movies} 
                            addNomination={addNomination} 
                            nomination={nomination} 
                            error={error}
                            query={query}
                        />
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3} xl={3}>      
                        <NominationContainer 
                            removeNomination={removeNomination}
                            nomination={nomination}
                        />
                    </Col>
                </Row>
            </Container>  
        </div>
    )
}

