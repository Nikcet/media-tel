import React from "react";
import Login from "./Login";
import Header from "./Header";
import UsersList from "./UsersList";
import Aside from "./Aside";
import AddUser from "./AddUser";
import ProtectedComponent from "./ProtectedComponent";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
import * as auth from "../utils/Auth";
import { IAuthData } from "../utils/types";

function App() {
  const defaultUser = {
    _id: "",
    fio: "",
    cityId: "",
  };

  const defaultCity = {
    id: "",
    name: "",
  };

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [User, setUser] = React.useState(defaultUser);
  const [city, setCity] = React.useState(defaultCity);
  // const history: any = useHistory();

  // React.useEffect(() => {
  //   signIn();
  // }, [])

  function onLogin({ login, password }: IAuthData): void {
    // Возможно, понадобится дальше
    setLogin(login);
    setPassword(password);
    // Как должно выглядеть

    // onLogin: ({ login, password }: IAuthData) => {
    //   auth
    //     .authorization({ login, password })
    //     .then(() => {
    //       if (localStorage.getItem("token")) {
    //         signIn();
    //       }
    //     })
    //     .catch((err: any) => console.log("Не авторизовался:", err));
    // }
    signIn();
  }

  function signIn(): void {
    localStorage.setItem("token", "testToken"); // Для решения тестового задания
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);

      // Как должно выглядеть

      // auth
      //   .login(token)
      //   .then(() => {
      //     setIsLoggedIn(true);
      //   })
      //   .catch((err) => console.log("Не залогинился:", err));
    } else {
      setIsLoggedIn(false);
    }
  }

  function signOut(): void {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  return (
    <div className="root">
      <Aside />
      <Header />
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
          />
          <Route path="/">
            <UsersList />
            <Route>
              {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
            </Route>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
