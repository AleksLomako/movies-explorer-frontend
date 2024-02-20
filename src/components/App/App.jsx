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
import moviesApi from '../../utils/MoviesApi';


function App() {

  const navigate = useNavigate();
  const location = useLocation();


  const [isLoggedIn, setIsLoggedIn] = useState(false); // состояние авторизации пользователя
  const [currentUser, setCurrentUser] = useState({}); //Данные текущего пользователя
  const [apiError, setApiError] = useState(''); //Ошибка от сервера


  // Проверка токена
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const path = location.pathname;
    if (jwt) {
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
    }
  }, []);

  //Получение информации о текущем пользователе
  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getUserInfo().then(res => {
        setCurrentUser(res.user);
      })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  // Обработчик входа в приложение
  function handleLogin({ email, password }) {
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
        setIsLoggedIn(false);
      })
  };

  // Обработчик регистрации
  function handleRegister({ name, email, password }) {
    mainApi.register(name, email, password)
      .then((res) => {
        handleLogin({email, password})
      })
      .catch((err) => {
        setApiError(err);
        console.log(err);
      })
  };

  // Редактирование профиля
  function handleEditProfile(user) {
    mainApi.updateUserInfo(user.name, user.email)
      .then((newUser) => {
        setCurrentUser(newUser);
        setApiError('Данные успешно обновлены')
      })
      .catch((err) => {
        setApiError(err)
      });
  };

  // Выход из текущего профиля
  function handleLogOut() {
    setApiError('');
    setCurrentUser({});
    setIsLoggedIn(false);
    localStorage.removeItem('jwt')
    navigate('/', { replace: true })
  }

  return (
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
              <Movies />
              <Footer />
            </ProtectedRoute>
          }
          />
          <Route path="/saved-movies" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies />
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
                errorMessage={apiError}
              />
            </ProtectedRoute>
          }
          />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/movies" replace /> : <Register onRegister={handleRegister} errorMessage={apiError}/>} />
          <Route path="/signin" element={isLoggedIn ? <Navigate to="/movies" replace /> : <Login onLogin={handleLogin} errorMessage={apiError}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    </CurrentUserContext.Provider>

  );
}

export default App;
