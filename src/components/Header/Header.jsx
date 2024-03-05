import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ isBlueTheme, isLoggedIn }) {
    return (
        <header className={`header ${isBlueTheme ? 'header_blue-theme' : ''}`}>
            <Link className="header__logo" to="/"></Link>
            {isLoggedIn ?
                <Navigation isBlueTheme={isBlueTheme} />
                :
                <nav className="header__sign-links">
                    <Link to="/signup" className="header__signup-link">Регистрация</Link>
                    <Link to="/signin" className="header__signin-link">Войти</Link>
                </nav>
            }

        </header>
    );
}

export default Header;