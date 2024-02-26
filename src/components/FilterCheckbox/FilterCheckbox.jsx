import React from "react";
import './FilterCheckbox.css';


function FilterCheckbox({ onChange, checkedShortMovies }) {
    return (
        <fieldset className="checkbox">
            <input className="checkbox__input"
                type="checkbox"
                id="short-films"
                onChange={onChange}
                checked={checkedShortMovies}
            />
            <label className="checkbox__text" htmlFor="short-films">Короткометражки</label>
        </fieldset>
    )
}


export default FilterCheckbox;