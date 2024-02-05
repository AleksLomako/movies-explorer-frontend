import React from "react";
import './Profile.css';

function Profile({ isEditUser }) {
    return (
        <>
            <main className="profile">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form className="profile__form">
                    <fieldset className="profile__inputs">
                        <div className="profile__inputs-item">
                            <label className="profile__label" htmlFor="user-name">Имя</label>
                            <input
                                className="profile__input"
                                type="text"
                                placeholder="Имя"
                                id="user-name"
                            />
                        </div>
                        <div className="profile__inputs-item">
                            <label className="profile__label" htmlFor="user-email">E-mail</label>
                            <input
                                className="profile__input"
                                type="email"
                                placeholder="E-mail"
                                id="user-email"
                            />
                        </div>
                    </fieldset>
                    <fieldset className="profile__buttons">
                        {isEditUser ?
                            <>
                                <span className="profile__error">При обновлении профиля произошла ошибка.</span>
                                <button className="profile__button-submit" type="submit">Сохранить</button>
                            </>
                            :
                            <>
                                <button className="profile__button profile__button_edit" type="button">Редактировать</button>
                                <button className="profile__button profile__button_exit" type="button">Выйти из аккаунта</button>
                            </>
                        }
                    </fieldset>
                </form>
            </main>
        </>

    );
}

export default Profile;