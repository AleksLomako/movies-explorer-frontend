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
                className=""
            >
                <FormInput
                    label="E-mail"
                    type="email"
                    id="login-email"
                    placeholder="E-mail"
                    errorMessage="почта от 3 до 30 символов"
                />
                <FormInput
                    label="Пароль"
                    type="password"
                    id="login-password"
                    placeholder="Пароль"
                    errorMessage="пароль от 3 до 30 символов"
                />
            </FormAuth>
        </div>
    );
}

export default Login;