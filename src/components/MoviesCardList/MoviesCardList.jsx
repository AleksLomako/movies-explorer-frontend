import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MovieImage from '../../images/movie-image.png';


function MoviesCardList() {
    return (
        <div className="movies-card-list">
            <ul className="movies-card-list__items">
                <MoviesCard
                    movieName="33 слова о дизайне"
                    movieDuration="1ч 47м"
                    movieImage={MovieImage}
                />
                <MoviesCard
                    movieName="33 слова о дизайне"
                    movieDuration="1ч 47м"
                    movieImage={MovieImage}
                />
                <MoviesCard
                    movieName="33 слова о дизайне"
                    movieDuration="1ч 47м"
                    movieImage={MovieImage}
                />
                <MoviesCard
                    movieName="33 слова о дизайне"
                    movieDuration="1ч 47м"
                    movieImage={MovieImage}
                />
                <MoviesCard
                    movieName="33 слова о дизайне"
                    movieDuration="1ч 47м"
                    movieImage={MovieImage}
                />
                <MoviesCard
                    movieName="33 слова о дизайне"
                    movieDuration="1ч 47м"
                    movieImage={MovieImage}
                />
                <MoviesCard
                    movieName="33 слова о дизайне"
                    movieDuration="1ч 47м"
                    movieImage={MovieImage}
                />
                <MoviesCard
                    movieName="33 слова о дизайне"
                    movieDuration="1ч 47м"
                    movieImage={MovieImage}
                />
                <MoviesCard
                    movieName="33 слова о дизайне"
                    movieDuration="1ч 47м"
                    movieImage={MovieImage}
                />
            </ul>
        </div>
    );
}

export default MoviesCardList;