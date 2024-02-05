import { React } from "react";
import './FormInput.css';

function FormInput({ id, label, type, placeholder, minLength, maxLength, errorMessage }) {

    return (
        <div className="form-input">
            <label className="form-input__label htmlFor={id}">{label}</label>
            <input className="form-input__input" type={type} id={id} placeholder={placeholder} minLength={minLength} maxLength={maxLength} required />
            <span className="form-input__error">{errorMessage}</span>
        </div>

    );
}

export default FormInput;