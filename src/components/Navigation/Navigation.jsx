import { React, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import ProfileIcon from '../../images/navigation-icon.svg';

function Navigation({ isBlueTheme }) {

    const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false); // состояние меню-навигации

    //Открытие-закрытие меню-навигации
    function handleClickBurgerMenu() {
        setIsBurgerMenuOpened(!isBurgerMenuOpened);
    }

    return (
        <>
            <nav className={`navigation ${isBurgerMenuOpened ? 'navigation__visible' : ''}`}
            onClick={isBurgerMenuOpened ? handleClickBurgerMenu : undefined}
            >
                <div className={`navigation__menu ${isBlueTheme ? 'navigation__menu_blue-theme' : ''}`}>
                    <ul className="navigation__links">
                        {isBurgerMenuOpened && (
                            <li>
                                <NavLink className={`navigation__link ${isBlueTheme ? 'navigation__link_blue-theme' : ''}`} to="/">Главная</NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink className={`navigation__link ${isBlueTheme ? 'navigation__link_blue-theme' : ''}`} to="/movies">Фильмы</NavLink>
                        </li>
                        <li>
                            <NavLink className={`navigation__link ${isBlueTheme ? 'navigation__link_blue-theme' : ''}`} to="/saved-movies">Сохранённые фильмы</NavLink>
                        </li>
                    </ul>
                    <Link className="navigation__profile" to="/profile">
                        <p className={`navigation__text ${isBlueTheme ? 'navigation__text_blue-theme' : ''}`}>Аккаунт</p>
                        <img className={`navigation__icon ${isBlueTheme ? 'navigation__icon_blue-theme' : ''}`} src={ProfileIcon} alt="Иконка профиля" />
                    </Link>
                </div>
            </nav>
            <button
                className={`navigation__menu-button ${isBurgerMenuOpened ? 'navigation__menu-button_closed' : ''}`}
                onClick={handleClickBurgerMenu}>
            </button>
        </>
    );
}

export default Navigation;