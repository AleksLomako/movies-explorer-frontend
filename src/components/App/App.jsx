import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from './../Movies/Movies';
import SavedMovies from './../SavedMovies/SavedMovies';
import Profile from './../Profile/Profile';
import Register from './../Register/Register';
import Login from './../Login/Login';
import NotFoundPage from './../NotFoundPage/NotFoundPage';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true); // состояние авторизации пользователя

  const [currentUser, setCurrentUser] = useState({}); //Данные текущего пользователя

  //Обработчик регистрации
  function handleRegister() {

  }

//Обработчик входа в приложение
  function handleLogin() {

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
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Movies />
              <Footer />
            </>
          }
          />
          <Route path="/saved-movies" element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies />
              <Footer />
            </>
          }
          />
          <Route path="/profile" element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Profile />
            </>
          }
          />
          <Route path="/signup" element={<Register onRegister={handleRegister}/>} />
          <Route path="/signin" element={<Login onLogin={handleLogin}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    </CurrentUserContext.Provider>

  );
}

export default App;
