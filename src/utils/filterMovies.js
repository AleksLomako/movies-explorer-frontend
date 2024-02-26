function filterMovies(moviesList, inputMovie, checkedShortMovies) {
    let movies = moviesList.filter(movie =>
        movie.nameRU.toLowerCase().includes(inputMovie.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(inputMovie.toLowerCase())
    );
    if (checkedShortMovies) {
        movies = filterShortMovies(movies);
    }
    return movies
}

function filterShortMovies(moviesList) {
    return moviesList.filter(movie => movie.duration < 40);
}

export {filterMovies, filterShortMovies};