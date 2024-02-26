class MainApi {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }

    // проверка ответа
    async _checkResponse(res) {
        const result = await res.json();
        return res.ok ? result : Promise.reject(result.message);
    }
    // запрос
    // _request(url, options) {
    //     return fetch(url, options).then(this._checkResponse);
    // }
    // получение токена из заголовока
    setJwt() {
        this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
    }
    // USERS

    // регистрация
    register(name, email, password) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
            .then(res => this._checkResponse(res));
    }

    // авторизация
    authorize(email, password) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => this._checkResponse(res));
    }

    // проверка токена
    checkToken(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                headers: this._headers,
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => this._checkResponse(res));
    }

    // получение данных пользователя
    getUserInfo() {
        this.setJwt()
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
            .then(res => this._checkResponse(res));
    }

    // обновление данных пользователя
    updateUserInfo(name, email) {
        this.setJwt()
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name,
                email
            })
        })
            .then(res => this._checkResponse(res));
    }

    // MOVIES

    // добавление фильма в "сохраненные"
    saveMovie(data) {
        this.setJwt()
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: data.image,
                trailerLink: data.trailerLink,
                thumbnail: data.thumbnail,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        })
            .then(res => this._checkResponse(res));
    }

    // получение сохраненных фильмов
    getSavedMovies() {
        this.setJwt()
        return fetch(`${this._url}/movies`, {
            headers: this._headers
        })
            .then(res => this._checkResponse(res));
    }

    // удаление сохраненного фильма
    deleteSavedMovie(id) {
        this.setJwt()
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => this._checkResponse(res));
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.alekslomako.movies.nomoredomainsmonster.ru',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default mainApi;