import React from 'react';

const NominationDisplay = ({ movie, nomination, removeNomination }) => {
    const { Title, Year, imdbID, Poster } = movie

    return (
        <div className="movie">
            <img className="movie-poster" src={Poster} alt="poster"/>
            <br />
            <h3 className="title">{Title}</h3>
            <h3 className="year">{Year}</h3>
            <h3 className="imdb">{imdbID}</h3>
            {
                nomination.includes(movie)
                ? 
                <></>
                : 
                <button className="nominate" onClick={() => removeNomination(movie)}>Unnominate</button>
            }
            
        </div>
    )

}

export default NominationDisplay;