import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {

    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    return (
        <div className="not-found">
            <div className="not-found__page">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__subtitle">Страница не найдена</p>
            </div>
            <button className="not-found__button" type="button" onClick={goBack}>Назад</button>
        </div>


    );
}

export default NotFoundPage;