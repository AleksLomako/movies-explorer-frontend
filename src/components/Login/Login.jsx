import React from "react";
import './Login.css';
import FormAuth from "../FormAuth/FormAuth";
import FormInput from "../FormInput/FormInput";

function Login() {
    return (
        <div>
            <FormAuth
                title="Рады видеть!"
                button="Войти"
                answer="Ещё не зарегистрированы?"
                route="/signup"
                link="Регистрация"
            >
                <FormInput
                    label="E-mail"
                    type="email"
                    id="login-email"
                    placeholder="E-mail"
                    minLength="2"
                    maxLength="30"
                    errorMessage="почта от 2 до 30 символов"
                />
                <FormInput
                    label="Пароль"
                    type="password"
                    id="login-password"
                    placeholder="Пароль"
                    minLength="2"
                    maxLength="30"
                    errorMessage="пароль от 2 до 30 символов"
                />
            </FormAuth>
        </div>
    );
}

export default Login;