import React from "react";
import './Promo.css';
import PromoLogo from '../../images/promo-logo.svg';

function Promo() {
    return (
        <section className="promo">
            <img className="promo__logo" src={PromoLogo} alt="Картинка земного шара" />
            <div className="promo__description">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a className="promo__link" href="#about-project">Узнать больше</a>
            </div>
        </section>
    );
}

export default Promo;