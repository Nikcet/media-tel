import React from "react";
import { useHistory } from "react-router-dom";

export default function UsersList() {
  const history = useHistory();

  function routeToAddUserPage() {
    history.push('/add-user');
  }

  return (
    <div className="users">
      <div className="users__wrap">
        <button className="users__add-user-btn" onClick={routeToAddUserPage}>Добавить пользователя</button>
        <div className="users__list">
          <div className="users__list-filters">
            <button className="users__list-filter users__list-filter-fio">
              ФИО <span className="users__arrow">&#9660;</span>{" "}
            </button>
            <button className="users__list-filter users__list-filter-city">
              Город <span className="users__arrow">&#9660;</span>{" "}
            </button>
          </div>
          <ul className="users__list-items">
            <li className="users__list-item">
              <div className="users__list-item-text">
                <p className="users__list-item-value users__list-item-fio">
                  Иванов Иван Иванович
                </p>
                <p className="users__list-item-value users__list-item-city">
                  Краснодар
                </p>
              </div>
              <div className="users__list-item-buttons">
                <button className="users__list-item-btn users__list-item-btn-edit">
                  &#128393;
                </button>
                <button className="users__list-item-btn users__list-item-delete">
                  &#128465;
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="users__nav-buttons">
          <button className="users__nav-button users__nav-button-back">
            &#8592;
          </button>
          <button className="users__nav-button users__nav-button-forward">
            &#8594;
          </button>
        </div>
      </div>
      <template className="user">
        <li className="users__list-item">
          <div className="users__list-item-text">
            <p className="users__list-item-value users__list-item-fio"></p>
            <p className="users__list-item-value users__list-item-city"></p>
          </div>
          <div className="users__list-item-buttons">
            <button className="users__list-item-btn users__list-item-btn-edit">
              &#128393;
            </button>
            <button className="users__list-item-btn users__list-item-delete">
              &#128465;
            </button>
          </div>
        </li>
      </template>
    </div>
  );
}
