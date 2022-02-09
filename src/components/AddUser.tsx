export default function AddUser() {
  return (
    <div className="add-user">
      <div className="add-user__wrap">
        <h2 className="add-user__header">Добавление пользователя</h2>
        <div className="add-user__form-wrap">
          <form action="" className="add-user__form">
            <div className="add-user__fio-input">
              <label htmlFor="input-add-user-fio" className="add-user__label">
                ФИО:
              </label>
              <input
                id="input-add-user-fio"
                type="text"
                className="add-user__input add-user__input-fio"
              />
            </div>
            <div className="add-user__city-input">
              <label htmlFor="input-add-user-city" className="add-user__label">
                Город:
              </label>
              <input
                id="input-add-user-city"
                type="city"
                className="add-user__input add-user__input-city"
              />
            </div>
            <button type="submit" className="add-user__btn">Добавить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
