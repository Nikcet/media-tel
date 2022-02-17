export default function defaultUser() {
  return (
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
  );
}
