import React from "react";
import './AboutMe.css';
import avatar from "../../../images/f60ce78dd1d6b983e7f2a72309fb55b4.jpeg";

function AboutMe() {
    return (
        <section className="about-me">
            <div className="section-header section-header_about-me">
                <h3 className="section-title">Студент</h3>
            </div>
            <div className="about-me__resume">
                <img className="about-me__photo" src={avatar} alt="Мое фото" />
                <div className="about-me__info">
                    <h2 className="about-me__name">Александра</h2>
                    <p className="section-text section-text_about-me">Фронтенд-разработчик, 31 год</p>
                    <p className="section-text">Я живу в Санкт-Петербурге, закончила экономический ВУЗ по специальности "Менеджмент организации". Работала в крупном российском банке с 2014 года премиум-менеджером.
                        С 2022 года увлеклась программированием. Сейчас заканчиваю курс по веб-разработке Яндекс Практикума. Планирую в
                        ближайшее время устроиться на работу уже по новой специальности.</p>
                    <a className="about-me__link" href="https://github.com/AleksLomako" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;