import React from "react";
import Login from "./Login";
import Header from "./Header";
import UsersList from "./UsersList";
import Aside from "./Aside";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import ProtectedComponent from "./ProtectedComponent";
import ModalWindow from "./modalWindow";
import User from "./User";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { IAuthData, IUser } from "../utils/types";
import { defaultUser, UserContext } from "../contexts/UserContext";
import { UsersListContext } from "../contexts/UsersListContext";
import api from "../api/Api";
import citiesApi from "../api/CitiesAPI";
import auth from "../api/Auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<IUser>(defaultUser);
  const [usersList, setUsersList] = React.useState<IUser[]>([currentUser]);
  const [citiesList, setCitiesList] = React.useState<any[]>([
    { id: "", name: "" },
  ]);
  const [isModal, setIsModal] = React.useState(false);

  React.useEffect(() => {
    // signIn(); // Для обхода авторизации - раскомментировать
    getCitiesList();
  }, []);

  function onLogin({ login, password }: IAuthData): void {
    // ...
    signIn();
  }

  function signIn(): void {
    localStorage.setItem("token", "testToken"); // Для решения тестового задания
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      auth
        .login(token)
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch((err) => console.log("Не залогинился:", err));
    } else {
      setIsLoggedIn(false);
    }
  }

  // function signOut(): void {
  //   localStorage.removeItem("token");
  //   setIsLoggedIn(false);
  // }

  function updateUserData(user: IUser, isNewUser: boolean): void {
    if (isNewUser) {
      addUserAtList(user); // Для выполнения тестового. Должен выполняться внутри then.
      api
        .addUser(user)
        .catch((err) => console.log("Не добавился пользователь: ", err));
    } else {
      setCurrentUser(user);
      api
        .editUser(user)
        .catch((err) => console.log("Не обновился пользователь: ", err));
    }
  }

  function addUserAtList(user: IUser) {
    setUsersList([...usersList, user]);
  }

  function deleteUser(user: IUser) {
    let newUsersList = usersList.filter((item) => {
      return item._id !== user._id;
    });
    setUsersList(newUsersList);
    api
      .deleteUser(user)
      .catch((err) => console.log("Не удалился пользователь: ", err));
  }

  function openModalToDeleteUser(user: IUser) {
    setCurrentUser(user);
    setIsModal(true);
  }

  function closeModal() {
    setIsModal(false);
  }

  function sortUsers(isIncrease: boolean) {
    if (isIncrease) {
      usersList.sort((prev, next): number => {
        if (prev.fio < next.fio) return -1;
        if (prev.fio > next.fio) return 1;
        return 0;
      });
    } else {
      usersList.sort((prev, next): number => {
        if (prev.fio > next.fio) return -1;
        if (prev.fio < next.fio) return 1;
        return 0;
      });
    }
    setUsersList(usersList);
  }

  function sortByCity(isIncrease: boolean) {
    if (isIncrease) {
      usersList.sort((prev, next): number => {
        if (prev.cityId.name < next.cityId.name) return -1;
        if (prev.cityId.name > next.cityId.name) return 1;
        return 0;
      });
    } else {
      usersList.sort((prev, next): number => {
        if (prev.cityId.name > next.cityId.name) return -1;
        if (prev.cityId.name < next.cityId.name) return 1;
        return 0;
      });
    }
    setUsersList(usersList);
  }

  function getCitiesList() {
    citiesApi
      .getCities()
      .then((data) => {
        data.areas.forEach((item: any) => {
          item.areas.forEach((city: any) => {
            citiesList.push({
              id: city.id,
              name: city.name,
            });
          });
        });
      })
      .catch((err) => console.log("Не пришел список городов: ", err));
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="root">
        <Aside />
        <Header isLoggedIn={isLoggedIn} />
        <BrowserRouter>
          <Switch>
            <ProtectedComponent
              path="/sign-in"
              isLoggedIn={isLoggedIn}
              component={Login}
              onLogin={onLogin}
            />
            <ProtectedComponent
              path="/add-user"
              isLoggedIn={isLoggedIn}
              component={AddUser}
              onAddUser={updateUserData}
              cities={citiesList}
            />
            <ProtectedComponent
              path="/edit-user"
              isLoggedIn={isLoggedIn}
              component={EditUser}
              onEditUser={updateUserData}
              cities={citiesList}
            />
            <Route path="*">
              <UsersListContext.Provider value={usersList}>
                <UsersList
                  onEditUser={updateUserData}
                  onDeleteUser={openModalToDeleteUser}
                  sortUsers={sortUsers}
                  sortCities={sortByCity}
                />
                <ModalWindow
                  visible={isModal}
                  object={User}
                  onClose={closeModal}
                  onDelete={deleteUser}
                />
              </UsersListContext.Provider>
              <Route>
                {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
              </Route>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
