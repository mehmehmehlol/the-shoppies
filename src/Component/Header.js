import React from 'react';
import SearchMovies from '../Search/SearchMovies';

const Header = ({ handleSearchInputChange, handleSubmit, query}) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">Welcome To The Shoppies Movie Award Nomination 2021!</div>
                <SearchMovies 
                    handleSearchInputChange={handleSearchInputChange}
                    handleSubmit={handleSubmit}
                    query={query}
                />
            </nav>
        </div>
    )
}

export default Header;