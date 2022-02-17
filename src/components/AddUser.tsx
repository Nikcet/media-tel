import React from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { IUser } from "../utils/types";
import UUIDv4 from "../utils/Uuid";

export default function AddUser({ ...props }) {
  const history = useHistory();
  let userContext = React.useContext(UserContext);
  const [fio, setFio] = React.useState("");
  const [city, setCity] = React.useState({ id: "12345", name: "" });
  const [cities, setCities] = React.useState<any[]>([{ id: "", name: "" }]);

  React.useEffect(() => {
    setCities(props.cities);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    userContext = {
      _id: UUIDv4(),
      fio,
      cityId: {
        id: "12345",
        name: city.name,
      },
    };

    addUserObject(userContext);
    history.goBack();
  }

  function addUserObject(user: IUser) {
    props.onAddUser(user, true);
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const value = target.value;
    if (target.id === "input-add-user-fio") {
      setFio(value);
    } else {
      setCity({
        id: "12345",
        name: value,
      });
    }
  }

  return (
    <div className="add-user">
      <div className="add-user__wrap">
        <h2 className="add-user__header">Добавление пользователя</h2>
        <div className="add-user__form-wrap">
          <form action="" className="add-user__form" onSubmit={handleSubmit}>
            <div className="add-user__fio-input">
              <label htmlFor="input-add-user-fio" className="add-user__label">
                ФИО:
              </label>
              <input
                id="input-add-user-fio"
                type="text"
                className="add-user__input add-user__input-fio"
                onChange={onChange}
                value={fio}
                required
              />
            </div>
            <div className="add-user__city-input">
              <label htmlFor="input-add-user-city" className="add-user__label">
                Город:
              </label>
              <input
                id="input-add-user-city"
                type="text"
                className="add-user__input add-user__input-city"
                onChange={onChange}
                value={city.name}
                required
                list="cities"
              />
              <datalist id="cities">
                {cities.map((city) => {
                  return <option key={city.id} value={city.name} />;
                })}
              </datalist>
            </div>
            <button type="submit" className="add-user__btn">
              Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
