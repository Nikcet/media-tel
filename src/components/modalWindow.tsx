import React from "react";
import { IModalProps } from "../utils/types";
import { UserContext } from "../contexts/UserContext";

export default function ModalWindow({
  visible = false,
  object,
  ...props
}: IModalProps) {
  const userContext = React.useContext(UserContext);

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  function onKeyDown({ key }: KeyboardEvent) {
    if (key === "Escape") {
      props.onClose();
    }
  }

  if (!visible) return null;

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3 className="modal__title">Удаление пользователя</h3>
          <span className="modal__close" onClick={props.onClose}>
            &times;
          </span>
        </div>
        <div className="modal__body">
          <div className="modal__content">{`Удалить ${userContext.fio} из ${userContext.cityId.name}?`}</div>
        </div>
        <div className="modal__buttons">
          <button
            className="modal__btn modal__delete-btn"
            onClick={() => {
              props.onDelete(userContext);
              props.onClose();
            }}
          >
            Удалить
          </button>
          <button
            className="modal__btn modal__cancel-btn"
            onClick={props.onClose}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}
