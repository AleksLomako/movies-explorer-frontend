import { React } from "react";
import './FormAuth.css';
import { Link } from 'react-router-dom';

function FormAuth({ title, children, button, answer, route, link, onSubmit, name, disabled, className, errorMessage}) {

    return (
        <section className="auth">
            <header className="auth__header">
                <Link to="/" className="auth__logo" />
                <h1 className="auth__title">{title}</h1>
            </header>
            <form className="auth__form"
                onSubmit={onSubmit}
                name={name}
                noValidate>
                <div className="auth__inputs">
                    {children}
                </div>
                <span className={`auth__error ${errorMessage ? 'auth__error_visible' : ''}`}>{errorMessage}</span>
                <button className={className} type="submit" disabled={disabled}>{button}</button>
            </form>
            <p className="auth__text">{answer}
                <Link className="auth__link" to={route}>{link}</Link>
            </p>
        </section >
    );
}

export default FormAuth;