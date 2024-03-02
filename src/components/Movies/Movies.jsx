import React, { useState, useEffect } from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import { filterMovies, filterShortMovies } from '../../utils/filterMovies';
import SearchError from "../SearchError/SearchError";
import Preloader from './../Preloader/Preloader';


function Movies({ savedMoviesList, onSaveClick, onDeleteClick }) {

    const [allMovies, setAllMovies] = useState([]); // все фильмы на сервере
    const [filtredShortMovies, setFiltredShortMovies] = useState([]); //фильмы по запросу, отфильтрованные чекбоксом
    const [notFoundMovies, setNotFoundMovies] = useState(false); //не найденные фильмы по запросу
    const [checkedShortMovies, setCheckedShortMovies] = useState(false); // состояние чекбокса  
    const [errors, setErrors] = useState(''); // отображение ошибок
    const inputMovie = localStorage.getItem('inputMovie');
    const checkboxState = localStorage.getItem('checkboxState');
    const [preloader, setPreloader] = useState(false);


    // Проверка состояния чекбокса в хранилище
    useEffect(() => {
        (localStorage.getItem('checkboxState') === 'true') ? setCheckedShortMovies(true) : setCheckedShortMovies(false)
    }, []);


    // Отображение фильмов из хранилища
    useEffect(() => {
        if (localStorage.getItem('moviesList')) {
            if (checkboxState === 'true') {
                handleMoviesList(JSON.parse(localStorage.getItem('moviesList')), inputMovie, true)
            }
            else {
                handleMoviesList(JSON.parse(localStorage.getItem('moviesList')), inputMovie, false)
            }
        }
    }, []);

    // Создание отфильтрованного списка фильмов
    function handleMoviesList(moviesList, inputMovie, checkboxState) {
        let movies = filterMovies(moviesList, inputMovie, checkboxState)
        if (checkboxState === true) {
            movies = filterShortMovies(movies)
        }
        if (movies.length === 0) {
            setNotFoundMovies(true);
        }
        else {
            setNotFoundMovies(false);
        }
        setFiltredShortMovies(movies);
        localStorage.setItem('moviesList', JSON.stringify(moviesList));
    }


    // Поиск фильмов по запросу
    function handleSearchSubmit(inputMovie, checkboxState) {
        localStorage.setItem('checkboxState', checkedShortMovies)
        localStorage.setItem('inputMovie', inputMovie)
        if (allMovies.length === 0) {
            setPreloader(true)
            moviesApi.getMovies()
                .then(moviesList => {
                    setAllMovies(moviesList);
                    localStorage.setItem('moviesList', JSON.stringify(moviesList));
                    handleMoviesList(moviesList, inputMovie, checkboxState);
                })
                .catch(() => {
                    setErrors('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                })
                .finally(() => {
                    setPreloader(false);
                });
        }
        else {
            handleMoviesList(allMovies, inputMovie, checkboxState)
        }
    }

    // изменение состояния чекбокса для короткометражек
    function handleChangeCheckbox() {
        setCheckedShortMovies(!checkedShortMovies);
        localStorage.setItem('checkboxState', !checkedShortMovies)
    }

    return (
        <>
            <main className="movies">
                <SearchForm
                    handleSearchSubmit={handleSearchSubmit}
                    onChange={handleChangeCheckbox}
                    checkedShortMovies={checkedShortMovies}
                    errorMessage={errors}
                />
                {preloader && <Preloader />}
                {!notFoundMovies ? (
                    <MoviesCardList
                        moviesList={filtredShortMovies}
                        savedMoviesList={savedMoviesList}
                        onSaveClick={onSaveClick}
                        onDeleteClick={onDeleteClick} />
                ) : (<SearchError
                    errorText={'Ничего не найдено'} />)
                }
            </main>
        </>

    );
}

export default Movies;