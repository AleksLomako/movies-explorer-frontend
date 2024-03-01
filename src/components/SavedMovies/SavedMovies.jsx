import React, { useState, useEffect } from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchError from "../SearchError/SearchError";
import { filterMovies, filterShortMovies } from '../../utils/filterMovies';

function SavedMovies({ savedMoviesList, onDeleteClick }) {

    const [searchedMovies, setSearchedMovies] = useState(savedMoviesList); // фильмы по запросу и чекбоксу
    const [filtredShortMovies, setFiltredShortMovies] = useState([]);
    const [notFoundMovies, setNotFoundMovies] = useState(false);
    const [checkedShortMovies, setCheckedShortMovies] = useState(false); // состояние чекбокса 

    // 
    useEffect(() => {
        // if (localStorage.getItem('shortSavedMovies') === 'true') {
        //     setCheckedShortMovies(true);
        //     setSearchedMovies(filterShortMovies(savedMoviesList));
        // } else {
        //     setCheckedShortMovies(false);
            setSearchedMovies(savedMoviesList);
        // }
    }, [savedMoviesList])

    useEffect(() => {
        setFiltredShortMovies(savedMoviesList);
        savedMoviesList.length === 0 ? setNotFoundMovies(true) : setNotFoundMovies(false);
    }, [savedMoviesList]);


    // Поиск фильмов по запросу
    function handleSearchSubmit(inputMovie) {
        const savedMovies = filterMovies(savedMoviesList, inputMovie, checkedShortMovies);
        if (savedMovies.length === 0) {
            setNotFoundMovies(true);
        }
        else {
            setNotFoundMovies(false);
            setFiltredShortMovies(savedMovies);
            setSearchedMovies(savedMovies);
        }
    }

    // изменение состояния чекбокса для короткометражек
    function handleChangeCheckbox() {
        if (checkedShortMovies) {
            setCheckedShortMovies(false);
            localStorage.setItem('shortSavedMovies', false);
            filtredShortMovies.length === 0 ? setNotFoundMovies(true) : setNotFoundMovies(false);
            setSearchedMovies(filtredShortMovies);
        } else {
            setCheckedShortMovies(true);
            localStorage.setItem('shortSavedMovies', true);
            setSearchedMovies(filterShortMovies(filtredShortMovies));
            filterShortMovies(filtredShortMovies).length === 0 ? setNotFoundMovies(true) : setNotFoundMovies(false);
        }
    }

    return (
        <>
            <main className="saved-movies">
                <SearchForm
                    handleSearchSubmit={handleSearchSubmit}
                    onChange={handleChangeCheckbox}
                    checkedShortMovies={checkedShortMovies} />
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