import React from "react";
import './AboutMe.css';
import avatar from "../../../images/Фото.jpg";

function AboutMe() {
    return (
        <section className="about-me">
            <div className="section-header section-header_about-me">
                <h2 className="section-title">Студент</h2>
            </div>
            <div className="about-me__resume">
                <img className="about-me__photo" src={avatar} alt="Фото владельца портфолио" />
                <div className="about-me__info">
                    <h3 className="about-me__name">Александра</h3>
                    <p className="section-text section-text_about-me">Фронтенд-разработчик, 31 год</p>
                    <p className="section-text">Я живу в Санкт-Петербурге, закончила экономический ВУЗ по специальности "Менеджмент организации". Работала в крупном российском банке.
                        С 2022 года увлеклась программированием. Сейчас заканчиваю курс по веб-разработке Яндекс Практикума. Планирую в
                        ближайшее время устроиться на работу уже по новой специальности.</p>
                    <a className="about-me__link" href="https://github.com/AleksLomako" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;