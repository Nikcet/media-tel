import React from "react";
import { useHistory } from "react-router-dom";

export default function User({ ...props }): any {
  const history = useHistory();

  function editUser() {
    props.onEdit(props.item);
    history.push("/edit-user");
  }

  function deleteUser() {
    props.onDelete(props.item);
  }

  return (
    <li className="users__list-item">
      <div className="users__list-item-text">
        <p className="users__list-item-value users__list-item-fio">
          {props.item.fio}
        </p>
        <p className="users__list-item-value users__list-item-city">
          {props.item.cityId.name}
        </p>
      </div>
      <div className="users__list-item-buttons">
        <button
          className="users__list-item-btn users__list-item-btn-edit"
          onClick={editUser}
        >
          &#128393;
        </button>
        <button
          className="users__list-item-btn users__list-item-delete"
          onClick={deleteUser}
        >
          &#128465;
        </button>
      </div>
    </li>
  );
}
