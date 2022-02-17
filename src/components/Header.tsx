import React from "react";
import { UserContext } from "../contexts/UserContext";

export default function Header({ ...props }) {
  const currentUser = React.useContext(UserContext);
  return (
    <div className="header">
      <div className="header__wrap">
        <div className="header__account">
          <p className="header__account-name">{props.isLoggedIn ? currentUser.fio : "Аноним"}</p>
        </div>
        <button className="header__btn-logout" type="button">
          {props.isLoggedIn ? "Выйти" : "Привет"}
        </button>
      </div>
    </div>
  );
}
