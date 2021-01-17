import React from 'react';
// import { Card, Icon, Image } from 'semantic-ui-react'
import { Button } from 'react-bootstrap';


const MoviesDetails = ({ movie, nomination, addNomination }) => {
    const { Title, Year, imdbID, Poster } = movie
    return (
            <div className="movie card mb-3 rounded" style={{width: '400px'}}>
                <div className="row no-gutters">
                    <div className="col-sm-4 col-md-4">
                        <img className="movie-poster" src={Poster} alt="poster" />
                    </div>
                    <div className="col-sm-8 col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Title: {Title}</h5>
                            <p className="year imdb card-text">
                                Year: {Year}
                                <br />
                                imdbID: {imdbID}
                            </p>
                            <>
                                {
                                    (!nomination.includes(movie))
                                    ? 
                                    <Button className="nominate" variant="dark" onClick={() => addNomination(movie)} active>Nominate</Button>
                                    : 
                                    <Button className="already-nominated" disabled>Already Nominated</Button>
                                }
                                
                            </>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MoviesDetails;
