import React from "react";
import { useHistory } from "react-router-dom";
import { UsersListContext } from "../contexts/UsersListContext";
import User from "./User";

export default function UsersList({ ...props }) {
  const history = useHistory();
  const usersList = React.useContext(UsersListContext);
  const [isIncreaseUser, setIsIncreaseUser] = React.useState(true);
  const [isIncreaseCity, setIsIncreaseCity] = React.useState(true);

  function routeToAddUserPage() {
    history.push("/add-user");
  }

  function editUser(user: any) {
    props.onEditUser(user);
  }

  function deleteUser(user: any) {
    props.onDeleteUser(user);
  }

  function sortByCity() {
    props.sortCities(isIncreaseCity);
    setIsIncreaseCity(!isIncreaseCity);
  }

  function sortByFio() {
    props.sortUsers(isIncreaseUser);
    setIsIncreaseUser(!isIncreaseUser);
  }

  return (
    <div className="users">
      <div className="users__wrap">
        <button className="users__add-user-btn" onClick={routeToAddUserPage}>
          Добавить пользователя
        </button>
        <div className="users__list">
          <div className="users__list-filters">
            <button className="users__list-filter users__list-filter-fio" onClick={sortByFio}>
              ФИО <span className="users__arrow">{isIncreaseUser ? "▼" : "▲"}</span>
            </button>
            <button className="users__list-filter users__list-filter-city" onClick={sortByCity}>
              Город <span className="users__arrow">{isIncreaseCity ? "▼" : "▲"}</span>{" "}
            </button>
          </div>
          <ul className="users__list-items">
            {usersList.map((item) => {
              return (
                <User
                  key={item._id}
                  item={item}
                  onEdit={editUser}
                  onDelete={deleteUser}
                />
              );
            })}
          </ul>
        </div>
        <div className="users__nav-buttons">
          <button className="users__nav-button users__nav-button-back" onClick={() => {history.goBack()}}>
            &#8592;
          </button>
          <button className="users__nav-button users__nav-button-forward" onClick={() => {history.goForward()}}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
