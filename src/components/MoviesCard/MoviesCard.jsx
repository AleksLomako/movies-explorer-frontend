import { React, useState } from "react";
import { useLocation } from "react-router-dom";

import './MoviesCard.css';


function MoviesCard({ movieName, movieDuration, movieImage, movieId, isSaved }) {
    const [movieSaved, setMovieSaved] = useState(isSaved);

    const location = useLocation();

    function handleSaveMovie() {
        setMovieSaved(!movieSaved);
    }

    function handleDeleteMovie() {
        console.log(movieId);
    }

    return (
        <li className="movie-card">
            <div className="movie-card__header">
                <h2 className="movie-card__title">{movieName}</h2>
                <p className="movie-card__duration">{movieDuration}</p>
            </div>
            <img className="movie-card__image" src={movieImage} alt={`Постер фильма '${movieName}'`} />

            {location.pathname === '/movies' && (
                <button
                    className={`movie-card__button movie-card__button_type${movieSaved ? '_saved' : '_unsaved'}`}
                    onClick={handleSaveMovie}
                />
            )}

            {location.pathname === '/saved-movies' && (
                <button
                    className={`movie-card__button movie-card__button_type_delete`}
                    onClick={handleDeleteMovie}
                />
            )}
        </li>
    );
}

export default MoviesCard;