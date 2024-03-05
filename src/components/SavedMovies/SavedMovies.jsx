import React, { useState, useEffect } from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchError from "../SearchError/SearchError";
import { filterMovies, filterShortMovies } from '../../utils/filterMovies';

function SavedMovies({ savedMoviesList, onDeleteClick }) {

    const [searchedMovies, setSearchedMovies] = useState(savedMoviesList); // фильмы по запросу и чекбоксу
    const [notFoundMovies, setNotFoundMovies] = useState(false);
    const [checkedShortMovies, setCheckedShortMovies] = useState(false); // состояние чекбокса 


    useEffect(() => {
        setSearchedMovies(savedMoviesList);
    }, [savedMoviesList])

    
    function handleSearchSubmit(inputMovie, checkboxState){
        let savedMovies = filterMovies(savedMoviesList, inputMovie);
        
        if (checkboxState !== true){
            setSearchedMovies(savedMovies)
        }
        else {
            savedMovies = filterShortMovies(savedMovies)
            setSearchedMovies(savedMovies)
        }
        if (savedMovies.length === 0) {
            setNotFoundMovies(true);
        }
        else {
            setNotFoundMovies(false);
        }
    }

    // изменение состояния чекбокса для короткометражек
    function handleChangeCheckbox() {
        setCheckedShortMovies(!checkedShortMovies);
    }

    return (
        <>
            <main className="saved-movies">
                <SearchForm
                    handleSearchSubmit={handleSearchSubmit}
                    onChange={handleChangeCheckbox}
                    checkedShortMovies={checkedShortMovies} 
                    />
                {!notFoundMovies ? (
                    <MoviesCardList
                        moviesList={searchedMovies}
                        savedMoviesList={savedMoviesList}
                        onDeleteClick={onDeleteClick} />
                ) : (<SearchError
                    errorText={'Ничего не найдено'} />)
                }
            </main>
        </>

    );
}

export default SavedMovies;