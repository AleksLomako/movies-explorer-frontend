import React from "react";
import './AboutProject.css';

function AboutProject() {
    return (
        <section id="about-project" className="project">
            <div className="section-header">
                <h2 className="section-title">О проекте</h2>
            </div>
            <ul className="project__about">
                <li className="project__description">
                    <h3 className="section-subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="section-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="project__description">
                    <h3 className="section-subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="section-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="project__duration">
                <div className="project__backend">
                    <span className="project__week">1 неделя</span>
                    <span className="project__lang">Back-end</span>
                </div>
                <div className="project__frontend">
                    <span className="project__week project__week_front">4 недели</span>
                    <span className="project__lang">Front-end</span>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;