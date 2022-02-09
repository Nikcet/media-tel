export default function Login() {
  return (
    <div className="login">
      <div className="login__wrap">
        <h2 className="login__header">Вход</h2>
        <div className="login__form-wrap">
          <form action="" className="login__form">
            <label htmlFor="input-login" className="login__label">
              Логин
            </label>
            <input
              id="input-login"
              type="text"
              className="login__input login__input-login"
            />
            <label htmlFor="input-password" className="login__label">
              Пароль
            </label>
            <input
              id="input-password"
              type="password"
              className="login__input login__input-password"
            />
            <button className="login__submit-btn">Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
}
