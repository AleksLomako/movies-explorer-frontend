import { React } from "react";
import './FormInput.css';

function FormInput({ id, label, name, value, onChange, type, placeholder, minLength, maxLength, pattern, errorMessage }) {

    return (
        <div className="form-input">
            <label className="form-input__label htmlFor={id}">{label}</label>
            <input className="form-input__input"
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                id={id}
                placeholder={placeholder}
                minLength={minLength}
                maxLength={maxLength}
                pattern={pattern}
                required />
            <span className="form-input__error">{errorMessage}</span>
        </div>

    );
}

export default FormInput;