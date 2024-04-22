import { React } from "react";
import { useLocation } from "react-router-dom";

import './MoviesCard.css';
import timeConvertor from '../../utils/timeConvertor';
import beatfilmMoviesUrl from "../../utils/constants";


function MoviesCard({ movie, onSaveClick, onDeleteClick, movieSaved }) {
    
    const location = useLocation();
    const savedMoviesLocation = location.pathname === '/saved-movies';
    const imageUrl = savedMoviesLocation ? movie.image : `${beatfilmMoviesUrl}/${movie.image.url}`;
    

    function handleSaveMovie() {
        onSaveClick(movie);
    }

    function handleDeleteMovie() {
        onDeleteClick(movie);
    }

    return (
        <li className="movie-card">
            <div className="movie-card__header">
                <h2 className="movie-card__title">{movie.nameRU}</h2>
                <p className="movie-card__duration">{timeConvertor(movie.duration)}</p>
            </div>
            <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
                <img className="movie-card__image" src={imageUrl} alt={`Постер фильма '${movie.nameRU}'`} />
            </a>


            {location.pathname === '/movies' && (
                <button
                    className={`movie-card__button movie-card__button_type${!movieSaved ? '_unsaved' : '_saved'}`}
                    type="button"
                    onClick={movieSaved ? handleDeleteMovie : handleSaveMovie}
                />
            )}

            {location.pathname === '/saved-movies' && (
                <button
                    className={`movie-card__button movie-card__button_type_delete`}
                    type="button"
                    onClick={handleDeleteMovie}
                />
            )}
        </li>
    );
}

export default MoviesCard;