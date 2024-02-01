import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
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

  return (
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
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
