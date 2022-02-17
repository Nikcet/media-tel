import { IAuthData } from "../utils/types";

const URL = "https://someUrl";

class Auth {
  _url = "";

  constructor(url: string) {
    this._url = url;
  }

  onResponse(res: any) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
  }

  // Регистрация в системе
  // export const registration = ({ email, password }: IAuthData) => {
  //   return fetch(`${URL}/signup`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email, password }),
  //   }).then((res) => onResponse(res));
  // };

  // Авторизация
  authorization = ({ login, password }: IAuthData) => {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    })
      .then((res) => this.onResponse(res))
      .then((data) => {
        localStorage.setItem("token", data.token);
      });
  };

  // Вход в аккаунт по токену
  login = (jwtToken: string) => {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwtToken}`,
      },
    }).then((res) => this.onResponse(res));
  };
}

const auth = new Auth(URL);

export default auth;
