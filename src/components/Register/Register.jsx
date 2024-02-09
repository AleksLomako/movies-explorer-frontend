import React from "react";
import './Register.css';
import FormAuth from "../FormAuth/FormAuth";
import FormInput from "../FormInput/FormInput";

function Register() {
    return (
        <div>
            <FormAuth
                title="Добро пожаловать!"
                button="Зарегистрироваться"
                answer="Уже зарегистрированы?"
                route="/signin"
                link="Войти"
            >
                <FormInput
                    label="Имя"
                    type="text"
                    id="register-name"
                    minLength="2"
                    maxLength="30"
                    placeholder="Имя"
                    errorMessage="Имя от 2 до 30 символов"
                />
                <FormInput
                    label="E-mail"
                    type="email"
                    id="register-email"
                    placeholder="E-mail"
                    minLength="2"
                    maxLength="30"
                    errorMessage="почта от 2 до 30 символов"
                />
                <FormInput
                    label="Пароль"
                    type="password"
                    id="register-password"
                    placeholder="Пароль"
                    minLength="2"
                    maxLength="30"
                    errorMessage="пароль от 2 до 30 символов"
                />
            </FormAuth>
        </div>
    );
}

export default Register;