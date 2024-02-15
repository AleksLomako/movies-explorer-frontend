class MainApi {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }

    // проверка ответа
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    // запрос
    _request(url, options) {
        return fetch(url, options).then(this._checkResponse);
    }
    // токен в заголовок
    setJwt() {
        this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
    }
    // USERS

    // регистрация
    register(name, email, password) {
        return this._request(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
    }

    // авторизация
    authorize(email, password) {
        return this._request(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email,
                password
            })
        })
    }

    // проверка токена
    checkToken(token) {
        return this._request(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                headers: this._headers,
                Authorization: `Bearer ${token}`
            }
        })
    }

    // получение данных пользователя
    getUserInfo() {
        this.setJwt()
        return this._request(`${this._url}/users/me`, {
            headers: this._headers
        })
            .then((result) => {
                return result
            })
    }

    // обновление данных пользователя
    updateUserInfo(name, email) {
        this.setJwt()
        return this._request(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name,
                email
            })
        })
            .then((result) => {
                return result
            })
    }

    // MOVIES

    // добавление фильма в "сохраненные"
    saveMovie(data) {
        this.setJwt()
        return this._request(`${this._url}/movies`, {
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
            .then((result) => {
                return result
            })
    }

    // получение сохраненных фильмов
    getSavedMovies() {
        this.setJwt()
        return this._request(`${this._url}/movies`, {
            headers: this._headers
        })
            .then((result) => {
                return result
            })
    }

    // удаление сохраненного фильма
    deleteSavedMovie(id) {
        this.setJwt()
        return this._request(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then((result) => {
                return result
            })
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.alekslomako.movies.nomoredomainsmonster.ru/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default mainApi;