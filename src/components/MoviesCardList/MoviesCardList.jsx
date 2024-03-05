import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList, savedMoviesList, onSaveClick, onDeleteClick }) {

    const { pathname } = useLocation();
    const [displayedMovies, setDisplayedMovies] = useState([]);  //отфильтрованные фильмы для отображения
    const [countMovies, setCountMovies] = useState(0);
    const [tempInput, setTempInput] = useState('')

    function showCount() {
        const width = window.innerWidth;
        if (width > 1136) {
            setCountMovies(12);
        } else if (width > 635) {
            setCountMovies(8);
        }
        else {
            setCountMovies(5);
        }
    }

    useEffect(() => {
        showCount();
        setTempInput(localStorage.getItem('inputMovie'))
    }, []);


    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', showCount);
        }, 1000);
    });

    function showMore() {
        const width = window.innerWidth;
        if (width > 1136) {
            setCountMovies(countMovies + 3);
        }
        else if (width > 635) {
            setCountMovies(countMovies + 2);
        }
        else {
            setCountMovies(countMovies + 2);
        }
    }

    useEffect(() => {
        setDisplayedMovies(moviesList)
        if (tempInput !== localStorage.getItem('inputMovie')){
            setTempInput(localStorage.getItem('inputMovie'))
            showCount()
        }
    }, [moviesList, countMovies])


    // Получение списка сохраненных фильмов
    function getSavedMoviesList(array, movie) {
        return array.find((item) => {
            return item.movieId === (movie.id || movie.movieId);
        })
    }

    return (
        <div className="movies-cardlist">
            {pathname === '/saved-movies' ? (
                <>
                    <ul className="movies-cardlist__items">
                        {displayedMovies.map((movie) => (
                            <MoviesCard
                                key={movie.id || movie._id}
                                movie={movie}
                                movieSaved={getSavedMoviesList(savedMoviesList, movie)}
                                onSaveClick={onSaveClick}
                                onDeleteClick={onDeleteClick}
                            />
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    <ul className="movies-cardlist__items">
                        {displayedMovies.slice(0, countMovies).map((movie) => (
                            <MoviesCard
                                key={movie.id || movie._id}
                                movie={movie}
                                movieSaved={getSavedMoviesList(savedMoviesList, movie)}
                                onSaveClick={onSaveClick}
                                onDeleteClick={onDeleteClick}
                            />
                        ))}
                    </ul>
                    <div className="movies-cardlist__more">
                        {displayedMovies.length > countMovies ? (
                            <button className="movies-cardlist__more-button" onClick={showMore}>
                                Ещё
                            </button>
                        ) : (
                            ''
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default MoviesCardList;