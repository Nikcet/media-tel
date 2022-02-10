import React from "react";
import { useHistory } from "react-router-dom";

export default function Login({ ...props }) {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.onLogin({
      login,
      password,
    });
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const value = target.value;
    target.id === "input-login" ? setLogin(value) : setPassword(value);
  }

  return (
    <div className="login">
      <div className="login__wrap">
        <h2 className="login__header">Вход</h2>
        <div className="login__form-wrap">
          <form action="" className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="input-login" className="login__label">
              Логин
            </label>
            <input
              id="input-login"
              type="text"
              className="login__input login__input-login"
              onChange={onChange}
              value={login}
              required
            />
            <label htmlFor="input-password" className="login__label">
              Пароль
            </label>
            <input
              id="input-password"
              type="password"
              className="login__input login__input-password"
              onChange={onChange}
              value={password}
              required
            />
            <button className="login__submit-btn" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
