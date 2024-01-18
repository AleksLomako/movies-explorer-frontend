import { React } from "react";
import './FormInput.css';

function FormInput({ id, label, type, placeholder, errorMessage }) {

    return (
        <div className="formInput">
            <label className="formInput__label htmlFor={id}">{label}</label>
            <input className="formInput__input" type={type} id={id} placeholder={placeholder} />
            <span className="formInput__error">{errorMessage}</span>
        </div>

    );
}

export default FormInput;