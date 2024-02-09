import { React } from "react";
import './FormAuth.css';
import { Link } from 'react-router-dom';

function FormAuth({ title, children, button, answer, route, link }) {

    return (
        <section className="auth">
            <header className="auth__header">
                <Link to="/" className="auth__logo" />
                <h1 className="auth__title">{title}</h1>
            </header>
            <form className="auth__form">
                <div className="auth__inputs">
                    {children}
                </div>
                <button className="auth__submit-button" type="submit">{button}</button>
            </form>
            <p className="auth__text">{answer}
                <Link className="auth__link" to={route}>{link}</Link>
            </p>
        </section >
    );
}

export default FormAuth;