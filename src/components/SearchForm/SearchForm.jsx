import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchIcon from '../../images/search-icon.svg';
import SearchFind from '../../images/search-find.svg';

function SearchForm({ handleSearchSubmit, onChange, checkedShortMovies, errorMessage}) {

    const location = useLocation();
    const [searchMovie, setSearchMovie] = useState('');
    const [errors, setErrors] = useState(''); 


    useEffect(()=>{
        if (searchMovie !== ""){
            handleSearchSubmit(searchMovie);
            // console.log(searchMovie);
        }
        else{
            // console.log(searchMovie);
        }
        

    },[checkedShortMovies])

    function handleChangeInputs(e) {
        setSearchMovie(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // setErrors('');
        handleSearchSubmit(searchMovie);
    }

    useEffect(() => {
        if (location.pathname === '/movies' && localStorage.getItem('inputMovie')) {
            const localSearch = localStorage.getItem('inputMovie');
            setSearchMovie(localSearch);
        }
    }, [location]);

    return (
        <div className="search-form">
            <form
                className="search-form__form"
                onSubmit={handleSubmit}
                noValidate
            >
                <fieldset className="search-form__fieldset">
                    <img className="search-form__search-icon" src={SearchIcon} alt="Иконка лупы поиска" />
                    <input
                        className="search-form__input"
                        name="search"
                        onChange={handleChangeInputs}
                        value={searchMovie || ''}
                        type="search"
                        placeholder="Фильм"
                        required >
                    </input>
                    <button className="search-form__search-button" type="submit">
                        <img className="" src={SearchFind} alt="Иконка поиска" />
                    </button>
                </fieldset>
                {/* <span className="search-form__error">{errors}</span> */}
                <span className="search-form__api-error">{errorMessage}</span>
                <FilterCheckbox
                    onChange={onChange}
                    checkedShortMovies={checkedShortMovies}
                />
            </form>
        </div>
    );
}

export default SearchForm;