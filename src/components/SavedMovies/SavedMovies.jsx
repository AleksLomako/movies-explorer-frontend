import React from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isLoggedIn }) {
    return (
        <>
            <main className="saved-movies">
                <SearchForm />
                <MoviesCardList />
            </main>
        </>

    );
}

export default SavedMovies;