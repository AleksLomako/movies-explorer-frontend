import React from "react";
import './SearchForm.css';
import SearchIcon from '../../images/search-icon.svg';
import SearchFind from '../../images/search-find.svg';

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__form">
                <fieldset className="search-form__fieldset">
                    <img className="search-form__search-icon" src={SearchIcon} alt="Иконка лупы поиска" />
                    <input className="search-form__input" type="search" placeholder="Фильм" required/>
                    <button className="search-form__search-button">
                        <img className="" src={SearchFind} alt="Иконка поиска" />
                    </button>
                </fieldset>
                <fieldset className="search-form__checkbox">
                        <input className="search-form__checkbox-input" type="checkbox" id="short-films" />
                        <label className="search-form__checkbox-text" for="short-films">Короткометражки</label>
                </fieldset>
            </form>
        </section>
    );
}

export default SearchForm;