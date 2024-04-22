import React from "react";
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/AleksLomako/how-to-learn" target="_blank" rel="noopener noreferrer">
                        <h4 className="portfolio__link-item">Статичный сайт</h4>
                        <p className="portfolio__link-item">↗</p>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://alekslomako.github.io/russian-travel/" target="_blank" rel="noopener noreferrer">
                        <h4 className="portfolio__link-item">Адаптивный сайт</h4>
                        <p className="portfolio__link-item">↗</p>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com//AleksLomako/react-mesto-api-full-gha" target="_blank" rel="noopener noreferrer">
                        <h4 className="portfolio__link-item">Одностраничное приложение</h4>
                        <p className="portfolio__link-item">↗</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;