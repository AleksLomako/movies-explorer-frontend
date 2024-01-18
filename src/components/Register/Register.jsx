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
                className="_register"
            >
                <FormInput
                    label="Имя"
                    type="text"
                    id="register-name"
                    placeholder="Имя"
                    errorMessage="Имя от 3 до 30 символов"
                />
                <FormInput
                    label="E-mail"
                    type="email"
                    id="register-email"
                    placeholder="E-mail"
                    errorMessage="почта от 3 до 30 символов"
                />
                <FormInput
                    label="Пароль"
                    type="password"
                    id="register-password"
                    placeholder="Пароль"
                    errorMessage="пароль от 3 до 30 символов"
                />
            </FormAuth>
        </div>
    );
}

export default Register;