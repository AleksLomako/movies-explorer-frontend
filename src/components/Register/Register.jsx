import React, { useEffect } from "react";
import FormAuth from "../FormAuth/FormAuth";
import FormInput from "../FormInput/FormInput";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Register({ onRegister }) {

    const { values, errors, isValid, handleChangeInputs, resetFormInputs } = useFormWithValidation();

    //Сброс инпутов формы
    useEffect(() => {
        resetFormInputs();
    }, [resetFormInputs]);

    //Сохранение данных формы
    function handleSubmitRegistration(e) {
        e.preventDefault();
        onRegister(values);
    }

    return (
        <div>
            <FormAuth
                title="Добро пожаловать!"
                button="Зарегистрироваться"
                answer="Уже зарегистрированы?"
                route="/signin"
                link="Войти"
                name="register"
                onSubmit={handleSubmitRegistration}
                className={`auth__submit-button ${!isValid && 'auth__submit-button_disabled'}`}
                disabled={!isValid}
            >
                <FormInput
                    label="Имя"
                    name="name"
                    value={values.name || ''}
                    onChange={handleChangeInputs}
                    type="text"
                    id="register-name"
                    minLength="2"
                    maxLength="30"
                    placeholder="Имя"
                    pattern="(-*[a-zA-Z А-Яа-яЁё]*)*"
                    errorMessage={errors.name || ''}
                />
                <FormInput
                    label="E-mail"
                    name="email"
                    value={values.email || ''}
                    onChange={handleChangeInputs}
                    type="email"
                    id="register-email"
                    placeholder="E-mail"
                    errorMessage={errors.email || ''}
                />
                <FormInput
                    label="Пароль"
                    name="password"
                    value={values.password || ''}
                    onChange={handleChangeInputs}
                    type="password"
                    id="register-password"
                    placeholder="Пароль"
                    minLength="8"
                    errorMessage={errors.password || ''}
                />
            </FormAuth>
        </div>
    );
}

export default Register;