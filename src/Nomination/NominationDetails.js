import React from 'react';
import { Button } from 'react-bootstrap';

const NominationDetails = ({ nomination, removeNomination }) => {
    const { Title, Year, imdbID, Poster } = nomination
    return (
            <div className="nomination card mb-3 rounded" style={{width: '400px'}}>
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
                            
                            <Button className="nominate" variant="dark" onClick={() => removeNomination(nomination)} active>Remove Nomination</Button>
                                    
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default NominationDetails;