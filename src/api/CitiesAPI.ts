const URL = "https://api.hh.ru/areas"; // Данные беру из открытого бесплатного api hh.ru
const RUSSIA_ID = "113"; 

class Api {
  _URL = "";
  COUNTRY_ID = "";

  constructor(url: string, id: string) {
    this._URL = url;
    this.COUNTRY_ID = id;
  }

  onResponse(res: any) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
  }

  getCities() {
    return fetch(`${this._URL}/${this.COUNTRY_ID}`).then(this.onResponse);
  }
}

const citiesApi = new Api(URL, RUSSIA_ID);

export default citiesApi;
