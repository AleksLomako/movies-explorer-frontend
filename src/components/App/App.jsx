import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from './../Movies/Movies';
import SavedMovies from './../SavedMovies/SavedMovies';
import Profile from './../Profile/Profile';
import Register from './../Register/Register';
import Login from './../Login/Login';
import NotFoundPage from './../NotFoundPage/NotFoundPage';
import mainApi from '../../utils/MainApi';
import beatfilmMoviesUrl from '../../utils/constants';
import Preloader from './../Preloader/Preloader';


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false); // состояние авторизации пользователя
  const [currentUser, setCurrentUser] = useState({}); //Данные текущего пользователя\
  const [savedMoviesList, setSavedMoviesList] = useState([]); // Сохраненные фильмы
  const [apiError, setApiError] = useState(''); //Ошибка от сервера
  const [loading, setLoading] = useState(false);


  // Проверка токена
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const path = location.pathname;
    if (jwt) {
      setLoading(true);
      mainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate(path, { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        })
    }
  }, []);

  //Получение информации о текущем пользователе и фильмах
  useEffect(() => {
    if (isLoggedIn) {
      setLoading(true)
      mainApi.getUserInfo().then(res => {
        setCurrentUser(res.user);
      })
        .catch((err) => {
          console.log(err);
        });
      mainApi.getSavedMovies().then((res) => {
        setSavedMoviesList(res);
      })
        .catch((err) => {
          console.log(err);
        })
        .finally(() =>
          setLoading(false)
        );
    }
  }, [isLoggedIn]);

  // Обработчик входа в приложение
  function handleLogin({ email, password }) {
    setLoading(true)
    mainApi.authorize(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true);
        setApiError('');
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
        setApiError(err);
      })
      .finally(() => {
        setLoading(false)
      });
  };

  // Обработчик регистрации
  function handleRegister({ name, email, password }) {
    setLoading(true);
    mainApi.register(name, email, password)
      .then((res) => {
        handleLogin({ email, password })
      })
      .catch((err) => {
        setApiError(err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Редактирование профиля
  function handleEditProfile(user) {
    setLoading(true);
    mainApi.updateUserInfo(user.name, user.email)
      .then((newUser) => {
        setCurrentUser(newUser);
      })
      .catch((err) => {
        setApiError(err)
      })
      .finally(() => {
        setLoading(false);
      });
  };


  // Сохранение фильма
  function handleSaveMovie(movie) {
    const imageUrl = `${beatfilmMoviesUrl}/${movie.image.url}`;
    let saveMovie = {
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      director: movie.director,
      country: movie.country,
      year: movie.year,
      duration: movie.duration,
      description: movie.description,
      trailerLink: movie.trailerLink,
      image: imageUrl,
      thumbnail: imageUrl,
      id: movie.id,
    }
    mainApi.saveMovie(saveMovie)
      .then((newMovie) => {
        setSavedMoviesList([newMovie, ...savedMoviesList]);
      })
      .catch((err) => {
        setApiError(err)
      })
  }

  // Удаление фильма из сохраненных
  function handleDeleteMovie(movie) {
    const saveMovie = savedMoviesList.find((item) => item.movieId === movie.id || item.movieId === movie.movieId)
    mainApi.deleteSavedMovie(saveMovie._id)
      .then(() => {
        setSavedMoviesList((state) => state.filter((c) => (movie.id === c.movieId || movie.movieId === c.movieId) ? false : true))
      })
      .catch((err) => {
        setApiError(err)
      });
  }

  // Выход из текущего профиля
  function handleLogOut() {
    setApiError('');
    setCurrentUser({});
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('inputMovie');
    localStorage.removeItem('moviesList');
    localStorage.setItem('moviesList', "")
    localStorage.setItem('shortSavedMovies', '')
    localStorage.removeItem('checkboxState');
    localStorage.removeItem('shortSavedMovies');
    navigate('/', { replace: true });
  }

  return (
    <>
      {loading && <Preloader />}
      <CurrentUserContext.Provider value={currentUser}>
        <>
          <Routes>
            <Route path="/" element={
              <>
                <Header isBlueTheme={true} isLoggedIn={isLoggedIn} />
                <Main />
                <Footer />
              </>
            }
            />
            <Route path="/movies" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Header isLoggedIn={isLoggedIn} />
                <Movies
                  savedMoviesList={savedMoviesList}
                  onSaveClick={handleSaveMovie}
                  onDeleteClick={handleDeleteMovie} />
                <Footer />
              </ProtectedRoute>
            }
            />
            <Route path="/saved-movies" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Header isLoggedIn={isLoggedIn} />
                <SavedMovies
                  savedMoviesList={savedMoviesList}
                  onDeleteClick={handleDeleteMovie} />
                <Footer />
              </ProtectedRoute>
            }
            />
            <Route path="/profile" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Header isLoggedIn={isLoggedIn} />
                <Profile
                  onUpdateUser={handleEditProfile}
                  onExitProfile={handleLogOut}
                  apiError={apiError}
                  setApiError={setApiError}
                />
              </ProtectedRoute>
            }
            />
            <Route path="/signup" element={isLoggedIn ? <Navigate to="/movies" replace /> : <Register onRegister={handleRegister} errorMessage={apiError} />} />
            <Route path="/signin" element={isLoggedIn ? <Navigate to="/movies" replace /> : <Login onLogin={handleLogin} errorMessage={apiError} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
