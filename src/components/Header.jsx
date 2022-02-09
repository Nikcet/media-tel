export default function Header() {
  return (
    <div className="header">
      <div className="header__wrap">
        <div className="header__account">
          <p className="header__account-name">Иванов Иван Иванович</p>
        </div>
        <button className="header__btn-logout">Выйти</button>
      </div>
    </div>
  );
}
