import React, { useState, useEffect } from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import { filterMovies, filterShortMovies } from '../../utils/filterMovies';
import SearchError from "../SearchError/SearchError";


function Movies({setIsLoaderOn, savedMoviesList, onSaveClick, onDeleteClick }) {

    const [allMovies, setAllMovies] = useState([]); // все фильмы на сервере
    const [searchedMovies, setSearchedMovies] = useState([]); // фильмы по запросу
    const [filtredShortMovies, setFiltredShortMovies] = useState([]); //фильмы по запросу, отфильтрованные чекбоксом
    const [notFoundMovies, setNotFoundMovies] = useState(false); //не найденные фильмы по запросу
    const [checkedShortMovies, setCheckedShortMovies] = useState(false); // состояние чекбокса  
    const [errors, setErrors] = useState(''); // отображение ошибок



    // Проверка состояния чекбокса в хранилище
    useEffect(() => {
        (localStorage.getItem('checkboxState') === 'true') ? setCheckedShortMovies(true) : setCheckedShortMovies(false)
    }, []);


    // Отображение фильмов из хранилища
    useEffect(() => {
        if (localStorage.getItem('moviesList')) {
            const moviesList = JSON.parse(localStorage.getItem('moviesList'));
            setSearchedMovies(moviesList);

            if (localStorage.getItem('checkboxState') === 'true') {
                setFiltredShortMovies(filterShortMovies(moviesList));
            }
            else {
                setFiltredShortMovies(moviesList);
            }
        }
    }, []);

    // Создание отфильтрованного списка фильмов
    function handleMoviesList(moviesList, inputMovie, checkedShortMovies) {
        const movies = filterMovies(moviesList, inputMovie, checkedShortMovies)
        if (movies.length === 0) {
            setNotFoundMovies(true);
        }
        else {
            setNotFoundMovies(false);
        }
        setSearchedMovies(movies);
        setFiltredShortMovies(!checkedShortMovies ? movies : filterShortMovies(movies));
        localStorage.setItem('moviesList', JSON.stringify(movies));
    }


    // Поиск фильмов по запросу
    function handleSearchSubmit(inputMovie) {
        localStorage.setItem('checkboxState', checkedShortMovies)
        localStorage.setItem('inputMovie', inputMovie)
        if (allMovies.length === 0) {
            setIsLoaderOn(true);
            moviesApi.getMovies()
                .then(moviesList => {
                    setAllMovies(moviesList);
                    localStorage.setItem('moviesList', JSON.stringify(moviesList));
                    handleMoviesList(moviesList, inputMovie, checkedShortMovies);
                })
                .catch(() => {
                    setErrors('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                })
                .finally(() => setIsLoaderOn(false));
        }
        else {
            handleMoviesList(allMovies, inputMovie, checkedShortMovies)
        }
    }

    // изменение состояния чекбокса для короткометражек
    function handleChangeCheckbox() {
        setCheckedShortMovies(!checkedShortMovies);
        if (!checkedShortMovies) {
            setFiltredShortMovies(filterShortMovies(searchedMovies))
        } else {
            setFiltredShortMovies(searchedMovies)
        }
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