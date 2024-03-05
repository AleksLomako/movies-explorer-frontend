import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__text footer__text_title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__items">
                <ul className="footer__links">
                    <li>
                        <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a className="footer__link" href="https://github.com/AleksLomako" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                </ul>
                <p className="footer__text">©2024</p>
            </div>
        </footer>
    );
}

export default Footer;