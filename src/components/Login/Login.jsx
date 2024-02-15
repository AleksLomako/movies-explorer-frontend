import React, { useEffect } from "react";
import FormAuth from "../FormAuth/FormAuth";
import FormInput from "../FormInput/FormInput";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Login({ onLogin }) {

    const { values, errors, isValid, handleChangeInputs, resetFormInputs } = useFormWithValidation();

    //Сброс инпутов формы
    useEffect(() => {
        resetFormInputs();
    }, [resetFormInputs]);

    //Сохранение данных формы
    function handleSubmitLogin(e) {
        e.preventDefault();
        onLogin(values);
    }
    return (
        <div>
            <FormAuth
                title="Рады видеть!"
                button="Войти"
                answer="Ещё не зарегистрированы?"
                route="/signup"
                link="Регистрация"
                name="login"
                onSubmit={handleSubmitLogin}
                className={`auth__submit-button ${!isValid && 'auth__submit-button_disabled'}`}
                disabled={!isValid}
            >
                <FormInput
                    label="E-mail"
                    name="email"
                    value={values.email || ''}
                    onChange={handleChangeInputs}
                    type="email"
                    id="login-email"
                    placeholder="E-mail"
                    errorMessage={errors.email || ''}
                />
                <FormInput
                    label="Пароль"
                    name="password"
                    value={values.password || ''}
                    onChange={handleChangeInputs}
                    type="password"
                    id="login-password"
                    placeholder="Пароль"
                    minLength="8"
                    errorMessage={errors.password || ''}
                />
            </FormAuth>
        </div>
    );
}

export default Login;