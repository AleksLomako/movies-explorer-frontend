import React from "react";
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Profile() {

    const { values, errors, isValid, handleChangeInputs, resetFormInputs } = useFormWithValidation();

    const navigate = useNavigate();

    function handleLogOutProfile() {
        navigate('/');
    }

    return (
        <>
            <main className="profile">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form className="profile__form">
                    <fieldset className="profile__inputs">
                        <label className="profile__label" htmlFor="user-name">
                            Имя
                            <input
                                className="profile__input"
                                value={values.name || ''}
                                onChange={handleChangeInputs}
                                name="name"
                                type="text"
                                placeholder="Имя"
                                id="user-name"
                                minLength="2"
                                maxLength="30"
                                pattern="(-*[a-zA-Z А-Яа-яЁё]*)*"
                                required
                            />
                        </label>
                        <span className="profile__input-error">{errors.name || ''}</span>
                        <label className="profile__label" htmlFor="user-email">
                            E-mail
                            <input
                                className="profile__input"
                                value={values.email || ''}
                                onChange={handleChangeInputs}
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                id="user-email"
                                required
                            />
                        </label>
                        <span className="profile__input-error">{errors.email || ''}</span>
                    </fieldset>
                    <fieldset className="profile__buttons">
                        {/* <>
                            <span className="profile__error">При обновлении профиля произошла ошибка.</span>
                            <button className="profile__button-submit" type="submit">Сохранить</button>
                        </> */}

                        <>
                            <button className="profile__button profile__button_edit" type="button">Редактировать</button>
                            <button className="profile__button profile__button_exit" type="button" onClick={handleLogOutProfile}>Выйти из аккаунта</button>
                        </>

                    </fieldset>
                </form>
            </main>
        </>

    );
}

export default Profile;