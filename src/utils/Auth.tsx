import { IAuthData } from "../utils/types";

export const URL = "https://someUrl";


function onResponse(res: any) {
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

// Авторизация в системе
export const authorization = ({ login, password }: IAuthData) => {
  return fetch(`${URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login, password }),
  })
    .then((res) => onResponse(res))
    .then((data) => {
      localStorage.setItem("token", data.token);
    });
};

// Вход в аккаунт по токену
export const login = (jwtToken: string) => {
  return fetch(`${URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwtToken}`,
    },
  }).then((res) => onResponse(res));
};
