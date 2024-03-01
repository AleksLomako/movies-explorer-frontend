import React, { useEffect, useState } from "react";
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Profile({ onUpdateUser, onExitProfile, apiError, setApiError}) {

    const currentUser = React.useContext(CurrentUserContext);
    const { values, errors, isValid, handleChangeInputs, resetFormInputs } = useFormWithValidation();
    const [isFormValid, setIsFormValid] = useState(false);//состояние инпутов

    const inputValidity = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));
    

    React.useEffect(() => {
        setApiError('')
    }, [setApiError])

    useEffect(() => {
        if (currentUser) {
            resetFormInputs(currentUser, {}, true);
        }
    }, [currentUser, resetFormInputs]);

    function onEditProfile() {
        setApiError('')
        setIsFormValid(true);
    }

    function handleProfileSubmit(e) {
        e.preventDefault();
        onUpdateUser(values);
        setApiError('Данные успешно обновлены')
        setIsFormValid(false)
    }


    return (
        <>
            <main className="profile">
                <h1 className="profile__title">{`Привет, ${currentUser.name || ''}!`}</h1>
                <form className="profile__form"
                    name="profile"
                    onSubmit={handleProfileSubmit}
                    noValidate>
                    <fieldset className="profile__inputs" disabled={isFormValid ? false : true}>
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
                        <span className="profile__error">{apiError}</span>
                        <button
                            className={`profile__button-submit ${inputValidity && 'profile__button-submit_inactive'}`}
                            type="submit"
                            disabled={inputValidity ? true : false}
                            hidden={!isFormValid}
                        >
                            Сохранить
                        </button>

                        <button
                            className="profile__button profile__button_edit"
                            type="button"
                            onClick={onEditProfile}
                            hidden={isFormValid}
                        >
                            Редактировать
                        </button>
                        <button
                            className="profile__button profile__button_exit"
                            type="button"
                            onClick={onExitProfile}
                            hidden={isFormValid}
                        >
                            Выйти
                        </button>
                    </fieldset>
                </form>
            </main>
        </>
    );
}

export default Profile;