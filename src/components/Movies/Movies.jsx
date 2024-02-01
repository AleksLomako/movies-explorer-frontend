import React from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
    return (
        <>
            <main className="movies">
                <SearchForm />
                <MoviesCardList />
                <div className="movies__more-section">
                    <button className="movies__more-button" type="button">Ещё</button>
                </div>
            </main>
        </>

    );
}

export default Movies;