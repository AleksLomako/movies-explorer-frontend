import { React } from "react";
import './FormAuth.css';
import LogoAuth from '../../images/logo-auth.svg';
import { Link } from 'react-router-dom';

function FormAuth({ title, children, button, answer, route, link, className }) {

    return (
        <section className="auth">
            <header className="auth__header">
                <img className="auth__logo" src={LogoAuth} alt="Логотип авторизации" />
                <h1 className="auth__title">{title}</h1>
            </header>
            <main>
                <form className="auth__form">
                    {children}
                    <button className={"auth__submit-button"+ className} type="submit">{button}</button>
                </form>
                <p className="auth__text">{answer}
                    <Link className="auth__link" to={route}>{link}</Link>
                </p>
            </main>
        </section>
    );
}

export default FormAuth;