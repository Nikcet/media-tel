import { IUser } from "../utils/types";
const URL = "https://localhost/api";

class Api {
  _url = "";

  constructor(url: string) {
    this._url = url;
  }

  onResponse(res: any) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
  }

  addUser(user: IUser) {
    return fetch(`${this._url}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(this.onResponse);
  }

  deleteUser(user: IUser) {
    return fetch(`${this._url}/users/${user._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(this.onResponse);
  }

  editUser(user: IUser) {
    return fetch(`${this._url}/users/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }).then(this.onResponse);
  }
}

const api = new Api(URL);

export default api;
